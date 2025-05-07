"use client";

import * as React from "react";
import { Globe, Laptop, User, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";

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
  className: string;
};

// ==============================
// Componente Principal: StatCard
// ==============================
export const StatCard = ({
  title,
  icon,
  children,
  iconBgColor = "bg-primary/10",
  iconColor = "text-primary",
}: StatCardProps) => {
  return (
    <Card className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 pt-5 border border-gray-200 dark:border-gray-700 shadow-md transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-100 dark:hover:shadow-gray-900">
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${iconBgColor} ${iconColor}`}
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
  className: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-4 relative">
      <div
        className={`text-5xl font-bold transition-all relative ${className}`}
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
  return (
    <StatCard
      title="Navegadores"
      icon={<Globe size={22} />}
      iconBgColor="bg-sky-100 dark:bg-sky-900"
      iconColor="text-sky-500 dark:text-sky-300"
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
  return (
    <StatCard
      title="Sistemas Operativos"
      icon={<Laptop size={22} />}
      iconBgColor="bg-teal-100 dark:bg-teal-900"
      iconColor="text-teal-500 dark:text-teal-300"
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
          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-purple-300"
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
  return (
    <StatCard
      title="Profesores"
      icon={<User size={22} />}
      iconBgColor="bg-purple-100 dark:bg-purple-900"
      iconColor="text-purple-500 dark:text-purple-300"
    >
      <StatCount
        count="120"
        className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 bg-clip-text text-transparent"
      />
    </StatCard>
  );
};

// ==============================
// Componente: StudentsStats
// ==============================
export const StudentsStats = () => {
  return (
    <StatCard
      title="Alumnos Inscritos"
      icon={<Bell size={22} />}
      iconBgColor="bg-emerald-100 dark:bg-emerald-900"
      iconColor="text-emerald-500 dark:text-emerald-300"
    >
      <StatCount
        count="300"
        className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent"
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
