"use client";

import { useDarkMode } from "@/components/DarkModeContext";
import { useState, useEffect } from "react";
// Importer le module sans typage
import { DarkModeSwitch as DarkModeSwitchRaw } from "react-toggle-dark-mode";

// Déclarer le type explicite pour DarkModeSwitch
type DarkModeSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size: number;
  moonColor: string;
  sunColor: string;
};

const DarkModeSwitch = DarkModeSwitchRaw as React.FC<DarkModeSwitchProps>;

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
