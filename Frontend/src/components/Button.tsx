import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition";
  const variants: Record<string, string> = {
    primary: "bg-green-500 text-white hover:bg-green-600 shadow-lg",
    ghost: "bg-green-50 text-green-700 hover:bg-green-100",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
