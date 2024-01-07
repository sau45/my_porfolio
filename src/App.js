
import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './component/about/About';
import Header from './component/header/Header';
import HobbieInterest from './component/hobbie&interest/HobbieInterest';
import NameAndProfession from './component/name&profession/NameAndProfession';
import Project from './component/project/Project';
import Resume from './component/resume/Resume';
// import LearnTech from './component/learntech/LearnTech';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';



function App() {
  return (
    <>
        <Header />
      <Routes>
        <Route path='/' Component={NameAndProfession}></Route>
        <Route path='/project' Component={Project}></Route>
        <Route path='/about' Component={About}></Route>
        {/* <Route path='/learntech' Component={LearnTech}></Route> */}
        <Route path='/hobbieinterest' Component={HobbieInterest}></Route>
        <Route path='/resume' Component={Resume}></Route>
        <Route path='/contact' Component={Contact}></Route>

      </Routes>
        <Footer />

    </>

  );
}

export default App;
