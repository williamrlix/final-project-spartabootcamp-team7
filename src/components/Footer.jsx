import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Footer = () => {
    return(
        <>
            <div className="wrapper">
                <footer className="py-4 bg-dark">
                    <div className='container tengah'>
                        <div className="lingkaran" style={{backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/739/739193.png")', backgroundSize: '100%'}} />
                        <div className="lingkaran" style={{backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/2111/2111738.png")', backgroundSize: '100%'}} />
                        <div className="lingkaran" style={{backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/2175/2175193.png")', backgroundSize: '100%'}} />
                        <div className="lingkaran" style={{backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/542/542689.png")', backgroundSize: '100%'}} />
                    </div>
                    <div className="container px-5">
                        <p className="m-0 text-center text-white">
                        © 2022 AdventureSeekers. All Rights Reserved
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
    }
export default Footer