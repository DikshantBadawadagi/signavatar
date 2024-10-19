import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Convert from './Pages/Convert';
// import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
// import Video from './Pages/Video';
// import Navbar from './Components/Navbar';
// import CreateVideo from './Pages/CreateVideo';
// import Footer from './Components/Footer';
// import Videos from './Pages/Videos';
// import Feedback from './Pages/Feedback';

function App() {
  return(
    <Router>
      <div>
        <Routes>

          <Route exact path='*' element={<LearnSign />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;