import  { FileText, Download, Calendar, AlertCircle } from 'lucide-react';

export default function Circular() {
  const circulars = [
    { id: 1, title: "Mid-Semester Examination Schedule", date: "2024-03-15", type: "Urgent", color: "text-red-600" },
    { id: 2, title: "Library New Timings", date: "2024-03-10", type: "Info", color: "text-blue-600" },
    { id: 3, title: "Sports Meet Registration", date: "2024-03-08", type: "Event", color: "text-green-600" },
    { id: 4, title: "Fee Payment Deadline", date: "2024-03-05", type: "Important", color: "text-orange-600" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Circulars</h1>
      
      <div className="space-y-4">
        {circulars.map((circular) => (
          <div key={circular.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FileText className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800">{circular.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{circular.date}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${circular.color} font-medium`}>
                      {circular.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 