import React from 'react';
import profileImage from '../profile-img/profilepic2.jpg';

export default function About() {
    return (
        <div className="aboutContainer">
            <h1> Hadiqa Aziz </h1>
            <h2>(Full Stack Web Developer)</h2>
            <img src={profileImage} className="picture" alt="Hadiqa"/>
            <p>My name is Hadiqa Aziz. I am a hard-working professional with hands-on experience in software and web development. Looking for a position as a Full-Stack Developer.I have made multiple web apps using HTML5, CSS, TailwindCSS, Bootstrap, JavaScript, React, Express, Node, MySQL, MongoDB, Babel . Enjoy work that involves socializing and utilizing my creative and intellectual talent. I focus on enhancing my programming skills and am interested in contributing towards growth of company by high-quality work.</p>
        </div>
    )
}
