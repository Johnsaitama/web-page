// import logo from './logo.svg';
import './App.scss';


import { Routes, Route, BrowserRouter } from "react-router-dom"
 import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Layout from "./components/Layout";
import Resume from './components/Resume/certificates';


function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         
         <Route path="/" element={<Layout />}>
           <Route path="*" index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
           <Route path="projects" element={<Projects />} />
           <Route path="resume" element={<Resume />} />
          
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App