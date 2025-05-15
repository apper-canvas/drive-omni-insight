import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

// Define icons
const BarChart3 = getIcon('BarChart3');
const User = getIcon('User');
const Bell = getIcon('Bell');
const Lock = getIcon('Lock');
const Brush = getIcon('Brush');
const Mail = getIcon('Mail');
const Save = getIcon('Save');
const Moon = getIcon('Moon');
const Sun = getIcon('Sun');
const Menu = getIcon('Menu');
const X = getIcon('X');
const Settings = getIcon('Settings');

function SettingsPage({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    title: 'CEO',
    phone: '+1 (555) 123-4567',
    bio: 'Executive with 15+ years of experience in technology and business leadership.',
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    dashboardLayout: 'default',
    language: 'en',
    timeZone: 'America/New_York'
  });
  
  useEffect(() => {
    document.title = "Settings | OmniInsight";
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      notifications: {
        ...formData.notifications,
        [name]: checked
      }
    });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    toast.success("Profile settings saved successfully!");
  };

  const handleSaveNotifications = (e) => {
    e.preventDefault();
    toast.success("Notification preferences saved successfully!");
  };

  const handleSaveAppearance = (e) => {
    e.preventDefault();
    toast.success("Appearance settings saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-surface-800 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold">OmniInsight</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <Link 
                to="/"
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Overview
              </Link>
              <Link 
                to="/finance"
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Finance
              </Link>
              <Link 
                to="/projects"
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Projects
              </Link>
              <Link 
                to="/resources"
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Resources
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-700">
                <Bell className="w-5 h-5" />
              </button>
              <button 
                className="w-8 h-8 flex items-center justify-center rounded-full text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-700"
                onClick={toggleDarkMode}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link 
                to="/settings"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <Settings className="w-5 h-5" />
              </Link>
              <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-medium">
                JD
              </div>
            </div>
          </div>
          
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-700"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-surface-800 shadow-md`}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-medium">Menu</h2>
              <button 
                className="w-10 h-10 flex items-center justify-center rounded-lg text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-700"
                onClick={toggleMobileMenu}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-2 mb-3">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Overview
              </Link>
              <Link 
                to="/finance"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Finance
              </Link>
              <Link 
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Projects
              </Link>
              <Link 
                to="/resources"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
              >
                Resources
              </Link>
              <Link 
                to="/settings"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors bg-primary/10 text-primary dark:bg-primary/20"
              >
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Page header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Settings</h1>
            <p className="text-surface-600 dark:text-surface-400">
              Manage your account preferences and application settings
            </p>
          </div>
          
          {/* Settings content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Settings navigation */}
            <div className="dashboard-card lg:col-span-1">
              <nav className="flex flex-col gap-1">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center gap-3 p-3 rounded-lg text-left ${
                    activeTab === 'profile' 
                      ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                      : 'hover:bg-surface-100 dark:hover:bg-surface-700'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>
                <button 
                  onClick={() => setActiveTab('notifications')}
                  className={`flex items-center gap-3 p-3 rounded-lg text-left ${
                    activeTab === 'notifications' 
                      ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                      : 'hover:bg-surface-100 dark:hover:bg-surface-700'
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
              </nav>
            </div>
            
            {/* Settings content */}
            <div className="dashboard-card lg:col-span-3">
              <h2 className="text-xl font-semibold mb-4">{activeTab === 'profile' ? 'Profile Settings' : 'Notification Preferences'}</h2>
              {/* Content will differ based on active tab */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SettingsPage;