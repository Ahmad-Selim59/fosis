import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "medium";
};

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  medium: "max-w-2xl",
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto container-padding ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
