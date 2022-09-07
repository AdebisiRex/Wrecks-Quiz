import React from 'react';
import {Routes, Route} from "react-router-dom";
import SigninPage from './components/pages/SigninPage';
import WelcomePage from './components/pages/WelcomePage';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
    </Routes>
    {/* <WelcomePage/> */}
    </>
  );
}

export default App;
