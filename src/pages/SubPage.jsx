import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Pagination from "../components/pagination/Pagination";
import Header from '../components/Header';

const SubPage = () => {
    return(
      <>
        <Header
         image={`https://img.freepik.com/free-photo/kelingking-beach-sunset-nusa-penida-island-bali-indonesia_335224-338.jpg?w=740&t=st=1674185520~exp=1674186120~hmac=fe0d7a6e5140d7b13bcc05d47dc6f063737238201b7cda4d4793ace26e730fd2`}
         title="Our Destination"/>
        <div style={{ padding: '20px' }}></div>
        <Pagination/>
         {/* <div style={{ padding: '50px' }}></div> */}
      </>
    )
}
export default SubPage