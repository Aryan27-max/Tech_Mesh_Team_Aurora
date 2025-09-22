export  default function MainContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-8">
        <div className="hover:scale-105 transition-transform duration-300 inline-block mb-4">
          <img 
            src="https://images.unsplash.com/photo-1741639309891-954860932e73?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhY2FkZW1pY3xlbnwwfHx8fDE3NTg1Mjk2MTR8MA&ixlib=rb-4.1.0" 
            alt="University Campus" 
            className="mx-auto h-20 w-20 object-cover rounded-full shadow-lg border-4 border-blue-200"
          />
        </div>
        
        <p className="text-justify max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg animate-slideUp">
          SRM Academia is the Official Student/Parent Portal of SRM's Faculty of Engineering and Technology which aims at providing a better experience to the students to access the academic web services. The portal is a gateway to your academic information such as attendance, internal marks, timetable, etc.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1758413351776-cea82eed2176?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhY2FkZW1pY3xlbnwwfHx8fDE3NTg1Mjk2MTR8MA&ixlib=rb-4.1.0" 
            alt="Application Development Centre" 
            className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">Application Development Centre</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
 