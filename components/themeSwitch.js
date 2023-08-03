"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeSwitch = () => {
  //   const [mounted, setMounted] = useState(false);
  //   const { resolvedTheme, setTheme } = useTheme();
  const { theme, setTheme } = useTheme("dark");

  // useEffect only runs on the client, so now we can safely show the UI
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   if (!mounted) {
  //     return null;
  //   }

  return (
    <div className="inline-flex items-center">
      {/* <Icon theme={theme} /> */}
      {/* <select
        className=" py-2 pr-2 dark:bg-black dark:text-white"
        name="themeSwitch"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}

      {/* =============================review========================= */}
      {/* <div className="ml-5 mt-5 lg:ml-0 lg:mt-1">
        <div
          onClick={async () => {
            if (theme === "dark") {
              await setTheme("light");
            } else {
              await setTheme("dark");
            }
          }}
          className="">
          {theme === "light" ? <Sun /> : <Moon />}
        </div>
      </div> */}
    </div>
  );
};

export default ThemeSwitch;
