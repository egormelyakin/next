"use client";

import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "components/ui/button";
import { useUserInterface } from "components/user-interface-store";

export default function ThemeToggle() {
  const theme = useUserInterface((state) => state.theme);
  const setUserInterface = useUserInterface((state) => state.setUserInterface);

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setUserInterface({ theme: theme === "dark" ? "light" : "dark" })}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
