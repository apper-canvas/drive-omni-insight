import { useState } from 'react';
import MainFeature from '../components/MainFeature';
import getIcon from '../utils/iconUtils';

// Define icons at the top
const BarChart3 = getIcon('BarChart3');
const LineChart = getIcon('LineChart');
const PieChart = getIcon('PieChart');
const DollarSign = getIcon('DollarSign');
const Users = getIcon('Users');
const Package = getIcon('Package');
const ArrowDownRight = getIcon('ArrowDownRight');
const ArrowUpRight = getIcon('ArrowUpRight');
const Bell = getIcon('Bell');
const Moon = getIcon('Moon');
const Sun = getIcon('Sun');
const Menu = getIcon('Menu');
const X = getIcon('X');

function Home({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState('overview');
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-surface-800 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">OmniInsight</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <button 
                onClick={() => setActiveView('overview')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'overview' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveView('finance')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'finance' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Finance
              </button>
              <button 
                onClick={() => setActiveView('projects')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'projects' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveView('resources')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'resources' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Resources
              </button>
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
              <button 
                onClick={() => {
                  setActiveView('overview');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'overview' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => {
                  setActiveView('finance');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'finance' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Finance
              </button>
              <button 
                onClick={() => {
                  setActiveView('projects');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'projects' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  setActiveView('resources');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'resources' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100'
                }`}
              >
                Resources
              </button>
            </nav>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-700">
                  <Bell className="w-5 h-5" />
                </button>
                <button 
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-700"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-medium">
                  JD
                </div>
                <div>
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-surface-500">CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Page header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">
              {activeView === 'overview' && 'Executive Dashboard'}
              {activeView === 'finance' && 'Financial Overview'}
              {activeView === 'projects' && 'Project Portfolio'}
              {activeView === 'resources' && 'Resource Management'}
            </h1>
            <p className="text-surface-600 dark:text-surface-400">
              {activeView === 'overview' && 'Complete visibility into your organization\'s performance'}
              {activeView === 'finance' && 'Track revenue, expenses, and financial health'}
              {activeView === 'projects' && 'Monitor project status, timelines, and deliverables'}
              {activeView === 'resources' && 'Optimize resource allocation and utilization'}
            </p>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Revenue */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Total Revenue</span>
                  <span className="text-2xl font-bold mt-1">$1,258,432</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-secondary text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  8.2%
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">vs last quarter</span>
              </div>
            </div>
            
            {/* Active Projects */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Active Projects</span>
                  <span className="text-2xl font-bold mt-1">24</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary">
                  <Package className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-secondary text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  3
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">new this month</span>
              </div>
            </div>
            
            {/* Resource Utilization */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Resource Utilization</span>
                  <span className="text-2xl font-bold mt-1">87%</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-secondary text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  4.5%
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">vs last month</span>
              </div>
            </div>
            
            {/* Operating Costs */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Operating Costs</span>
                  <span className="text-2xl font-bold mt-1">$687,215</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <PieChart className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-red-500 text-sm font-medium">
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                  2.4%
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">vs projected</span>
              </div>
            </div>
          </div>
          
          {/* Main feature */}
          <MainFeature activeView={activeView} />
        </div>
      </main>
    </div>
  );
}

export default Home;