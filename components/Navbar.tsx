"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md border-b border-border/40"
          : "bg-background border-b border-border",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <div className="bg-primary/10 p-2 rounded-md hover:bg-primary/20 transition-colors">
              <Home className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-xl">Launch UI</span>
          </div>

          {/* Botones y Modo */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="text-sm font-medium"
                onClick={() => handleNavigation("/signin")}
              >
                Sign In
              </Button>
              <Button
                size="sm"
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
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 right-0 bg-background border-t border-border transition-all duration-300 ${
          isMenuOpen ? "max-h-40" : "max-h-0"
        } overflow-hidden md:hidden`}
      >
        <div className="flex flex-col items-center gap-2 py-4">
          <Button
            variant="outline"
            className="w-10/12 text-sm font-medium"
            onClick={() => handleNavigation("/signin")}
          >
            Sign In
          </Button>
          <Button
            className="w-10/12 text-sm font-medium"
            onClick={() => handleNavigation("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
