"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Determine the current theme for rendering
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-xl border-b border-gray-200 dark:border-gray-700">
      <div className="container">
        <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-all duration-300"
            data-testid="link-home-logo"
          >
            <div className="relative">
              <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-xl overflow-hidden border-2 border-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src="/image_1758300068483.png"
                  alt="THE PILLARS Logo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                THE PILLARS
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                Premium Coaching Classes
              </p>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-base font-bold text-gray-900 dark:text-white">
                THE PILLARS
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
                data-testid={`link-nav-${item.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="h-9 w-9 sm:h-10 sm:w-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              {mounted ? (
                currentTheme === "light" ? (
                  <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                )
              ) : (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 sm:h-10 sm:w-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg overflow-hidden border border-blue-600">
                <img
                  src="/image_1758300068483.png"
                  alt="THE PILLARS Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Menu
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="button-close-mobile-menu"
              className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
    </header>
  );
}
