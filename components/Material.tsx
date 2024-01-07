"use client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/lib/theme";

export const MaterialTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
