"use client";

import * as React from "react";
import { Globe, Laptop, User, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useThemeColorContext } from "@/components/theme-color-toggle";

// Tipos de propiedades
type StatCardProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
};

type TagProps = {
  label: string;
  percent: string;
  className?: string;
};

// Mapeo de colores por tema
const themeColorMap = {
  Zinc: {
    primary: {
      bg: "bg-zinc-100 dark:bg-zinc-900",
      text: "text-zinc-500 dark:text-zinc-300",
      hover: "hover:shadow-zinc-100 dark:hover:shadow-zinc-900",
      gradient: "from-zinc-600 to-zinc-800 dark:from-zinc-500 dark:to-zinc-700"
    },
    // Los colores específicos para tags permanecen igual
  },
  Rose: {
    primary: {
      bg: "bg-rose-100 dark:bg-rose-900",
      text: "text-rose-500 dark:text-rose-300",
      hover: "hover:shadow-rose-100 dark:hover:shadow-rose-900",
      gradient: "from-rose-600 to-rose-800 dark:from-rose-500 dark:to-rose-700"
    },
  },
  Blue: {
    primary: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-500 dark:text-blue-300",
      hover: "hover:shadow-blue-100 dark:hover:shadow-blue-900",
      gradient: "from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700"
    },
  },
  Green: {
    primary: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-500 dark:text-green-300",
      hover: "hover:shadow-green-100 dark:hover:shadow-green-900",
      gradient: "from-green-600 to-green-800 dark:from-green-500 dark:to-green-700"
    },
  },
  Orange: {
    primary: {
      bg: "bg-orange-100 dark:bg-orange-900",
      text: "text-orange-500 dark:text-orange-300",
      hover: "hover:shadow-orange-100 dark:hover:shadow-orange-900",
      gradient: "from-orange-600 to-orange-800 dark:from-orange-500 dark:to-orange-700"
    },
  },
  Purple: {
    primary: {
      bg: "bg-purple-100 dark:bg-purple-900",
      text: "text-purple-500 dark:text-purple-300",
      hover: "hover:shadow-purple-100 dark:hover:shadow-purple-900",
      gradient: "from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700"
    },
  },
};

// ==============================
// Componente Principal: StatCard
// ==============================
export const StatCard = ({
  title,
  icon,
  children,
  iconBgColor,
  iconColor,
}: StatCardProps) => {
  const { themeColor } = useThemeColorContext();
  
  // Usar los colores del tema si no se proporcionan colors específicos
  const bgColor = iconBgColor || themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.bg || "bg-primary/10";
  const textColor = iconColor || themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.text || "text-primary";
  const hoverShadow = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.hover || "hover:shadow-sky-100 dark:hover:shadow-gray-900";

  return (
    <Card className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 pt-5 border border-gray-200 dark:border-gray-700 shadow-md transition-all hover:-translate-y-2 hover:shadow-lg ${hoverShadow}`}>
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${bgColor} ${textColor}`}
        >
          {icon}
        </div>
        <h3 className="text-[17px] font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      {children}
    </Card>
  );
};

// ==============================
// Componente: Tag
// ==============================
export const Tag = ({ label, percent, className }: TagProps) => {
  return (
    <div
      className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow ${className}`}
    >
      {label}: {percent}
    </div>
  );
};

// ==============================
// Componente: StatCount
// ==============================
export const StatCount = ({
  count,
  className,
}: {
  count: string;
  className?: string;
}) => {
  const { themeColor } = useThemeColorContext();
  
  // Obtener el gradiente del tema actual si no se proporciona una clase específica
  const gradientClass = className || 
    `bg-gradient-to-r ${themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.gradient || "from-sky-600 to-sky-800"} bg-clip-text text-transparent`;
  
  return (
    <div className="flex flex-col items-center justify-center py-4 relative">
      <div
        className={`text-5xl font-bold transition-all relative ${gradientClass}`}
      >
        {count}
      </div>
    </div>
  );
};

// ==============================
// Componente: BrowserStats
// ==============================
export const BrowserStats = () => {
  const { themeColor } = useThemeColorContext();
  const iconBg = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.bg || "bg-sky-100 dark:bg-sky-900";
  const iconColor = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.text || "text-sky-500 dark:text-sky-300";
  
  return (
    <StatCard
      title="Navegadores"
      icon={<Globe size={22} />}
      iconBgColor={iconBg}
      iconColor={iconColor}
    >
      <div className="flex flex-wrap gap-3">
        <Tag
          label="CHROME"
          percent="73%"
          className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
        />
        <Tag
          label="FIREFOX"
          percent="10%"
          className="bg-orange-50 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
        />
        <Tag
          label="EDGE"
          percent="11%"
          className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
        />
        <Tag
          label="OPERA"
          percent="3%"
          className="bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300"
        />
      </div>
    </StatCard>
  );
};

// ==============================
// Componente: OperatingSystemStats
// ==============================
export const OperatingSystemStats = () => {
  const { themeColor } = useThemeColorContext();
  const iconBg = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.bg || "bg-teal-100 dark:bg-teal-900";
  const iconColor = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.text || "text-teal-500 dark:text-teal-300";

  return (
    <StatCard
      title="Sistemas Operativos"
      icon={<Laptop size={22} />}
      iconBgColor={iconBg}
      iconColor={iconColor}
    >
      <div className="flex flex-wrap gap-3">
        <Tag
          label="WINDOWS"
          percent="53%"
          className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300"
        />
        <Tag
          label="MACOS"
          percent="13%"
          className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
        />
        <Tag
          label="LINUX"
          percent="5%"
          className="bg-amber-50 dark:bg-amber-900 text-amber-700 dark:text-amber-300"
        />
        <Tag
          label="ANDROID"
          percent="27%"
          className="bg-cyan-50 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300"
        />
      </div>
    </StatCard>
  );
};

// ==============================
// Componente: TeachersStats
// ==============================
export const TeachersStats = () => {
  const { themeColor } = useThemeColorContext();
  const iconBg = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.bg || "bg-purple-100 dark:bg-purple-900";
  const iconColor = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.text || "text-purple-500 dark:text-purple-300";
  const gradient = `bg-gradient-to-r ${themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.gradient || "from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700"} bg-clip-text text-transparent`;

  return (
    <StatCard
      title="Profesores"
      icon={<User size={22} />}
      iconBgColor={iconBg}
      iconColor={iconColor}
    >
      <StatCount
        count="120"
        className={gradient}
      />
    </StatCard>
  );
};

// ==============================
// Componente: StudentsStats
// ==============================
export const StudentsStats = () => {
  const { themeColor } = useThemeColorContext();
  const iconBg = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.bg || "bg-emerald-100 dark:bg-emerald-900";
  const iconColor = themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.text || "text-emerald-500 dark:text-emerald-300";
  const gradient = `bg-gradient-to-r ${themeColorMap[themeColor as keyof typeof themeColorMap]?.primary.gradient || "from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500"} bg-clip-text text-transparent`;

  return (
    <StatCard
      title="Alumnos Inscritos"
      icon={<Bell size={22} />}
      iconBgColor={iconBg}
      iconColor={iconColor}
    >
      <StatCount
        count="300"
        className={gradient}
      />
    </StatCard>
  );
};

// ==============================
// Componente: StatsGrid
// ==============================
export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <BrowserStats />
      <OperatingSystemStats />
      <TeachersStats />
      <StudentsStats />
    </div>
  );
};


// "use client";

// import * as React from "react";
// import { Globe, Laptop, User, Bell } from "lucide-react";
// import { Card } from "@/components/ui/card";

// // Tipos de propiedades
// type StatCardProps = {
//   title: string;
//   icon: React.ReactNode;
//   children: React.ReactNode;
//   iconBgColor?: string;
//   iconColor?: string;
// };

// type TagProps = {
//   label: string;
//   percent: string;
//   className: string;
// };

// // ==============================
// // Componente Principal: StatCard
// // ==============================
// export const StatCard = ({
//   title,
//   icon,
//   children,
//   iconBgColor = "bg-primary/10",
//   iconColor = "text-primary",
// }: StatCardProps) => {
//   return (
//     <Card className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 pt-5 border border-gray-200 dark:border-gray-700 shadow-md transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-100 dark:hover:shadow-gray-900">
//       <div className="flex items-center gap-4 mb-5">
//         <div
//           className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${iconBgColor} ${iconColor}`}
//         >
//           {icon}
//         </div>
//         <h3 className="text-[17px] font-semibold text-gray-800 dark:text-white">
//           {title}
//         </h3>
//       </div>
//       {children}
//     </Card>
//   );
// };

// // ==============================
// // Componente: Tag
// // ==============================
// export const Tag = ({ label, percent, className }: TagProps) => {
//   return (
//     <div
//       className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow ${className}`}
//     >
//       {label}: {percent}
//     </div>
//   );
// };

// // ==============================
// // Componente: StatCount
// // ==============================
// export const StatCount = ({
//   count,
//   className,
// }: {
//   count: string;
//   className: string;
// }) => {
//   return (
//     <div className="flex flex-col items-center justify-center py-4 relative">
//       <div
//         className={`text-5xl font-bold transition-all relative ${className}`}
//       >
//         {count}
//       </div>
//     </div>
//   );
// };

// // ==============================
// // Componente: BrowserStats
// // ==============================
// export const BrowserStats = () => {
//   return (
//     <StatCard
//       title="Navegadores"
//       icon={<Globe size={22} />}
//       iconBgColor="bg-sky-100 dark:bg-sky-900"
//       iconColor="text-sky-500 dark:text-sky-300"
//     >
//       <div className="flex flex-wrap gap-3">
//         <Tag
//           label="CHROME"
//           percent="73%"
//           className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
//         />
//         <Tag
//           label="FIREFOX"
//           percent="10%"
//           className="bg-orange-50 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
//         />
//         <Tag
//           label="EDGE"
//           percent="11%"
//           className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
//         />
//         <Tag
//           label="OPERA"
//           percent="3%"
//           className="bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300"
//         />
//       </div>
//     </StatCard>
//   );
// };

// // ==============================
// // Componente: OperatingSystemStats
// // ==============================
// export const OperatingSystemStats = () => {
//   return (
//     <StatCard
//       title="Sistemas Operativos"
//       icon={<Laptop size={22} />}
//       iconBgColor="bg-teal-100 dark:bg-teal-900"
//       iconColor="text-teal-500 dark:text-teal-300"
//     >
//       <div className="flex flex-wrap gap-3">
//         <Tag
//           label="WINDOWS"
//           percent="53%"
//           className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300"
//         />
//         <Tag
//           label="MACOS"
//           percent="13%"
//           className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
//         />
//         <Tag
//           label="LINUX"
//           percent="5%"
//           className="bg-amber-50 dark:bg-amber-900 text-amber-700 dark:text-amber-300"
//         />
//         <Tag
//           label="ANDROID"
//           percent="27%"
//           className="bg-cyan-50 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300"
//         />
//       </div>
//     </StatCard>
//   );
// };

// // ==============================
// // Componente: TeachersStats
// // ==============================
// export const TeachersStats = () => {
//   return (
//     <StatCard
//       title="Profesores"
//       icon={<User size={22} />}
//       iconBgColor="bg-purple-100 dark:bg-purple-900"
//       iconColor="text-purple-500 dark:text-purple-300"
//     >
//       <StatCount
//         count="120"
//         className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 bg-clip-text text-transparent"
//       />
//     </StatCard>
//   );
// };

// // ==============================
// // Componente: StudentsStats
// // ==============================
// export const StudentsStats = () => {
//   return (
//     <StatCard
//       title="Alumnos Inscritos"
//       icon={<Bell size={22} />}
//       iconBgColor="bg-emerald-100 dark:bg-emerald-900"
//       iconColor="text-emerald-500 dark:text-emerald-300"
//     >
//       <StatCount
//         count="300"
//         className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent"
//       />
//     </StatCard>
//   );
// };

// // ==============================
// // Componente: StatsGrid
// // ==============================
// export const StatsGrid = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       <BrowserStats />
//       <OperatingSystemStats />
//       <TeachersStats />
//       <StudentsStats />
//     </div>
//   );
// };
