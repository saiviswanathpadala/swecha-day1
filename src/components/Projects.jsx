import React from 'react';

function Projects() {

  const projectStyle = {
    textAlign: 'left',
    margin: '20px 0'
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '10px'
  };


  return (
    <div style={projectStyle}>
      <h2>Projects</h2>
      <ul style={listStyle}>
        <li>Project 1: Hotel Booking Website using java as backend</li>
        <li>Project 2: Serverless ecommerce website using AWS Services</li>
        <li>Project 3: Basic Js,React,Express projects</li>
      </ul>
    </div>
  );
}

export default Projects;
