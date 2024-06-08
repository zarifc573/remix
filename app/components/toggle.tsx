import { Moon, Sun } from "lucide-react"
import { Theme, useTheme } from "remix-themes"

export function ModeToggle() {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gray-200 rounded-full cursor-pointer"
    >
      <div
        className={`absolute top-0 left-0 w-8 h-full bg-white rounded-full shadow-md transition-transform duration-300 ${
          theme === Theme.LIGHT ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      ></div>
      <div
        className={`absolute top-0 left-0 w-8 h-full flex items-center justify-center transition-transform duration-300 ${
          theme === Theme.LIGHT ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {theme === Theme.LIGHT ? (
          <Sun className="h-4 w-4" /> // Change icon size and styles as needed
        ) : (
          <Moon className="h-4 w-4 dark:text-black" /> // Change icon size and styles as needed
        )}
      </div>
    </div>
  )
}
