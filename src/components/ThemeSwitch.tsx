'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
// import { useLocalStorage } from "usehooks-ts";

const ThemeSwitch = () => {
  // const [theme, setTheme] = useLocalStorage("theme", "light");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }

  // useEffect(() => {
  //   document.body.classList.remove("light", "dark");
  //   document.body.classList.add(theme);
  // }, [theme]);

  // const [enabled, setEnabled] = useState(theme === "light");

  // const handleThemeChange = () => {
  //   setTheme(enabled ? "dark" : "light");
  //   setEnabled(!enabled);
  // };

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={()=>{
        setTheme(resolvedTheme === 'light' ? 'light' : 'dark')
      }}
      // className="px-3 py-3 rounded-full hover:bg-stone-300 dark:hover:bg-stone-600"
      // onClick={handleThemeChange}
    >
      {resolvedTheme === 'light' ? (
        <Sun className="size-4 text-orange-300" />
      ) : (
        <Moon className="size-4 text-sky-950" />
      )}

      <span className='sr-only'>Toggle Theme</span>
    </Button>
  );
};

export default ThemeSwitch;
