import  { TrendingUp, Building2, Users, BarChart3, Globe, Link, RefreshCw, Target } from 'lucide-react';

export default function Vanilla() {
  const industryTrends = [
    { skill: "AI/Machine Learning", demand: 92, growth: "+15%", companies: 245 },
    { skill: "Cloud Computing", demand: 87, growth: "+12%", companies: 189 },
    { skill: "Cybersecurity", demand: 84, growth: "+18%", companies: 156 },
    { skill: "Full Stack Development", demand: 79, growth: "+8%", companies: 324 }
  ];

  const jobSources = [
    { name: "LinkedIn", jobs: 15420, growth: "+22%" },
    { name: "Naukri.com", jobs: 12350, growth: "+18%" },
    { name: "Indeed", jobs: 8940, growth: "+14%" },
    { name: "AngelList", jobs: 3250, growth: "+35%" }
  ];

  const employmentGaps = [
    { area: "Technical Skills", gap: "68%", priority: "High" },
    { area: "Soft Skills", gap: "45%", priority: "Medium" },
    { area: "Industry Knowledge", gap: "72%", priority: "High" },
    { area: "Project Experience", gap: "55%", priority: "Medium" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img 
            src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/e6a32617-3d45-4fc3-3a62-8cdb28e10600/public" 
            alt="Vanilla Logo" 
            className="w-16 h-16 hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-4xl font-bold text-gray-800">Vanilla</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Transformer-based API fetching model that analyzes industry trends from job portals to enhance curriculum and placement outcomes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-blue-500" />
            <span>Industry Skill Trends</span>
          </h2>
          
          <div className="space-y-4">
            {industryTrends.map((trend, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">{trend.skill}</h3>
                  <span className="text-green-600 font-bold">{trend.growth}</span>
                </div>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${trend.demand}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{trend.demand}%</span>
                </div>
                <p className="text-sm text-gray-600">{trend.companies} companies hiring</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
            <Globe className="h-6 w-6 text-green-500" />
            <span>Data Sources</span>
          </h2>
          
          <div className="space-y-4">
            {jobSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <Link className="h-5 w-5 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{source.name}</h3>
                    <p className="text-sm text-gray-600">{source.jobs.toLocaleString()} active jobs</p>
                  </div>
                </div>
                <span className="text-green-600 font-bold">{source.growth}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <RefreshCw className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-800">Real-time Updates</span>
            </div>
            <p className="text-sm text-blue-700">Data refreshed every 6 hours using advanced API crawling</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-red-500" />
            <span>Employment Gaps</span>
          </h3>
          
          <div className="space-y-3">
            {employmentGaps.map((gap, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{gap.area}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    gap.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {gap.priority} Priority
                  </span>
                </div>
                <span className="text-red-600 font-bold text-lg">{gap.gap}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <Building2 className="h-5 w-5 text-purple-500" />
            <span>Employer Preferences</span>
          </h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-800">Remote Work Skills</h4>
              <p className="text-sm text-purple-600">85% prefer hybrid-ready candidates</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800">Certifications</h4>
              <p className="text-sm text-blue-600">Cloud & AI certifications in high demand</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800">Portfolio Projects</h4>
              <p className="text-sm text-green-600">GitHub activity strongly preferred</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>STEP Program Impact</span>
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Curriculum Updates</span>
              <span className="font-bold">Monthly</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Skills Aligned</span>
              <span className="font-bold">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Placement Boost</span>
              <span className="font-bold">+35%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Users className="h-5 w-5 text-blue-500" />
          <span>How Vanilla Transforms Education</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Data Collection</h4>
            <p className="text-sm text-gray-600">API crawling from LinkedIn, Naukri, Indeed</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">Trend Analysis</h4>
            <p className="text-sm text-gray-600">Transformer models identify skill gaps</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Curriculum Update</h4>
            <p className="text-sm text-gray-600">STEP program adapts to market needs</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold">4</span>
            </div>
            <h4 className="font-semibold mb-2">Enhanced Outcomes</h4>
            <p className="text-sm text-gray-600">Better prepared graduates, higher placements</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 