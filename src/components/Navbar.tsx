"use client";

import Link from "next/link";
import {
  BookOpen,
  Home,
  Library,
  GraduationCap,
  User,
  Clock,
  LogOut,
  X,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import {
  getPractitioner,
  savePractitioner,
  clearPractitioner,
} from "@/lib/storage";
import type { PractitionerProfile } from "@/data/types";

const navLinks = [
  { href: "/", label: "首页", icon: Home },
  { href: "/scenarios", label: "场景库", icon: Library },
  { href: "/skills", label: "技巧手册", icon: BookOpen },
  { href: "/history", label: "练习记录", icon: Clock },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practitioner, setPractitioner] = useState<PractitionerProfile | null>(
    null
  );
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [formId, setFormId] = useState("");
  const [formName, setFormName] = useState("");

  useEffect(() => {
    setPractitioner(getPractitioner());
  }, []);

  const handleLogin = useCallback(() => {
    if (!formId.trim() || !formName.trim()) return;
    const profile: PractitionerProfile = {
      id: formId.trim(),
      name: formName.trim(),
      createdAt: new Date().toISOString(),
    };
    savePractitioner(profile);
    setPractitioner(profile);
    setShowLoginModal(false);
    setFormId("");
    setFormName("");
  }, [formId, formName]);

  const handleLogout = useCallback(() => {
    clearPractitioner();
    setPractitioner(null);
    setShowUserMenu(false);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-800 hidden sm:block">
                个案工作训练平台
              </span>
            </Link>

            {/* Desktop nav */}
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

            {/* Right: user area */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => {
                    if (practitioner) {
                      setShowUserMenu(!showUserMenu);
                    } else {
                      setShowLoginModal(true);
                    }
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-200 ${
                    practitioner
                      ? "bg-blue-50 hover:bg-blue-100 text-blue-700"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-500"
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium max-w-[80px] truncate hidden sm:block">
                    {practitioner ? practitioner.name : "登录"}
                  </span>
                </button>

                {/* User dropdown */}
                {showUserMenu && practitioner && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-800">
                        {practitioner.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        学号: {practitioner.id}
                      </p>
                    </div>
                    <Link
                      href="/history"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Clock className="w-4 h-4" />
                      练习记录
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      退出登录
                    </button>
                  </div>
                )}
              </div>

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

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden pb-4 border-t border-slate-100 mt-1 pt-3">
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

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold text-slate-800 mb-1">
              输入练习者信息
            </h2>
            <p className="text-sm text-slate-500 mb-5">
              请填写你的学号和姓名，用于记录练习进度
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="学号 / ID"
                value={formId}
                onChange={(e) => setFormId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                autoFocus
              />
              <input
                type="text"
                placeholder="姓名"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={!formId.trim() || !formName.trim()}
              className="w-full mt-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors duration-200"
            >
              开始练习
            </button>
          </div>
        </div>
      )}

      {/* Click outside to close menus */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </>
  );
}
