import React from 'react';

function Experience() {

  const experienceStyle = {
    textAlign: 'left',
    margin: '20px 0'
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '10px'
  };


  return (
    <div style={experienceStyle}>
      <h2>Experience</h2>
      <ul style={listStyle}>
        <li>AI Creator Program Internship at Swecha Telangana</li>
        <li>MERN Stack Developer Intern at Greenko Group Company</li>
        <li>Cloud Computing Architect at SkillAP APSSDC</li>
        <li>Software Engineer Intern at AIOEAM CORP GLOBAL PVT LTD</li>
      </ul>
    </div>
  );
}

export default Experience;
