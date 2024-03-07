import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
  const [activePage, setActivePage] = useState('personalInfo'); //Default to Profile
  const handlePageChange = (page) => {setActivePage(page);};
  return (
    <>
      <ProfilePicture></ProfilePicture>
      <div>
      <button onClick={() => handlePageChange('personalInfo')}>Personal Information</button>
      <button onClick={() => handlePageChange('medSchoolInfo')}>Medical School Information</button>
      <button onClick={() => handlePageChange('facRecInfo')}>Faculty Recommendation Information</button>
      <button onClick={() => handlePageChange('membershipInfo')}>Membership Information</button>
      <button onClick={() => handlePageChange('workInfo')}>Work Information</button>
      <button onClick={() => handlePageChange('experienceInfo')}>Experience Information</button>
      <button onClick={() => handlePageChange('honAwd')}>Honors and Awards</button>
      <button onClick={() => handlePageChange('labResearch')}>Lab Research Information</button>
      <button onClick={() => handlePageChange('volunteer')}>Volunteer Experiences</button>
      
      {activePage === 'personalInfo' && <PersonalInfo></PersonalInfo> }
      {activePage === 'medSchoolInfo' && <MedSchoolInfo></MedSchoolInfo> }
      {activePage === 'facRecInfo' && <FacultyRecInfo></FacultyRecInfo> }
      {activePage === 'membershipInfo' && <MemAcaClubInfo></MemAcaClubInfo> }
      {activePage === 'workInfo' && <WorkInfo></WorkInfo> }
      {activePage === 'experienceInfo' && <ExperienceInfo></ExperienceInfo> }
      {activePage === 'honAwd' && <HonorsAndAwards></HonorsAndAwards> }
      {activePage === 'labResearch' && <LabResearchInfo></LabResearchInfo> }
      {activePage === 'volunteer' && <VolunteerExperiences></VolunteerExperiences> }
      <br /><FileBox></FileBox></div>}
    </>
    
    

  );
};

export default Dashboard;
