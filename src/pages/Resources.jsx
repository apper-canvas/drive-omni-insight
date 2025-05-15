import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

// Define icons
const BarChart3 = getIcon('BarChart3');
const Users = getIcon('Users');
const UserPlus = getIcon('UserPlus');
const Briefcase = getIcon('Briefcase');
const Calendar = getIcon('Calendar');
const Award = getIcon('Award');
const ArrowUpRight = getIcon('ArrowUpRight');
const Filter = getIcon('Filter');
const Download = getIcon('Download');
const Plus = getIcon('Plus');
const Edit = getIcon('Edit');
const Trash = getIcon('Trash');
const Eye = getIcon('Eye');
const Settings = getIcon('Settings');
const Bell = getIcon('Bell');
const Moon = getIcon('Moon');
const Sun = getIcon('Sun');
const Menu = getIcon('Menu');
const X = getIcon('X');

function Resources({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState('team');
  const [showModal, setShowModal] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    name: '',
    role: '',
    department: '',
    email: '',
    startDate: '',
    skills: '',
    utilization: ''
  });
  
  useEffect(() => {
    document.title = "Resource Management | OmniInsight";
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleAddResource = () => {
    setModalFormData({
      name: '',
      role: '',
      department: '',
      email: '',
      startDate: '',
      skills: '',
      utilization: ''
    });
    setShowModal(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    toast.success(`${modalFormData.name} has been added to the team!`);
    setShowModal(false);
  };

  const handleViewResource = (id) => {
    toast.info(`Viewing resource details for ID: ${id}`);
  };

  const handleEditResource = (id) => {
    toast.info(`Editing resource ID: ${id}`);
  };

  const handleDeleteResource = (id) => {
    if (confirm('Are you sure you want to remove this team member?')) {
      toast.success(`Team member removed successfully`);
    }
  };

  // Sample data for team members
  const teamMembers = [
    { 
      id: 1, 
      name: 'Jane Smith', 
      role: 'Senior Developer', 
      department: 'Engineering',
      utilization: 95,
      skills: ['React', 'Node.js', 'AWS'],
      assignedProjects: 2,
      availableFrom: '2023-07-15'
    },
    { 
      id: 2, 
      name: 'Michael Johnson', 
      role: 'UX Designer', 
      department: 'Design',
      utilization: 85,
      skills: ['Figma', 'User Research', 'Prototyping'],
      assignedProjects: 3,
      availableFrom: '2023-08-01'
    },
    { 
      id: 3, 
      name: 'David Chen', 
      role: 'Project Manager', 
      department: 'Operations',
      utilization: 100,
      skills: ['Agile', 'Risk Management', 'Stakeholder Communication'],
      assignedProjects: 4,
      availableFrom: '2023-09-15'
    },
    { 
      id: 4, 
      name: 'Sarah Williams', 
      role: 'Marketing Specialist', 
      department: 'Marketing',
      utilization: 75,
      skills: ['Content Strategy', 'Social Media', 'Analytics'],
      assignedProjects: 2,
      availableFrom: '2023-07-01'
    },
    { 
      id: 5, 
      name: 'Robert Garcia', 
      role: 'DevOps Engineer', 
      department: 'Engineering',
      utilization: 90,
      skills: ['Kubernetes', 'Docker', 'CI/CD'],
      assignedProjects: 2,
      availableFrom: '2023-07-20'
    },
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
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors bg-primary/10 text-primary dark:bg-primary/20"
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
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors bg-primary/10 text-primary dark:bg-primary/20"
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
          {/* Page header with actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Resource Management</h1>
              <p className="text-surface-600 dark:text-surface-400">
                Optimize resource allocation and utilization
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleAddResource}
                className="btn btn-primary flex items-center"
              >
                <UserPlus className="w-4 h-4 mr-1" />
                Add Team Member
              </button>
            </div>
          </div>
          
          {/* Resource Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Team Size */}
            <div className="dashboard-card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-surface-500 dark:text-surface-400 text-sm font-medium">Team Size</span>
                  <span className="text-2xl font-bold mt-1">48</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-secondary text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  3
                </span>
                <span className="text-surface-500 dark:text-surface-400 text-sm ml-2">new this quarter</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resources;