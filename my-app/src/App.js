import React from 'react';
import Navarea from './Components/Navarea';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blogs from './Components/Blogs';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Publications from './Components/Publications';
import Footer from './Components/Footer';
import Achievements from './Components/Achievements';
import Education from './Components/Education';
import SectionHeader from './Components/SectionHeader';
import ViewMore from './Components/ViewMore';

function App() {

  const mylinks={git:'https://github.com/Nowshin021', linkedin :'https://www.linkedin.com/in/naziaafrin/'};
  const myprojects ={reactproject:'https://github.com/Nowshin021/demo-app', djangoproject:'https://github.com/Nowshin021/django-blog',dsproject:'https://github.com/Nowshin021/Data-Science-Project-ds_salary-/blob/main/visuals_glassdoor.ipynb',frontendproject:'https://github.com/Nowshin021/education-pro',
  frontendprojectlive:'https://nowshin021.github.io/education-pro/', reactprojectlive:'https://react-recipie-app-with-food-api.netlify.app/', dsproject2:'https://github.com/Nowshin021/DS_Real_state_Scratch', dsproject2_live :'https://github.com/Nowshin021/DS_Real_state_Scratch/blob/main/DS_Real_state_Scratch.ipynb'};
  const mypublication={data:'https://www.scitepress.org/PublicationsDetail.aspx?ID=8qJ8R+41KDA=&t=1'};

  const data={};
  return (
  <section>
   <Navarea/>
   <Header  mylinks={mylinks}/>
   <SectionHeader data={{headername:'Programming Achievements', id:'achievements'}}/>
   <Achievements/>
   <SectionHeader data={{headername:'Projects I have made', id:'projects'}}/>
  
    <Blogs myprojects={myprojects}/>
    <ViewMore mylinks={mylinks}/>
    <SectionHeader data={{headername:'Skills And Technology', id:'skills'}}/>
    <Skills/>
    <SectionHeader data={{headername:'Education', id:'education'}}/>
    <Education/>
    <SectionHeader data={{headername:'Publications', id:'publications'}}/>
    <Publications mypublication={mypublication}/>
    <SectionHeader data={{headername:'Contact Me', id:'contact'}}/>
    <Contact/>
    <Footer/>
  </section>
  );
}

export default App;
