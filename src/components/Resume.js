import React from 'react';

export default function Resume() {

    return (
        <div>
            <div className="resumeTitle">
                <h1>Get to Know Me!</h1>
            </div>
            <div className="resumeBody">
                <div className="resumeContainer">
                    <h2>Download my Resume!</h2>
                    <a href="/Profile.pdf" target="_blank" rel="noreferrer">
                        <button className="resumeButton">Click Me!</button>
                    </a>
                </div>
                <div className="skillsContainer">
                <h2>Skills</h2>
                    <p>HTML5, CSS, Bootstrap, Tailwind,  React, JavaScript, Express, Node, MySQL, MongoDB, GraphQL, Apollo server</p>
                </div>
            </div>
        </div>
    )
}