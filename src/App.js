import React from 'react';
import {Routes, Route} from "react-router-dom";
import OffCanvasDisplayScore from './components/OffCanvasDisplayScore';
import AdminControl from './components/pages/AdminControl';
import Control from './components/pages/Control';
import CreateQuiz from './components/pages/CreateQuiz';
import End from './components/pages/End';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import TakeQuiz from './components/pages/TakeQuiz';
import UserControl from './components/pages/UserControl';
import WelcomePage from './components/pages/WelcomePage';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/control" element={<Control/>}/>
      <Route path="/takequiz" element={<TakeQuiz/>}/>
      <Route path="/createquiz" element={<CreateQuiz/>}/>
      <Route path="/admin" element={<AdminControl/>}/>
      <Route path="/user" element={<UserControl/>}/>
      <Route path="/canvas" element={<OffCanvasDisplayScore/>}/>
      <Route path="/end" element={<End/>}/>
    </Routes>
    
    </>
  );
}

export default App;
