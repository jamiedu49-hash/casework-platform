"use client";

import Link from "next/link";
import { BookOpen, Home, Library, GraduationCap, User } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "首页", icon: Home },
  { href: "/scenarios", label: "场景库", icon: Library },
  { href: "/skills", label: "技巧手册", icon: BookOpen },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and platform name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-800 hidden sm:block">
              个案工作训练平台
            </span>
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-200 text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side: user avatar */}
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200">
              <User className="w-5 h-5 text-slate-500" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100 mt-1 pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-200 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
