"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { AuthAction, AuthState, LoginCredentials, User } from "@/types/auth";
import { AUTH_STORAGE_KEY, DEMO_CREDENTIALS } from "@/utils/constants";

const initialState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case "LOGIN_FAILURE":
      return { user: null, isLoading: false, isAuthenticated: false };
    case "GUEST_LOGIN":
      return {
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return { user: null, isLoading: false, isAuthenticated: false };
    case "RESTORE_SESSION":
      return {
        user: action.payload,
        isLoading: false,
        isAuthenticated: action.payload !== null,
      };
    default:
      return state;
  }
}

interface AuthContextValue extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  loginAsGuest: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

function persistUser(user: User | null) {
  try {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch {
    // ignore storage errors
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const user = JSON.parse(stored) as User;
        dispatch({ type: "RESTORE_SESSION", payload: user });
      } else {
        dispatch({ type: "RESTORE_SESSION", payload: null });
      }
    } catch {
      dispatch({ type: "RESTORE_SESSION", payload: null });
    }
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<boolean> => {
      dispatch({ type: "LOGIN_START" });

      await new Promise((resolve) => setTimeout(resolve, 800));

      if (
        credentials.email === DEMO_CREDENTIALS.email &&
        credentials.password === DEMO_CREDENTIALS.password
      ) {
        const user: User = {
          id: "user-001",
          email: credentials.email,
          name: "Demo User",
          isGuest: false,
        };
        persistUser(user);
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        return true;
      }

      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    },
    []
  );

  const loginAsGuest = useCallback(() => {
    const user: User = {
      id: `guest-${Date.now()}`,
      email: "guest@electrohub.com",
      name: "Guest User",
      isGuest: true,
    };
    persistUser(user);
    dispatch({ type: "GUEST_LOGIN", payload: user });
  }, []);

  const logout = useCallback(() => {
    persistUser(null);
    dispatch({ type: "LOGOUT" });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      login,
      loginAsGuest,
      logout,
    }),
    [state, login, loginAsGuest, logout]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
