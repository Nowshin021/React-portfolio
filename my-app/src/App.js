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
import Publications from './Components/Publications';
import PublicationName from './Components/PublicationName';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Achievements from './Components/Achievements';
import AchievementsName from './Components/AchievementsName';
function App() {
  return (
  <section>
   <Navarea/>
   <Header></Header>
   <AchievementsName></AchievementsName>
   <Achievements></Achievements>
    <Welcome></Welcome>
  
    <Blogs></Blogs> 
    <SkillName></SkillName>
    <Skills></Skills>
    <PublicationName/>
    <Publications/>
    <ContactMeName/>
    <Contact/>
    <Footer/>
  </section>
  );
}

export default App;
