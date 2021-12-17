import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    if (theme === "system") {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return null;
  }

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className="flex justify-center items-center w-8 p-1 rounded bg-gray-800 dark:bg-yellow-300 focus:outline-none"
      aria-label="Theme Toggle"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
    >
      {isDark() ? (
        <BiSun size={20} color="#000" />
      ) : (
        <BiMoon size={20} color="#fff" />
      )}
    </button>
  );
}
