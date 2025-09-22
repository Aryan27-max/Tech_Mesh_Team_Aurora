import  { User, Mail, Phone, Users } from 'lucide-react';

export default function FacultyStudent() {
  const faculty = [
    { name: "Dr. Smith Johnson", dept: "Computer Science", email: "smith@srmist.edu.in", phone: "+91 9876543210" },
    { name: "Dr. Mary Williams", dept: "Mathematics", email: "mary@srmist.edu.in", phone: "+91 9876543211" },
    { name: "Dr. Robert Brown", dept: "Physics", email: "robert@srmist.edu.in", phone: "+91 9876543212" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Faculty and Student Directory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.dept}</p>
            </div>
            
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-50 rounded transition-colors">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{member.email}</span>
              </button>
              
              <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-50 rounded transition-colors">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{member.phone}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 