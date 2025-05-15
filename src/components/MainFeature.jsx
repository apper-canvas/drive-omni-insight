import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

// Define icons at the top
const BarChart2 = getIcon('BarChart2');
const LineChart = getIcon('LineChart');
const PieChart = getIcon('PieChart');
const TrendingUp = getIcon('TrendingUp');
const TrendingDown = getIcon('TrendingDown');
const ArrowUpRight = getIcon('ArrowUpRight');
const ArrowDownRight = getIcon('ArrowDownRight');
const DollarSign = getIcon('DollarSign');
const Calendar = getIcon('Calendar');
const Filter = getIcon('Filter');
const Download = getIcon('Download');
const RefreshCw = getIcon('RefreshCw');
const CircleOff = getIcon('CircleOff');
const CircleCheck = getIcon('CircleCheck');
const Clock = getIcon('Clock');
const Info = getIcon('Info');

function MainFeature({ activeView }) {
  const [timeFilter, setTimeFilter] = useState('q2');
  const [showFilters, setShowFilters] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [costType, setCostType] = useState('all');
  const [dataSeries, setDataSeries] = useState({
    revenue: [254000, 287000, 321000, 396432],
    costs: [142000, 156000, 173215, 216000],
    projects: [18, 21, 23, 24],
    utilization: [76, 79, 82, 87]
  });
  
  // Department data
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'product', name: 'Product Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' }
  ];
  
  // Project data
  const projects = [
    { 
      id: 1, 
      name: 'Cloud Migration', 
      client: 'Acme Corp', 
      status: 'in-progress', 
      completion: 75, 
      budget: 180000, 
      spent: 132000 
    },
    { 
      id: 2, 
      name: 'CRM Implementation', 
      client: 'TechGiant LLC', 
      status: 'in-progress', 
      completion: 48, 
      budget: 240000, 
      spent: 112000 
    },
    { 
      id: 3, 
      name: 'Website Redesign', 
      client: 'Innovate Inc', 
      status: 'at-risk', 
      completion: 35, 
      budget: 86000, 
      spent: 42000 
    },
    { 
      id: 4, 
      name: 'Security Assessment', 
      client: 'Secure Solutions', 
      status: 'completed', 
      completion: 100, 
      budget: 45000, 
      spent: 43000 
    },
    { 
      id: 5, 
      name: 'Mobile App Development', 
      client: 'NextGen Mobile', 
      status: 'planned', 
      completion: 0, 
      budget: 320000, 
      spent: 0 
    }
  ];

  // Cost data
  const costs = [
    { 
      id: 1, 
      category: 'Office Lease', 
      amount: 48000, 
      department: 'operations', 
      recurring: true,
      percentage: 7
    },
    { 
      id: 2, 
      category: 'Salaries & Benefits', 
      amount: 412000, 
      department: 'all', 
      recurring: true,
      percentage: 60
    },
    { 
      id: 3, 
      category: 'Software Licenses', 
      amount: 86000, 
      department: 'all', 
      recurring: true,
      percentage: 12.5
    },
    { 
      id: 4, 
      category: 'Marketing Campaigns', 
      amount: 75000, 
      department: 'marketing', 
      recurring: false,
      percentage: 11
    },
    { 
      id: 5, 
      category: 'Server Infrastructure', 
      amount: 32000, 
      department: 'engineering', 
      recurring: true,
      percentage: 4.7
    },
    { 
      id: 6, 
      category: 'Training & Development', 
      amount: 24000, 
      department: 'all', 
      recurring: false,
      percentage: 3.5
    },
    { 
      id: 7, 
      category: 'Travel Expenses', 
      amount: 8215, 
      department: 'sales', 
      recurring: false,
      percentage: 1.2
    }
  ];
  
  // Financial data by quarter
  const financialData = {
    q1: { revenue: 254000, costs: 142000, profit: 112000, margin: 44.1 },
    q2: { revenue: 287000, costs: 156000, profit: 131000, margin: 45.6 },
    q3: { revenue: 321000, costs: 173215, profit: 147785, margin: 46.0 },
    q4: { revenue: 396432, costs: 216000, profit: 180432, margin: 45.5 },
  };

  const handleRefreshData = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Slightly adjust the data to simulate a refresh
      setDataSeries({
        revenue: dataSeries.revenue.map(val => Math.round(val * (1 + (Math.random() * 0.04 - 0.02)))),
        costs: dataSeries.costs.map(val => Math.round(val * (1 + (Math.random() * 0.03 - 0.01)))),
        projects: dataSeries.projects.map(val => Math.max(18, Math.min(30, Math.round(val * (1 + (Math.random() * 0.06 - 0.03)))))),
        utilization: dataSeries.utilization.map(val => Math.max(70, Math.min(95, Math.round(val * (1 + (Math.random() * 0.04 - 0.02))))))
      });
      
      setIsLoading(false);
      toast.success("Dashboard data refreshed successfully");
    }, 1200);
  };
  
  const handleExportData = () => {
    toast.info("Exporting dashboard data...");
    
    // Simulate export process
    setTimeout(() => {
      toast.success("Data exported successfully");
    }, 1500);
  };
  
  const handleDepartmentChange = (e) => {
    setDepartmentFilter(e.target.value);
    toast.info(`Filter applied: ${departments.find(d => d.id === e.target.value).name}`);
  };
  
  const handleCostTypeChange = (type) => {
    setCostType(type);
  };

  const filteredCosts = costs.filter(cost => {
    if (departmentFilter !== 'all' && cost.department !== 'all' && cost.department !== departmentFilter) {
      return false;
    }
    
    if (costType === 'recurring' && !cost.recurring) {
      return false;
    }
    
    if (costType === 'one-time' && cost.recurring) {
      return false;
    }
    
    return true;
  });

  useEffect(() => {
    // This would be where you'd fetch initial data from an API
    // Simulating that with a timeout
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            {activeView === 'overview' && 'Performance Insights'}
            {activeView === 'finance' && 'Financial Analysis'}
            {activeView === 'projects' && 'Project Portfolio'}
            {activeView === 'resources' && 'Resource Allocation'}
          </h2>
          <div className="text-sm text-surface-500 dark:text-surface-400 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            
            <select 
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="bg-transparent font-medium focus:outline-none cursor-pointer"
            >
              <option value="q1">Q1 2023</option>
              <option value="q2">Q2 2023</option>
              <option value="q3">Q3 2023</option>
              <option value="q4">Q4 2023</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          
          <button 
            onClick={handleExportData}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          
          <button 
            onClick={handleRefreshData}
            disabled={isLoading}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>
      
      {/* Filters panel */}
      {showFilters && (
        <div className="bg-surface-100 dark:bg-surface-800 rounded-xl p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Department</label>
            <select
              value={departmentFilter}
              onChange={handleDepartmentChange}
              className="w-full px-3 py-2 bg-white dark:bg-surface-700 rounded-lg border border-surface-300 dark:border-surface-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Cost Type</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCostTypeChange('all')}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg text-center transition-colors ${
                  costType === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-white dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleCostTypeChange('recurring')}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg text-center transition-colors ${
                  costType === 'recurring' 
                    ? 'bg-primary text-white' 
                    : 'bg-white dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'
                }`}
              >
                Recurring
              </button>
              <button
                onClick={() => handleCostTypeChange('one-time')}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg text-center transition-colors ${
                  costType === 'one-time' 
                    ? 'bg-primary text-white' 
                    : 'bg-white dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'
                }`}
              >
                One-time
              </button>
            </div>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => {
                setDepartmentFilter('all');
                setCostType('all');
                toast.info("Filters reset to default");
              }}
              className="w-full px-3 py-2 text-sm font-medium rounded-lg bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
      
      {/* Main content based on active view */}
      {activeView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Financial summary */}
          <div className="dashboard-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Financial Summary</h3>
              <div className="text-xs px-2 py-1 bg-secondary/10 text-secondary dark:bg-secondary/20 font-medium rounded-full">
                {timeFilter.toUpperCase()} 2023
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-surface-500 dark:text-surface-400 mb-1">Revenue</div>
                  <div className="text-xl font-bold">${financialData[timeFilter].revenue.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-surface-500 dark:text-surface-400 mb-1">Costs</div>
                  <div className="text-xl font-bold">${financialData[timeFilter].costs.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-surface-500 dark:text-surface-400 mb-1">Net Profit</div>
                  <div className="text-xl font-bold">${financialData[timeFilter].profit.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-surface-500 dark:text-surface-400 mb-1">Profit Margin</div>
                  <div className="text-xl font-bold">{financialData[timeFilter].margin}%</div>
                </div>
              </div>
              
              {/* Financial trend visualization */}
              <div className="pt-4 pb-2">
                <div className="relative h-48">
                  <div className="absolute left-0 bottom-0 w-full h-full flex items-end">
                    {dataSeries.revenue.map((value, index) => (
                      <div key={index} className="flex-1 mx-1 group relative">
                        <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                          {/* Revenue bar */}
                          <div 
                            className="bg-primary/80 dark:bg-primary/90 rounded-t-sm"
                            style={{ height: `${(value / 400000) * 100}%` }}
                          ></div>
                          
                          {/* Cost bar */}
                          <div 
                            className="bg-primary/30 dark:bg-primary/40 rounded-b-sm mt-px"
                            style={{ height: `${(dataSeries.costs[index] / 400000) * 100}%` }}
                          ></div>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 transition-opacity bg-white dark:bg-surface-700 shadow-lg p-2 rounded-lg text-xs font-medium whitespace-nowrap">
                          <div className="mb-1">Q{index + 1} 2023</div>
                          <div className="flex items-center mb-1">
                            <span className="w-2 h-2 bg-primary rounded-full mr-1"></span>
                            Revenue: ${value.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-primary/30 rounded-full mr-1"></span>
                            Costs: ${dataSeries.costs[index].toLocaleString()}
                          </div>
                          <div className="text-center mt-1 text-secondary">
                            {Math.round((value - dataSeries.costs[index]) / value * 100)}% margin
                          </div>
                        </div>
                        
                        {/* Hover area */}
                        <div className="absolute inset-0 cursor-pointer"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Axis labels */}
                  <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-surface-500 dark:text-surface-400 pb-1">
                    <div>Q1</div>
                    <div>Q2</div>
                    <div>Q3</div>
                    <div>Q4</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-6 pt-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary/80 rounded-full mr-2"></div>
                  <span className="text-sm">Revenue</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary/30 rounded-full mr-2"></div>
                  <span className="text-sm">Costs</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project status */}
          <div className="dashboard-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Project Status</h3>
              <div className="text-xs px-2 py-1 bg-accent/10 text-accent dark:bg-accent/20 font-medium rounded-full">
                {projects.length} Active Projects
              </div>
            </div>
            
            <div className="space-y-5">
              {projects.slice(0, 3).map(project => (
                <div key={project.id} className="border-b border-surface-200 dark:border-surface-700 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-base font-medium">{project.name}</div>
                      <div className="text-sm text-surface-500 dark:text-surface-400">{project.client}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 font-medium rounded-full
                      ${project.status === 'completed' ? 'bg-secondary/10 text-secondary dark:bg-secondary/20' : 
                        project.status === 'in-progress' ? 'bg-primary/10 text-primary dark:bg-primary/20' :
                        project.status === 'at-risk' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                        'bg-surface-200 text-surface-600 dark:bg-surface-700 dark:text-surface-300'
                      }
                    `}>
                      {project.status === 'in-progress' ? 'In Progress' : 
                        project.status === 'at-risk' ? 'At Risk' :
                        project.status === 'completed' ? 'Completed' : 'Planned'
                      }
                    </div>
                  </div>
                  
                  <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.status === 'at-risk' ? 'bg-red-500' : 
                        project.status === 'completed' ? 'bg-secondary' : 'bg-primary'
                      }`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">{project.completion}% Complete</div>
                    <div className="text-sm text-surface-500 dark:text-surface-400">
                      Budget: ${project.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="w-full text-center py-2 px-4 text-sm font-medium text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                View All Projects
              </button>
            </div>
          </div>
          
          {/* Resource utilization */}
          <div className="dashboard-card">
            <h3 className="text-lg font-semibold mb-4">Resource Utilization</h3>
            
            <div className="space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {dataSeries.utilization[dataSeries.utilization.length - 1]}%
                  </div>
                  <div className="text-sm text-surface-500 dark:text-surface-400">Current</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-surface-600 dark:text-surface-300 mb-1">
                    {dataSeries.utilization.reduce((acc, val) => acc + val, 0) / dataSeries.utilization.length}%
                  </div>
                  <div className="text-sm text-surface-500 dark:text-surface-400">Average</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-secondary mb-1">90%</div>
                  <div className="text-sm text-surface-500 dark:text-surface-400">Target</div>
                </div>
              </div>
              
              <div className="bg-surface-100 dark:bg-surface-700 rounded-lg p-4">
                <div className="text-sm font-medium mb-3">Resource Allocation by Department</div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div>Engineering</div>
                      <div>92%</div>
                    </div>
                    <div className="w-full bg-surface-200 dark:bg-surface-600 rounded-full h-2">
                      <div className="h-2 rounded-full bg-primary" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div>Product Development</div>
                      <div>87%</div>
                    </div>
                    <div className="w-full bg-surface-200 dark:bg-surface-600 rounded-full h-2">
                      <div className="h-2 rounded-full bg-primary" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div>Marketing</div>
                      <div>76%</div>
                    </div>
                    <div className="w-full bg-surface-200 dark:bg-surface-600 rounded-full h-2">
                      <div className="h-2 rounded-full bg-primary" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div>Sales</div>
                      <div>83%</div>
                    </div>
                    <div className="w-full bg-surface-200 dark:bg-surface-600 rounded-full h-2">
                      <div className="h-2 rounded-full bg-primary" style={{ width: '83%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div>Operations</div>
                      <div>69%</div>
                    </div>
                    <div className="w-full bg-surface-200 dark:bg-surface-600 rounded-full h-2">
                      <div className="h-2 rounded-full bg-accent" style={{ width: '69%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cost breakdown */}
          <div className="dashboard-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Cost Breakdown</h3>
              <div className="text-xs px-2 py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 font-medium rounded-full">
                ${filteredCosts.reduce((sum, cost) => sum + cost.amount, 0).toLocaleString()} Total
              </div>
            </div>
            
            <div className="overflow-hidden">
              {/* Cost visualization */}
              <div className="relative h-48 mb-6">
                <div className="absolute inset-0">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Donut chart using CSS */}
                    <div className="w-36 h-36 rounded-full border-8 border-transparent relative">
                      {filteredCosts.map((cost, index) => {
                        // Calculate rotation for this segment
                        const previousPercentages = filteredCosts
                          .slice(0, index)
                          .reduce((sum, c) => sum + c.percentage, 0);
                        const startDeg = (previousPercentages / 100) * 360;
                        const endDeg = ((previousPercentages + cost.percentage) / 100) * 360;
                        
                        return (
                          <div 
                            key={cost.id}
                            className="absolute inset-0 w-full h-full rounded-full overflow-hidden"
                            style={{
                              clipPath: `polygon(50% 50%, 50% 0%, ${endDeg <= 90 
                                ? `${50 + 50 * Math.tan(endDeg * Math.PI / 180)}% 0` 
                                : endDeg <= 180 
                                  ? '100% 0, 100% ${50 - 50 / Math.tan(endDeg * Math.PI / 180)}%' 
                                  : endDeg <= 270 
                                    ? '100% 100%, ${50 - 50 * Math.tan(endDeg * Math.PI / 180)}% 100%' 
                                    : '0 100%, 0 ${50 + 50 / Math.tan(endDeg * Math.PI / 180)}%'})`
                            }}
                          >
                            <div 
                              className={`absolute inset-0 rounded-full ${
                                index % 5 === 0 ? 'bg-primary' : 
                                index % 5 === 1 ? 'bg-secondary' :
                                index % 5 === 2 ? 'bg-accent' :
                                index % 5 === 3 ? 'bg-orange-400' : 'bg-red-400'
                              }`}
                              style={{
                                transform: `rotate(${startDeg}deg)`
                              }}
                            ></div>
                          </div>
                        );
                      })}
                      <div className="absolute inset-0 w-4/6 h-4/6 bg-white dark:bg-surface-800 rounded-full m-auto flex items-center justify-center">
                        <div className="text-sm font-medium">{filteredCosts.length} Categories</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cost legend */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-hide">
                {filteredCosts.map((cost, index) => (
                  <div key={cost.id} className="flex items-center justify-between py-1">
                    <div className="flex items-center">
                      <div 
                        className={`w-3 h-3 rounded-full mr-2 ${
                          index % 5 === 0 ? 'bg-primary' : 
                          index % 5 === 1 ? 'bg-secondary' :
                          index % 5 === 2 ? 'bg-accent' :
                          index % 5 === 3 ? 'bg-orange-400' : 'bg-red-400'
                        }`}
                      ></div>
                      <div className="text-sm">{cost.category}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm font-medium">${cost.amount.toLocaleString()}</div>
                      <div className="text-xs text-surface-500 dark:text-surface-400 ml-2">
                        {cost.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeView === 'finance' && (
        <div className="dashboard-card p-4 md:p-6">
          <div className="text-center py-16">
            <div className="text-surface-500 dark:text-surface-400 text-lg mb-2">
              <BarChart2 className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <h3 className="text-xl font-semibold">Financial Analysis</h3>
            </div>
            <p className="text-surface-600 dark:text-surface-400 max-w-lg mx-auto mb-6">
              Detailed financial analysis features will be available in the next version. 
              Switch to the Overview tab to see the current financial summary.
            </p>
            <button
              onClick={() => setActiveView('overview')}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Return to Overview
            </button>
          </div>
        </div>
      )}
      
      {activeView === 'projects' && (
        <div className="dashboard-card p-4 md:p-6">
          <div className="text-center py-16">
            <div className="text-surface-500 dark:text-surface-400 text-lg mb-2">
              <Package className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <h3 className="text-xl font-semibold">Project Portfolio</h3>
            </div>
            <p className="text-surface-600 dark:text-surface-400 max-w-lg mx-auto mb-6">
              Detailed project portfolio features will be available in the next version.
              Switch to the Overview tab to see the current project status summary.
            </p>
            <button
              onClick={() => setActiveView('overview')}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Return to Overview
            </button>
          </div>
        </div>
      )}
      
      {activeView === 'resources' && (
        <div className="dashboard-card p-4 md:p-6">
          <div className="text-center py-16">
            <div className="text-surface-500 dark:text-surface-400 text-lg mb-2">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <h3 className="text-xl font-semibold">Resource Management</h3>
            </div>
            <p className="text-surface-600 dark:text-surface-400 max-w-lg mx-auto mb-6">
              Detailed resource management features will be available in the next version.
              Switch to the Overview tab to see the current resource utilization summary.
            </p>
            <button
              onClick={() => setActiveView('overview')}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Return to Overview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainFeature;