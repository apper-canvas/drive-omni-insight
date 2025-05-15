import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getIcon from '../utils/iconUtils';

const AlertTriangle = getIcon('AlertTriangle');
const Home = getIcon('Home');

function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | OmniInsight";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-500">
          <AlertTriangle className="w-10 h-10" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-surface-800 dark:text-surface-100">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-surface-700 dark:text-surface-200">Page Not Found</h2>
        <p className="text-surface-600 dark:text-surface-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors duration-200"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>
      </div>
      
      <div className="mt-16 text-sm text-surface-500 dark:text-surface-500">
        &copy; {new Date().getFullYear()} OmniInsight. All rights reserved.
      </div>
    </div>
  );
}

export default NotFound;