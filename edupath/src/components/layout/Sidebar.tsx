/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink } from 'react-router-dom';
import { Home, Map, BarChart2, Settings, LogOut, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Map, label: 'Learning Path', path: '/learning-path' },
  { icon: BarChart2, label: 'Progress', path: '/progress' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useAuth();

  return (
    <motion.aside
      className={cn(
        "hidden md:flex flex-col h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 relative",
        isCollapsed ? "w-20" : "w-64"
      )}
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
    >
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/30">
          <GraduationCap className="w-6 h-6" />
        </div>
        {!isCollapsed && (
          <motion.span
            className="font-bold text-xl tracking-tight text-slate-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            EduPath
          </motion.span>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 p-3 rounded-xl transition-all group",
                isActive
                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium"
                  : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              )
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className={cn("flex items-center gap-3", isCollapsed ? "justify-center" : "px-2")}>
          <Avatar className="w-8 h-8 border-2 border-white dark:border-slate-700 shadow-sm">
            <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-bold">
              {user?.name?.[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user?.name}</p>
              <button 
                onClick={logout}
                className="text-xs text-slate-500 hover:text-rose-500 flex items-center gap-1 mt-0.5 transition-colors"
                id="logout-button"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full p-1 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors z-10"
        id="sidebar-toggle"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </motion.aside>
  );
}
