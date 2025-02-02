"use client";

import { useDarkMode } from "@/components/DarkModeContext";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(darkMode);
  }, [darkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      checked={isDark}
      onChange={toggleDarkMode}
      size={30}
      moonColor="white"
      sunColor="black"
    />
  );
}
