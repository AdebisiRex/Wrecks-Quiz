import React from 'react';
import {Routes, Route} from "react-router-dom";
import Control from './components/pages/Control';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import WelcomePage from './components/pages/WelcomePage';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/control" element={<Control/>}/>
    </Routes>
    
    </>
  );
}

export default App;
