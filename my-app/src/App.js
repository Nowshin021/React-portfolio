import React from 'react';
import Navarea from './Components/Navarea';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './Components/Welcome';
import Blogs from './Components/Blogs';
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

    <div>
      <Welcome></Welcome>
    </div>
    <div>
      <Blogs></Blogs>
    </div>
  </section>
  );
}

export default App;
