import  { useState } from 'react';
import Header from './components/Header';
import InfoBanner from './components/InfoBanner';
import MainContent from './components/MainContent';
import StudentProfile from './components/StudentProfile';
import Circular from './components/Circular';
import FacultyStudent from './components/FacultyStudent';
import AcademicReports from './components/AcademicReports';
import  TimeTable from './components/TimeTable';
import  Spark from './components/Spark';
import Vanilla from './components/Vanilla';  

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <InfoBanner />
      {activeSection === 'welcome' && <MainContent />}
      {activeSection === 'profile' && <StudentProfile />}
      {activeSection === 'circular' && <Circular />}
      {activeSection === 'faculty' && <FacultyStudent />}
      {activeSection === 'reports' && <AcademicReports />}
           {activeSection === 'timetable' && <TimeTable />}
      {activeSection === 'spark' && <Spark />}
      {activeSection === 'vanilla' && <Vanilla />} 
    </div>
  );
}

export default App;
 