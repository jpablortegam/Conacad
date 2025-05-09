"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Definimos los colores disponibles
export const availableThemeColors = [
  { name: "Zinc", light: "bg-zinc-900", dark: "bg-zinc-700" },
  { name: "Rose", light: "bg-rose-600", dark: "bg-rose-700" },
  { name: "Blue", light: "bg-blue-600", dark: "bg-blue-700" },
  { name: "Green", light: "bg-green-600", dark: "bg-green-500" },
  { name: "Orange", light: "bg-orange-500", dark: "bg-orange-700" },
  { name : "Purple", light: "bg-purple-500", dark: "bg-purple-700"}
];

// Creamos el contexto para manejar el color del tema
const ThemeColorContext = React.createContext({
  themeColor: "Zinc",
  setThemeColor: (color: string) => {
    console.log(`Theme color set to: ${color}`);
  },
});

// Provider del contexto
export const ThemeColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeColor, setThemeColor] = React.useState("Zinc");
  
  // Aplicar el atributo data-theme al elemento html
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColor);
    
    // Limpiar al desmontar
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [themeColor]);

  return (
    <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useThemeColorContext = () => React.useContext(ThemeColorContext);

// Componente para el selector de color
export function ThemeColorToggle() {
  const { themeColor, setThemeColor } = useThemeColorContext();
  const { theme } = useTheme();

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="flex items-center space-x-3">
          <div
            className={cn(
              "rounded-full",
              "w-[20px]",
              "h-[20px]",
              theme === "light" ? light : dark
            )}
          ></div>
          <div className="text-sm">{name}</div>
        </div>
      </SelectItem>
    ));
  };

  return (
    <Select
      onValueChange={(value) => setThemeColor(value)}
      defaultValue={themeColor}
    >
      <SelectTrigger 
        className="w-[180px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="Select Color" />
      </SelectTrigger>
      <SelectContent className="border-muted bg-white dark:bg-gray-800">
        {createSelectItems()}
      </SelectContent>
    </Select>
  );
}