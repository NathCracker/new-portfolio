"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// This safely extracts the props type directly from the component
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}