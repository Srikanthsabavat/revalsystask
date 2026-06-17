interface LoaderProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeMap = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-3",
};

export default function Loader({ size = "md", label = "Loading..." }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12" role="status">
      <div
        className={`animate-spin rounded-full border-blue-600 border-t-transparent ${sizeMap[size]}`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
      {label && (
        <p className="text-sm text-slate-500" aria-hidden="true">
          {label}
        </p>
      )}
    </div>
  );
}
