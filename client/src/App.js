import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import SignIn from './SignIn';
import React from 'react';
import Profile from './Profile';
const LazyHome = React.lazy(()=>import('./Home'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<React.Suspense fallback={"Loading..."}><LazyHome/></React.Suspense>}></Route>
      {/* <Route path='/sign-in' element={<SignIn/>}></Route> */}
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
  );
}

export default App;
