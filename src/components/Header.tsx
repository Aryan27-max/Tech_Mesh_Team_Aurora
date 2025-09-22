import  { Bell, User, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'welcome', label: 'WELCOME', icon: Settings },
    { id: 'circular', label: 'CIRCULAR', icon: '📋' },
    { id: 'profile', label: 'Student Profile', icon: User },
    { id: 'faculty', label: 'Faculty and Student', icon: '👥' },
    { id: 'reports', label: 'Academic Reports', icon: '📊' },
       { id: 'timetable', label: 'Unified Time Table', icon: '📅' },
    { id: 'spark', label: 'Spark', icon: '⚡' },
    { id: 'vanilla', label: 'Vanilla', icon: '🍦' }, 
  ];

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform">
            <img src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/35d41744-122d-41e5-05c3-7bea053c1900/public" alt="SRM Logo" className="h-8 w-8" />
            <span className="font-bold text-lg">SRM</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-700 hover:scale-105 ${
                  activeSection === item.id ? 'bg-blue-800 shadow-md' : ''
                }`}
              >
                {typeof item.icon === 'string' ? (
                  <span>{item.icon}</span>
                ) : (
                  <item.icon className="h-4 w-4" />
                )}
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Bell className="h-5 w-5 cursor-pointer hover:text-blue-200 hover:scale-110 transition-all duration-200 animate-pulse" />
          <span className="text-sm bg-blue-700 px-2 py-1 rounded">ag2045</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover:scale-110 transition-transform"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-500 animate-slideDown">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-4 py-3 hover:bg-blue-800 transition-colors ${
                activeSection === item.id ? 'bg-blue-800' : ''
              }`}
            >
              {typeof item.icon === 'string' ? (
                <span>{item.icon}</span>
              ) : (
                <item.icon className="h-4 w-4" />
              )}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
 