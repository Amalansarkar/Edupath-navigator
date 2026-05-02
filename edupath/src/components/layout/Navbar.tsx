/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLocation } from 'react-router-dom';
import { Sun, Moon, Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'Dashboard';
      case '/learning-path': return 'Learning Path';
      case '/progress': return 'Progress';
      case '/settings': return 'Settings';
      default: return 'EduPath';
    }
  };

  return (
    <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between z-20">
      <h1 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">{getPageTitle()}</h1>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full">
          <Search className="w-5 h-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full">
          <Bell className="w-5 h-5" />
        </Button>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full"
          id="theme-toggle"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>

        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2 hidden md:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-1 pl-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full">
              <span className="text-xs font-semibold hidden md:block text-slate-700 dark:text-slate-300">{user?.name}</span>
              <Avatar className="w-8 h-8 border-2 border-indigo-100 dark:border-indigo-900/50">
                <AvatarFallback className="bg-indigo-600 text-white text-xs font-bold">
                  {user?.name?.[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 p-2 rounded-xl mt-2">
            <DropdownMenuItem className="p-2 gap-2 rounded-lg cursor-pointer">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={logout}
              className="p-2 gap-2 rounded-lg cursor-pointer text-rose-500 focus:text-rose-500"
            >
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
