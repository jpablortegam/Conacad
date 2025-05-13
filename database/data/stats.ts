// database/data/stats.ts
// Datos de estadísticas para la aplicación con tipado TypeScript

// Definiciones de tipos
export type TagStyle = {
    label: string;
    percent: string;
    className: string;
  };
  
  export type CountStyle = {
    count: string;
    className: string;
  };
  
  export type CardStyle = {
    title: string;
    iconName: string;
    iconBgColor: string;
    iconColor: string;
  };
  
  // Datos de navegadores
  export const browserStats: TagStyle[] = [
    { label: "CHROME", percent: "73%", className: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300" },
    { label: "FIREFOX", percent: "10%", className: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300" },
    { label: "EDGE", percent: "11%", className: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300" },
    { label: "OPERA", percent: "3%", className: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300" },
  ];
  
  // Datos de sistemas operativos
  export const osStats: TagStyle[] = [
    { label: "WINDOWS", percent: "53%", className: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300" },
    { label: "MACOS", percent: "13%", className: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300" },
    { label: "LINUX", percent: "5%", className: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300" },
    { label: "ANDROID", percent: "27%", className: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300" },
  ];
  
  // Datos de profesores
  export const teachersData: CountStyle = {
    count: "120",
    className: "bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 bg-clip-text text-transparent"
  };
  
  // Datos de alumnos
  export const studentsData: CountStyle = {
    count: "300",
    className: "bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent"
  };
  
  // Configuración de iconos para las tarjetas de estadísticas
  export const cardConfig: Record<string, CardStyle> = {
    browsers: {
      title: "Navegadores",
      iconName: "Globe",
      iconBgColor: "bg-sky-100 dark:bg-sky-900",
      iconColor: "text-sky-500 dark:text-sky-300"
    },
    os: {
      title: "Sistemas Operativos",
      iconName: "Laptop",
      iconBgColor: "bg-teal-100 dark:bg-teal-900",
      iconColor: "text-teal-500 dark:text-teal-300"
    },
    teachers: {
      title: "Profesores",
      iconName: "User",
      iconBgColor: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-500 dark:text-purple-300"
    },
    students: {
      title: "Alumnos Inscritos",
      iconName: "Bell",
      iconBgColor: "bg-emerald-100 dark:bg-emerald-900",
      iconColor: "text-emerald-500 dark:text-emerald-300"
    }
  };