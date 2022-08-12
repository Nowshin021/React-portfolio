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
import Achievements from './Components/Achievements';
import AchievementsName from './Components/AchievementsName';
import Education from './Components/Education';
import EducationName from './Components/EducationName';

function App() {

  const mylinks={git:'https://github.com/Nowshin021', linkedin :'https://www.linkedin.com/in/naziaafrin/'};
  const myprojects ={reactproject:'https://github.com/Nowshin021/demo-app', djangoproject:'https://github.com/Nowshin021/django-blog',dsproject:'https://github.com/Nowshin021/Data-Science-Project-ds_salary-/blob/main/visuals_glassdoor.ipynb',frontendproject:'https://github.com/Nowshin021/education-pro',
  frontendprojectlive:'https://nowshin021.github.io/education-pro/'};
  const mypublication={data:'https://www.scitepress.org/PublicationsDetail.aspx?ID=8qJ8R+41KDA=&t=1'};

  return (
  <section>
   <Navarea/>
   <Header  mylinks={mylinks}/>
   <AchievementsName/>
   <Achievements/>
    <Welcome/>
  
    <Blogs myprojects={myprojects}/>
    <SkillName/>
    <Skills/>
    <EducationName/>
    <Education/>
    <PublicationName />
    <Publications mypublication={mypublication}/>
   
    <ContactMeName/>
    <Contact/>
    <Footer/>
  </section>
  );
}

export default App;
