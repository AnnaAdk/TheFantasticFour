import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import PersonalInfo from './PersonalInfo';
import MedSchoolInfo from './MedSchoolInfo';
import FacultyRecInfo from './FacultyRecInfo';
import MemAcaClubInfo from './MemAcaClubInfo';
import WorkInfo from './WorkInfo';
import ExperienceInfo from './ExperienceInfo';
import HonorsAndAwards from './HonorsAndAwards';
import LabResearchInfo from './LabResearchInfo';
import VolunteerExperiences from './VolunteerExperiences';
import FileBox from './FileBox';

function Dashboard() {
  const [activePage, setActivePage] = useState('profile'); //Default to Profile
  const handlePageChange = (page) => {setActivePage(page);};
  return (
    <Router><div>
    <div><button onClick={() => handlePageChange('profile')}>Profile</button></div>
    <div><button onClick={() => handlePageChange('personalInfo')}>Personal Information</button></div>
    <div><button onClick={() => handlePageChange('medSchoolInfo')}>Medical School Information</button></div>
    <div><button onClick={() => handlePageChange('facRecInfo')}>Faculty Recommendation Information</button></div>
    <div><button onClick={() => handlePageChange('membershipInfo')}>Membership Information</button></div>
    <div><button onClick={() => handlePageChange('workInfo')}>Work Information</button></div>
    <div><button onClick={() => handlePageChange('experienceInfo')}>Experience Information</button></div>
    <div><button onClick={() => handlePageChange('honsAwds')}>Honors and Awards</button></div>
    <div><button onClick={() => handlePageChange('labResearch')}>Lab Research Information</button></div>
    <div><button onClick={() => handlePageChange('volunteer')}>Volunteer Experiences</button></div>
    <div><button onClick={() => handlePageChange('FileBox')}>FileBox</button></div>
    
      {activePage === 'profile' && <ProfilePicture></ProfilePicture>}
      {activePage === 'personalInfo' && <PersonalInfo></PersonalInfo> }
      {activePage === 'medSchoolInfo' && <MedSchoolInfo></MedSchoolInfo> }
      {activePage === 'facRecInfo' && <FacultyRecInfo></FacultyRecInfo> }
      {activePage === 'membershipInfo' && <MemAcaClubInfo></MemAcaClubInfo> }
      {activePage === 'workInfo' && <WorkInfo></WorkInfo> }
      {activePage === 'experienceInfo' && <ExperienceInfo></ExperienceInfo> }
      {activePage === 'honAwd' && <HonorsAndAwards></HonorsAndAwards> }
      {activePage === 'labResearch' && <LabResearchInfo></LabResearchInfo> }
      {activePage === 'volunteer' && <VolunteerExperiences></VolunteerExperiences> }
      {activePage === 'Filebox' && <FileBox></FileBox> }
    </div>
    </Router>

  );
};

export default Dashboard;
