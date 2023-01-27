import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider2.css";
import Card from "../Card";
// import required modules
import { Pagination, Navigation } from "swiper";

const API_URL = 'https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/v1/destination/posts?perPage=6';

const Sliderss = () => {
const [data, setData] = useState([]);

useEffect(() => {
Axios.get(API_URL)
.then((result) => {
const responseAPI = result.data;
setData(responseAPI.data);
})
.catch((err) => {
console.log("Error", err);
});
}, []);

console.log(data);

const settings = {
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 3,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
clickable: true,
},
navigation: true,
modules: [Pagination, Navigation],
className: "mySwiper",
roundLengths: true,
};

return (
<div className="container ">
<Swiper {...settings} className="index2">
{data.map((item) => (
<SwiperSlide className="rounded-slide" key={item._id}>
<Link to={`/SubSubPage`} onClick={() => localStorage.setItem("clickedId", item._id)}>
<Card
image={"https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?w=826&t=st=1674642474~exp=1674643074~hmac=000f741aae40b99fc71fdf05fec220ba53725440ea5d67b8998a3b1b26a8b359"}
title={item.title}
/>
</Link>
</SwiperSlide>
))}
</Swiper>
</div>
);
};
export default Sliderss;