import React from 'react';
import web from '../src/imgages/homepic.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = ()=>{
    return(
        <>
            <Common name="Grow Your Business With" imgsrc={web} visit="/services" btnname="Get Started"/>
        </>    
    );
};

export default Home;