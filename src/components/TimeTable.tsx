import  { Clock, Calendar, MapPin } from 'lucide-react';

export default function TimeTable() {
  const timeSlots = ['9:00-10:00', '10:00-11:00', '11:15-12:15', '12:15-1:15', '2:15-3:15', '3:15-4:15'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const schedule = {
    'Monday': ['Mathematics', 'Physics', 'Computer Science', 'Lunch', 'Chemistry', 'Lab'],
    'Tuesday': ['Physics', 'Chemistry', 'Mathematics', 'Lunch', 'Computer Science', 'English'],
    'Wednesday': ['Computer Science', 'Mathematics', 'Physics', 'Lunch', 'Lab', 'Chemistry'],
    'Thursday': ['Chemistry', 'Computer Science', 'English', 'Lunch', 'Mathematics', 'Physics'],
    'Friday': ['English', 'Lab', 'Computer Science', 'Lunch', 'Physics', 'Mathematics'],
  };

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      'Mathematics': 'bg-blue-100 text-blue-800',
      'Physics': 'bg-green-100 text-green-800',
      'Chemistry': 'bg-purple-100 text-purple-800',
      'Computer Science': 'bg-orange-100 text-orange-800',
      'English': 'bg-pink-100 text-pink-800',
      'Lab': 'bg-red-100 text-red-800',
      'Lunch': 'bg-gray-100 text-gray-800',
    };
    return colors[subject] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center space-x-2">
        <Calendar className="h-8 w-8 text-blue-500" />
        <span>Unified Time Table</span>
      </h1>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold">Time</th>
                {days.map((day) => (
                  <th key={day} className="p-4 text-center font-semibold">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, timeIndex) => (
                <tr key={time} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700 flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>{time}</span>
                  </td>
                  {days.map((day) => (
                    <td key={day} className="p-4 text-center">
                      <div className={`px-3 py-2 rounded-lg font-medium text-sm hover:scale-105 transition-transform cursor-pointer ${
                        getSubjectColor(schedule[day as keyof typeof schedule][timeIndex])
                      }`}>
                        {schedule[day as keyof typeof schedule][timeIndex]}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-blue-500" />
          <span>Room Information</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-sm">
          {Object.keys(getSubjectColor('Mathematics')).map((subject) => (
            subject !== 'Lunch' && (
              <div key={subject} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded ${getSubjectColor(subject)}`}></div>
                <span className="text-gray-600">{subject}: Room {Math.floor(Math.random() * 300) + 100}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
 