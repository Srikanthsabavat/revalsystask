export interface User {
  id: string;
  email: string;
  name: string;
  isGuest: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" }
  | { type: "GUEST_LOGIN"; payload: User }
  | { type: "RESTORE_SESSION"; payload: User | null };

export interface LoginCredentials {
  email: string;
  password: string;
}
