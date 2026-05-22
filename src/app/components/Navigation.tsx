import { Home, Shield, TrendingUp, GraduationCap, CheckSquare, BookOpen, Mail, Moon, Sun, Contrast } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'Sobre a NR-1', icon: Shield },
  { id: 'risks', label: 'Gerenciamento de Riscos', icon: TrendingUp },
  { id: 'training', label: 'Treinamentos', icon: GraduationCap },
  { id: 'checklist', label: 'Checklist', icon: CheckSquare },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contato', icon: Mail },
];

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const { darkMode, highContrast, toggleDarkMode, toggleHighContrast } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">NR-1 Portal</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-label={item.label}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Alternar modo escuro"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleHighContrast}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Alternar alto contraste"
            >
              <Contrast className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="md:hidden pb-3 flex gap-2 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
