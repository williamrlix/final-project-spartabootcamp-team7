import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SubPage from './pages/SubPage';
import SubSubPage from './pages/SubSubPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import axios from 'axios';
import Profile from './components/Profile';
import { Provider } from "react-redux";
import store from "./redux/store"; // pastikan file ini sudah diimport

function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/v1/destination/posts`)
        .then(result => {
          // return console.log(result);
          const responseAPI = result.data;
          setData(responseAPI.data);
        })
        .catch(err => {
          console.log('Error ', err);
        })
    }, [])

  return (
    <>
    <Provider store={store}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home name={data}/>} />
          <Route path="/SubPage" element={<SubPage />} />
          <Route path="/SubSubPage" element={<SubSubPage/>} />
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route> 
        </Routes>
      <Footer/>
    </Provider>
    </>
  );
}

export default App;
