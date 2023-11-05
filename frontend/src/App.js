import logo from './logo.svg';
import './App.css';
import Landingpage from './pages/Landingpage';
import Chatbot from './pages/Chatbot';
import Navbar from './pages/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
     
      <Routes>
    <Route path="/" element={<Landingpage />} />      
    <Route path="/chatbot" element={<Chatbot/>} />
    
       </Routes>
   </>
  );
}

export default App;
