import React from 'react';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Travels from './components/Travels/Travels';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';

function App() {
  return (
    <>
     <NavBar />
     <AboutMe />
     <Travels />
     <Experience />
     <Education />
    </>
  );
}

export default App;
