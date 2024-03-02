import React from 'react';
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
  return (
    <>
      <ProfilePicture />
      <PersonalInfo />
      <MedSchoolInfo />
      <FacultyRecInfo />
      <MemAcaClubInfo />
      <WorkInfo />
      <ExperienceInfo />
      <HonorsAndAwards />
      <LabResearchInfo />
      <VolunteerExperiences />
      <FileBox />
    </>
    
  );
};

export default Dashboard;
