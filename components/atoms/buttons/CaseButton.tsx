import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "outline";
    children: React.ReactNode;
}

export default function CaseButton({
    variant = "secondary",
    children,
    className = "",
    ...props
}: ButtonProps){
    const baseStyles = "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm",
        secondary: "bg-zinc-700 hover:bg-zinc-600 text-zinc-100",
        danger: "bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-800",
        outline: "border border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10"
    };

    return (
        <button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}>
            {children}
        </button>
    );
}