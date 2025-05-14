"use client";


import { ModeToggle } from "@/components/mode-toggle";
import ConaCad from "@/components/ConaCad";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function NavbarLogin({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    // Si ya estamos en la misma ruta, no hacemos nada
    if (pathname === path) {
      // Opcionalmente, puedes hacer scroll al inicio de la página
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(path);
    }
  };

  return (
    <nav
      className={cn(
        "w-full z-50 bg-background border-b border-border",
        className
      )}
      {...props}
    >
      {/* Barra principal */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <div className="bg-primary/10 p-2.5 rounded-md hover:bg-primary/20 transition-colors">
              <Home className="w-6 h-6 text-primary" />
            </div>
             <ConaCad />
          </div>

          {/* Botones y Modo */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:flex gap-3 md:gap-5">
              {/* Aquí puedes añadir botones o enlaces que solo se muestren en desktop */}
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
      {/* No hay menú móvil */}
    </nav>
  );
}