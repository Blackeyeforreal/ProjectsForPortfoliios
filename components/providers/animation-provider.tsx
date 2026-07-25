// Placeholder for general theme/animation context provider
"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
}