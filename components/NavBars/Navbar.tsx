"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Navbar({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
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
            <span className="font-bold text-2xl">Launch UI</span>
          </div>

          {/* Botones y Modo */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:flex gap-3 md:gap-5">
              <Button
                variant="default"
                size="default"
                className="text-sm font-medium "
                onClick={() => handleNavigation("/Sign-In")}
              >
                Sign In
              </Button>
              <Button
                size="default"
                variant={"link"}
                className="text-sm font-medium"
                onClick={() => handleNavigation("/signup")}
              >
                Sign Up
              </Button>
            </div>
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full bg-background border-t border-border transition-all duration-300 ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        } overflow-hidden md:hidden`}
      >
        <div className="container mx-auto p-4 space-y-2 bg-background">
          <div className="w-full h-px bg-border my-1"></div>
          <Button
            variant="outline"
            className="w-full text-sm font-medium"
            onClick={() => handleNavigation("/signin")}
          >
            Sign In
          </Button>
          <Button
            className="w-full text-sm font-medium"
            onClick={() => handleNavigation("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}