import React from 'react';
import Common from './Common';
import rocket from '../src/imgages/rocket.png';

const About = ()=>{
    return(
        <>
            <Common name="Welcome To About Page" visit="/contact" imgsrc={rocket} btnname="Contact Now"/>
        </>
    );
};

export default About;