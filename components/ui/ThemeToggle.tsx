"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        className="border-gray-700 text-gray-300 hover:bg-[#1a202c]"
      >
        Loading...
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border-gray-700 text-gray-300 hover:bg-[#1a202c] transition duration-300"
    >
      {isDark ? (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] mr-2" />
          ☀️ Light Mode
        </>
      ) : (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />
          🌙 Dark Mode
        </>
      )}
    </Button>
  );
}