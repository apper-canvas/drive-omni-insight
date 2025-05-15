import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Finance from './pages/Finance';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Settings from './pages/Settings';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Update body class when dark mode changes
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-200">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/finance" element={<Finance darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/resources" element={<Resources darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/settings" element={<Settings darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? "dark" : "light"}
          toastClassName="text-sm font-medium"
        />
      </div>
    </Router>
  );
}

export default App;