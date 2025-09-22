import  { AlertCircle, Phone, Calendar } from 'lucide-react';

export default function InfoBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-l-4 border-orange-400 p-4 shadow-sm animate-fadeIn">
      <div className="flex flex-wrap items-center gap-4 mb-3">
        <div className="bg-orange-100 px-3 py-1 rounded-full text-orange-800 font-semibold flex items-center space-x-1 hover:bg-orange-200 transition-colors">
          <Calendar className="h-4 w-4" />
          <span>Date: 23-Sep-25</span>
        </div>
        <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-semibold hover:bg-blue-200 transition-colors">
          Day Order: 4
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-red-600 font-semibold">
            Early symptoms of Covid-19 - <span className="text-blue-600">Sore throat, dry cough, fever, cold, loss of smell, loss of taste etc. If any of the above symptoms are noticed contact emergency helpline.</span>
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-blue-600 font-semibold flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span>Emergency Contact:</span>
          </span>
          <button className="bg-blue-200 hover:bg-blue-300 px-3 py-1 rounded text-blue-800 font-mono transition-colors">
            044-27452727
          </button>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-blue-600 font-semibold">Mobile:</span>
          <button className="bg-blue-200 hover:bg-blue-300 px-3 py-1 rounded text-blue-800 font-mono transition-colors">
            9789884539
          </button>
          <button className="bg-blue-200 hover:bg-blue-300 px-3 py-1 rounded text-blue-800 font-mono transition-colors">
            9940096012
          </button>
        </div>
      </div>
    </div>
  );
}
 