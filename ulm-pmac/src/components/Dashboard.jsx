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
    <Switch>
      <Route path = "/profile"><ProfilePicture></ProfilePicture></Route>
      <Route path = "/personalInfo"><PersonalInfo></PersonalInfo></Route>
      <Route path = "/medSchoolInfo"><MedSchoolInfo></MedSchoolInfo></Route>
      <Route path = "/facRecInfo"><FacultyRecInfo></FacultyRecInfo></Route>
      <Route path = "/membershipInfo"><MemAcaClubInfo></MemAcaClubInfo></Route>
      <Route path = "/workInfo"><WorkInfo></WorkInfo></Route>
      <Route path = "/experienceInfo"><ExperienceInfo></ExperienceInfo></Route>
      <Route path = "/honsAwds"><HonorsAndAwards></HonorsAndAwards></Route>
      <Route path = "/labResearch"><LabResearchInfo></LabResearchInfo></Route>
      <Route path = "/volunteer"><VolunteerExperiences></VolunteerExperiences></Route>
      <Route path = "/Filebox"><FileBox></FileBox></Route>
    </Switch>
    </div>
    </Router>

  );
};

export default Dashboard;
