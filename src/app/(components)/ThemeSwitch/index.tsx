import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState(theme === 'light')

  const handleThemeChange = () => {
    setTheme(enabled ? 'dark' : 'light')
    setEnabled(!enabled)
  }

  return (
    <button
        onClick={handleThemeChange}
    >
    { enabled ? (
      <Sun className="cursor-pointer text-stone-600" size={24} />
    ) : (
      <Moon className="cursor-pointer text-stone-400" size={24} />
    )}
  </button>
  )
}

export default ThemeSwitch;
