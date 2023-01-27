import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import SliderAuto from "../components/slider/Slide";
import Sliderss from "../components/slider2/Slider2";
import Header from '../components/Header';


const Home = (data) => {

    const dest = data.name;
  
    return(
      <>
         <Header
         image={`https://img.freepik.com/free-photo/kelingking-beach-sunset-nusa-penida-island-bali-indonesia_335224-338.jpg?w=740&t=st=1674185520~exp=1674186120~hmac=fe0d7a6e5140d7b13bcc05d47dc6f063737238201b7cda4d4793ace26e730fd2`}
         title="Dare to live the life you've always wanted"/>
         <SliderAuto name={dest}/>
         {/* <div style={{ padding: '50px' }}></div> */}
         <h2 className='center-text'>New Destinations</h2>
         <div style={{ padding: '20px' }}></div>
         <Sliderss/>
         <div style={{ padding: '50px' }}></div>
      </>
    )
}
export default Home