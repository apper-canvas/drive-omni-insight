import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

// Define icons
const BarChart3 = getIcon('BarChart3');
const LineChart = getIcon('LineChart');
const PieChart = getIcon('PieChart');
const DollarSign = getIcon('DollarSign');
const Wallet = getIcon('Wallet');
const TrendingUp = getIcon('TrendingUp');
const TrendingDown = getIcon('TrendingDown');
const CreditCard = getIcon('CreditCard');
const Calendar = getIcon('Calendar');
const Filter = getIcon('Filter');
const Download = getIcon('Download');
const Plus = getIcon('Plus');
const Edit = getIcon('Edit');
const Trash = getIcon('Trash');
const Settings = getIcon('Settings');
const Bell = getIcon('Bell');
const Moon = getIcon('Moon');
const Sun = getIcon('Sun');
const Menu = getIcon('Menu');
const X = getIcon('X');

function Finance({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState('revenue');
  const [showModal, setShowModal] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    title: '',
    amount: '',
    category: 'revenue',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });
  const [filterData, setFilterData] = useState({
    dateRange: 'month',
    category: 'all',
    minAmount: '',
    maxAmount: ''
  });
  
  useEffect(() => {
    document.title = "Financial Overview | OmniInsight";
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    toast.success(`${modalFormData.title} has been added successfully!`);
    setShowModal(false);
    setModalFormData({
      title: '',
      amount: '',
      category: 'revenue',
      date: new Date().toISOString().split('T')[0],
      notes: ''
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    toast.info("Filters applied successfully");
  };

  const handleExportData = () => {
    toast.success("Financial data exported successfully");
  };

  // Sample data for revenue chart
  const revenueData = [
    { month: 'Jan', value: 125000 },
    { month: 'Feb', value: 147000 },
    { month: 'Mar', value: 156000 },
    { month: 'Apr', value: 148000 },
    { month: 'May', value: 162000 },
    { month: 'Jun', value: 170000 }
  ];

  // Sample data for financial transactions
  const transactions = [
    { id: 1, title: 'Project Alpha Revenue', amount: 45000, type: 'revenue', date: '2023-05-15', category: 'Services' },
    { id: 2, title: 'Office Rent', amount: 12000, type: 'expense', date: '2023-05-01', category: 'Facilities' },
    { id: 3, title: 'Software Licenses', amount: 8500, type: 'expense', date: '2023-05-05', category: 'IT' },
    { id: 4, title: 'Project Beta Revenue', amount: 68000, type: 'revenue', date: '2023-05-22', category: 'Services' },
    { id: 5, title: 'Marketing Campaign', amount: 15000, type: 'expense', date: '2023-05-12', category: 'Marketing' }
  ];

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
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors bg-primary/10 text-primary dark:bg-primary/20"
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
                className="w-8 h-8 flex items-center justify-center rounded-full text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-700"
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
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors bg-primary/10 text-primary dark:bg-primary/20"
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
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
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
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Financial Overview</h1>
            <p className="text-surface-600 dark:text-surface-400">
              Track revenue, expenses, and financial health
            </p>
          </div>
          
          {/* Financial tabs */}
          <div className="mb-6 border-b border-surface-200 dark:border-surface-700">
            <div className="flex overflow-x-auto scrollbar-hide">
              <button 
                onClick={() => setActiveView('revenue')}
                className={`px-4 py-2 whitespace-nowrap font-medium text-sm border-b-2 ${
                  activeView === 'revenue' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white'
                }`}
              >
                Revenue Tracking
              </button>
              <button 
                onClick={() => setActiveView('expenses')}
                className={`px-4 py-2 whitespace-nowrap font-medium text-sm border-b-2 ${
                  activeView === 'expenses' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white'
                }`}
              >
                Expense Analysis
              </button>
              <button 
                onClick={() => setActiveView('budget')}
                className={`px-4 py-2 whitespace-nowrap font-medium text-sm border-b-2 ${
                  activeView === 'budget' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white'
                }`}
              >
                Budget Management
              </button>
              <button 
                onClick={() => setActiveView('forecast')}
                className={`px-4 py-2 whitespace-nowrap font-medium text-sm border-b-2 ${
                  activeView === 'forecast' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white'
                }`}
              >
                Financial Forecasting
              </button>
            </div>
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
                  <TrendingUp className="w-4 h-4 mr-1" />
                  8.2%
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">vs last quarter</span>
              </div>
            </div>
            
            {/* Operating Expenses */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Operating Expenses</span>
                  <span className="text-2xl font-bold mt-1">$687,215</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <PieChart className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-red-500 text-sm font-medium">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  2.4%
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">vs projected</span>
              </div>
            </div>
            
            {/* Profit Margin */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Profit Margin</span>
                  <span className="text-2xl font-bold mt-1">45.4%</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary">
                  <LineChart className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-secondary text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  3.1%
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">vs last month</span>
              </div>
            </div>
            
            {/* Budget Utilization */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Budget Utilization</span>
                  <span className="text-2xl font-bold mt-1">63.8%</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                  <Wallet className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-secondary text-sm font-medium">
                  On Track
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">for Q2</span>
              </div>
            </div>
          </div>
          
          {/* Main content for financial data will be displayed here */}
          <div className="dashboard-card p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue Trend</h2>
            <div className="h-64 bg-surface-100 dark:bg-surface-700 rounded-lg flex items-center justify-center">
              <p className="text-surface-500">Revenue chart visualization would be displayed here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Finance;