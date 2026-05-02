/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { Home, Map, BarChart2, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          {children}
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-4 z-50">
          {[
            { icon: Home, path: '/dashboard' },
            { icon: Map, path: '/learning-path' },
            { icon: BarChart2, path: '/progress' },
            { icon: Settings, path: '/settings' },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "p-2 rounded-xl transition-all",
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                    : "text-slate-400"
                )
              }
            >
              <item.icon className="w-6 h-6" />
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
