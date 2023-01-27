import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import SubsPage from '../components/SubsPage';
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import Header from '../components/Header';

const API_URL = 'https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/v1/destination/posts?perPage=16';
console.log(API_URL);

const SubSubPage = () => {  
    const [data, setData] = useState([]);

        useEffect(() => {
        Axios.get(API_URL)
        .then(result => {
        const responseAPI = result.data;
        
        setData(responseAPI.data);
        })
        .catch(err => {
        console.log('Error',err);
        })
        },[])

    const savedId = localStorage.getItem("clickedId");
    const targetIndex = data.findIndex(data => data._id === savedId);

    console.log('useEffect is running');
    console.log(data);

    return(
        <>
            <Header
                image={`https://img.freepik.com/free-photo/kelingking-beach-sunset-nusa-penida-island-bali-indonesia_335224-338.jpg?w=740&t=st=1674185520~exp=1674186120~hmac=fe0d7a6e5140d7b13bcc05d47dc6f063737238201b7cda4d4793ace26e730fd2`}
                title={savedId}/>
            <SubsPage
                description={savedId}
            />
        </>
    )
    }
export default SubSubPage