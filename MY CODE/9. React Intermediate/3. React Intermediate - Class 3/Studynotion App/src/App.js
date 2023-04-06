import "./App.css";
import {Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Dashboard from "./Pages/Dashboard";
import Template from "./Components/Template";
import { useState } from "react";
import img1 from './assets/frame.png'
import img2 from './assets/login.png'
import img3 from './assets/signup.png'
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  const [formType,setFormType] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setFormType={setFormType} />


      <Routes>
        <Route path="/" element={<Home/>} />


        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard />
          </PrivateRoute>
        } />

        <Route path="/login" 
          element={<Template 
                      setIsLoggedIn={setIsLoggedIn}
                      formType={formType}
                      title = 'Welcome Back'
                      img1 = {img1}
                      img2 = {img2}
          />}
        />

        <Route path="/signup"
          element={<Template
                      setIsLoggedIn={setIsLoggedIn}
                      formType={formType}
                      title = 'Join the millions learning to code with StudyNotion for free'
                      img1 = {img1}
                      img2 = {img3}
          />}
        />

        <Route path="*" element={<div></div>} />

      </Routes>

    </div>
  );
}

export default App;


// <Route path="/">
// {
//   <Route index element={<Home/>} />

//   {isLoggedIn ?
//   <Route path="/dashboard" element={<Dashboard/>} />
//   :
//   <Route path="/login" element={<Template 
//                         isLoggedIn={isLoggedIn}
//                         setIsLoggedIn={setIsLoggedIn}
//                         formType={formType}
//                         setFormType={setFormType}
//                         title = 'Welcome Back'
//                         img1 = {img1}
//                         img2 = {img2}
//                       />}
//   />}
// }
// </Route>