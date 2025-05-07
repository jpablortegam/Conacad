"use client";

import { Globe, Laptop, User, Bell } from "lucide-react";
import Image from "next/image";

// Definición de tipos
type StatCardProps = {
  title: string;
  icon: React.ReactNode;
  className: string;
  children: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
};

type TagProps = {
  label: string;
  percent: string;
  className: string;
};

type UserItemProps = {
  name: string;
  avatar?: string;
  avatarClassName?: string;
  avatarContent?: React.ReactNode;
  online?: boolean;
};

// Componentes de widgets
export const StatCard = ({
  title,
  icon,
  className,
  children,
  iconBgColor = "rgba(67,97,238,0.1)",
  iconColor = "var(--primary)"
}: StatCardProps) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl p-6 pt-5 border border-white/80 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl ${className}`}
    >
      <div className="flex items-center gap-4 mb-5">
      <div 
        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-0`}
        style={{ backgroundColor: iconBgColor, color: iconColor }}
      >
          {icon}
        </div>
        <h3 className="text-[17px] font-semibold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export const Tag = ({ label, percent, className }: TagProps) => {
  return (
    <div
      className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow ${className}`}
    >
      {label}: {percent}
    </div>
  );
};

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

export const UserItem = ({
  name,
  avatar,
  avatarClassName,
  avatarContent,
  online = false,
}: UserItemProps) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer transition-all hover:-translate-y-2">
      <div
        className={`w-[70px] h-[70px] rounded-full flex items-center justify-center border-3 border-white transition-all relative overflow-hidden ${avatarClassName}`}
      >
        <Image src={avatar || "/default-avatar.png"} alt={name} className="w-full h-full object-cover" layout="fill" objectFit="cover" />
        <Image src={avatar || "/default-avatar.png"} alt={name} layout="fill" objectFit="cover" />
        {avatarContent || <User size={26} />}
        <div
          className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-white ${
            online ? "bg-emerald-500" : "bg-gray-400"
          }`}
        ></div>
      </div>
      <span className="text-xs font-medium text-gray-800 transition-all">
        {name}
      </span>
    </div>
  );
};

export const BrowserStats = () => {
  return (
    <StatCard
      title="Navegadores"
      icon={<Globe size={22} />}
      iconBgColor="rgba(10, 132, 189, 0.1)"
      iconColor="#4361ee"
      className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px]"
    >
      <div className="flex flex-wrap gap-3">
        <Tag
          label="CHROME"
          percent="73%"
          className="bg-purple-50 text-purple-700"
        />
        <Tag
          label="FIREFOX"
          percent="10%"
          className="bg-orange-50 text-orange-700"
        />
        <Tag label="EDGE" percent="11%" className="bg-blue-50 text-blue-700" />
        <Tag label="OPERA" percent="3%" className="bg-red-50 text-red-700" />
      </div>
    </StatCard>
  );
};

export const OperatingSystemStats = () => {
  return (
    <StatCard
      title="Sistemas Operativos"
      icon={<Laptop size={22} />}
      iconBgColor="rgba(0,180,216,0.1)"
      iconColor="#00b4d8"
      className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px]"
    >
      <div className="flex flex-wrap gap-3">
        <Tag
          label="WINDOWS"
          percent="53%"
          className="bg-green-50 text-green-700"
        />
        <Tag
          label="MACOS"
          percent="13%"
          className="bg-gray-100 text-gray-700"
        />
        <Tag
          label="LINUX"
          percent="5%"
          className="bg-amber-50 text-amber-700"
        />
        <Tag
          label="ANDROID"
          percent="27%"
          className="bg-cyan-50 text-cyan-800"
        />
      </div>
    </StatCard>
  );
};

export const TeachersStats = () => {
  return (
    <StatCard
      title="Profesores"
      icon={<User size={22} />}
      iconBgColor="rgba(114,9,183,0.1)"
      iconColor="#7209b7"
      className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px]"
    >
      <StatCount
        count="120"
        className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
      />
    </StatCard>
  );
};

export const StudentsStats = () => {
  return (
    <StatCard
      title="Alumnos Inscritos"
      icon={<Bell size={22} />}
      iconBgColor="rgba(6,214,160,0.1)"
      iconColor="#06d6a0"
      className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px]"
    >
      <StatCount
        count="300"
        className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"
      />
    </StatCard>
  );
};

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