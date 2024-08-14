import React from 'react';
import Name from './Name';
import Picture from './Picture';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';


function Profile() {
  return (
    <div>
      <Picture />
      <Name />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default Profile;
