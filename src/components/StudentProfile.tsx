import  { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

export default function StudentProfile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Profile</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Student Photo"
              className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-lg hover:scale-105 transition-transform"
            />
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors">
                <User className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors">
                <span className="text-blue-500 font-bold">ID</span>
                <div>
                  <p className="text-sm text-gray-500">Registration Number</p>
                  <p className="font-semibold">AG2045</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors">
                <Mail className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">john.doe@srmist.edu.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors">
                <Phone className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors">
                <Award className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="font-semibold">Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-semibold">3rd Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 