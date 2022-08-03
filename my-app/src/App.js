import React from 'react';
import Navarea from './Components/Navarea';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './Components/Welcome';
import Blogs from './Components/Blogs';
import Skills from './Components/Skills';
import SkillName from './Components/SkillName';
import Contact from './Components/Contact';
import ContactMeName from './Components/ContactMeName';
function App() {
  return (
  <section>
    <header>
      <div>
        <Navarea/>
      </div>
      <div>
        <Header></Header>
      </div>
    </header>

  
      <Welcome></Welcome>
      <Blogs></Blogs>
      <SkillName></SkillName>
      <Skills></Skills>
      <ContactMeName/>
      <Contact/>
  
  </section>
  );
}

export default App;
