import  { BarChart3, Download, Eye, FileText } from 'lucide-react';

export default function AcademicReports() {
  const reports = [
    { name: "Semester 1 Report", grade: "A", percentage: "85%", status: "Completed" },
    { name: "Semester 2 Report", grade: "A-", percentage: "82%", status: "Completed" },
    { name: "Semester 3 Report", grade: "B+", percentage: "78%", status: "Completed" },
    { name: "Current Semester", grade: "-", percentage: "Ongoing", status: "In Progress" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Academic Reports</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-blue-500" />
            <span>Performance Overview</span>
          </h2>
          
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 p-2 rounded transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span>Grade: {report.grade}</span>
                      <span>Percentage: {report.percentage}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    report.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FileText className="h-6 w-6 text-blue-500" />
            <span>Download Reports</span>
          </h2>
          
          <div className="space-y-3">
            {reports.slice(0, 3).map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <span className="font-medium">{report.name}</span>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-500 hover:bg-blue-50 rounded transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-green-500 hover:bg-green-50 rounded transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 