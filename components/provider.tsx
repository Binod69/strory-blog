"use client";
import React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
  useTheme,
} from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <ToastProvider />
      </ThemeProvider>
    </>
  );
};

export default Provider;

function ToastProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      richColors
      closeButton
      position="top-center"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
