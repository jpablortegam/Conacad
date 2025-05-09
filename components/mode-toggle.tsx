"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const toggleTheme = () => {
    // Cambiar entre modo claro y oscuro
    setTheme(theme === "dark" ? "light" : "dark")
    
    // Desseleccionar el botón automáticamente
    if (buttonRef.current) {
      buttonRef.current.blur()
    }
  }

  return (
    <Button 
      ref={buttonRef}
      variant="outline" 
      size="icon"
      onClick={toggleTheme}
      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500 dark:text-blue-300" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}