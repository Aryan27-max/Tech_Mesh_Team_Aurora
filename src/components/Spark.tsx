import  { Award, Github, Trophy, Users, BarChart3, Target, Star, TrendingUp } from 'lucide-react';

export default function Spark() {
  const students = [
    { 
      id: 1, 
      name: "Vivaan Chauhan", 
      regNo: "RA241102601100", 
      cgpa: 10, 
      github: "Vinan-34Mak", 
      projects: 8, 
      events: 12, 
      research: 3,
      score: 95,
      rank: 1
    },
    { 
      id: 2, 
      name: "Meera Rastogi", 
      regNo: "RA241102601110", 
      cgpa: 8.9, 
      github: "Mera22-Sky", 
      projects: 6, 
      events: 10, 
      research: 2,
      score: 89,
      rank: 2
    },
    { 
      id: 3, 
      name: "Vihaan Mishra", 
      regNo: "RA241102601156", 
      cgpa: 8.7, 
      github: "Vihaan00-dev", 
      projects: 7, 
      events: 8, 
      research: 4,
      score: 87,
      rank: 3
    },
  ];

  const criteria = [
    { icon: BarChart3, title: "Academic Performance", desc: "CGPA and semester grades", weight: "30%" },
    { icon: Github, title: "GitHub Profile", desc: "Repositories and contributions", weight: "25%" },
    { icon: Trophy, title: "Events and Projects", desc: "Hackathons and tech projects", weight: "25%" },
    { icon: Award, title: "Research Achievements", desc: "Publications and patents", weight: "20%" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img 
            src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/c7811ebd-460b-4204-bb89-8861da07e200/public" 
            alt="Spark Logo" 
            className="w-16 h-16 hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-4xl font-bold text-gray-800">Spark</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          LLM-based segregation system for identifying exceptional students through comprehensive performance analysis
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span>Top Performers</span>
            </h2>
            
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                        student.rank === 1 ? 'bg-yellow-500' : 
                        student.rank === 2 ? 'bg-gray-400' : 'bg-orange-500'
                      }`}>
                        {student.rank}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.regNo}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{student.score}</div>
                      <div className="text-xs text-gray-500">Spark Score</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center p-2 bg-blue-50 rounded">
                      <div className="font-semibold text-blue-600">{student.cgpa}</div>
                      <div className="text-gray-600">CGPA</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded">
                      <div className="font-semibold text-green-600">{student.projects}</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div className="text-center p-2 bg-purple-50 rounded">
                      <div className="font-semibold text-purple-600">{student.events}</div>
                      <div className="text-gray-600">Events</div>
                    </div>
                    <div className="text-center p-2 bg-orange-50 rounded">
                      <div className="font-semibold text-orange-600">{student.research}</div>
                      <div className="text-gray-600">Research</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-500" />
              <span>Evaluation Criteria</span>
            </h3>
            
            <div className="space-y-4">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <criterion.icon className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-gray-800">{criterion.title}</h4>
                      <span className="text-sm font-semibold text-blue-600">{criterion.weight}</span>
                    </div>
                    <p className="text-sm text-gray-600">{criterion.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Impact</span>
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Placement Rate Increase</span>
                <span className="font-bold">+25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Students Identified</span>
                <span className="font-bold">150+</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Companies Engaged</span>
                <span className="font-bold">50+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Users className="h-5 w-5 text-blue-500" />
          <span>How Spark Works</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Data Collection</h4>
            <p className="text-sm text-gray-600">Gather academic, GitHub, project, and research data</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">AI Analysis</h4>
            <p className="text-sm text-gray-600">LLM processes and weighs performance metrics</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Ranking</h4>
            <p className="text-sm text-gray-600">Generate comprehensive Spark scores and rankings</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold">4</span>
            </div>
            <h4 className="font-semibold mb-2">Placement</h4>
            <p className="text-sm text-gray-600">Connect top performers with premium opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 