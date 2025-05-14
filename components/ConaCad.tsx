"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ConCadProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "bright" | "subtle" | "neon";
  onClick?: () => void;
}

export default function ConCad({
  className,
  size = "md",
  variant = "default",
  onClick
}: ConCadProps) {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl"
  };

  const variantGradients = {
    default: "linear-gradient(135deg, #10b981, #65a30d)",
    bright: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
    subtle: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    neon: "linear-gradient(135deg, #ec4899, #ef4444)"
  };

  return (
    <h1
      onClick={onClick}
      className={cn(
        "font-extrabold relative inline-block cursor-pointer text-transparent bg-clip-text animate-conacad-shimmer",
        sizeClasses[size],
        className
      )}
      style={{
        backgroundImage: variantGradients[variant],
      }}
    >
      ConaCad
    </h1>
  );
}
