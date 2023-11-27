import React from "react";

export default function Portfolio() {
  return (
    <div className="projects">
      <h1>Portfolio</h1>
    <div>
    <div className="cardContainer">
      <img src='/project-img/quiz app.png' alt='quizapp' style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }}/>
      <div>
        <h1 className="cardTitle">Quiz app </h1>
        <div>
          <p className="cardDescription"> Quiz App is a web application that allows users to take a quiz on a variety of topics. It has a timer, when timer ends the quiz and user can also view their scores on the quizzes they have taken.</p>
        </div>
      </div>
      <div className="cardFooter">
        <button>
        <a href="https://github.com/HadiqaAziz/Quiz-Game-with-timer">Repository</a>
        </button>
        <button>
        <a href="https://hadiqaaziz.github.io/Quiz-Game-with-timer/">Visit Site!</a>
        </button>
      </div>
    </div> 
    </div>

<div>
<div className="cardContainer">
  <img src='/project-img/tech blog.png' alt='Tech blog' style={{ marginTop: '10px', maxWidth: '40%', maxHeight: '40%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Hadiqa's tech blog</h1>
    <div>
      <p className="cardDescription">
      This is a tech blog website that allows users to create an account, login, and post blogs. Users can also view other users' blogs and comment on them.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/HadiqaAziz/CMS-Blog">Repository</a>
    </button>
    <button>
    <a href="https://hadiqa-tech-blog-1234-2374fed05503.herokuapp.com/">Visit Site!</a>
    </button>
  </div>
</div>
</div>


<div>
<div className="cardContainer">
<img src='/project-img/express-not-taker.herokuapp.com_ (2).png' alt='placeholder' style={{ marginTop: '10px', maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Express Note Taker</h1>
    <div>
      <p className="cardDescription">
      This project is a Note Taker website that allows users to add text to a title and text area to save notes for later. Multiple notes can be saved as it is persistent data and you can delete old notes. This project allows for organization of note text for the user to use in any format.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/HadiqaAziz/note-taking-app-using-express.js">Repository</a>
    </button>
    <button>
    <a href="https://note-taking-app-using-express-053d8b2b626c.herokuapp.com/notes">Visit Site!</a>
    </button>
  </div>
</div>
</div>

<div>
<div className="cardContainer">
<img src='/project-img/radiant-mountain-72051.herokuapp.com_ (1).png' alt='placeholder' style={{ marginTop: '10px', maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Text Editor</h1>
    <div>
      <p className="cardDescription">
      This is a text editor app created using progressive web app technology and webpack.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/HadiqaAziz/Progressive-Web-Application">Repository</a>
    </button>
    <button>
    <a href="https://github.com/HadiqaAziz/Progressive-Web-Application">Visit Site!</a>
    </button>
  </div>
</div>
</div>

<div>
<div className="cardContainer">
<img src='/project-img/weather app.png' alt='placeholder' style={{ marginTop: '10px', maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}/>
  <div>
    <h1 className="cardTitle">Weather Dashboard</h1>
    <div>
      <p className="cardDescription">
      This is a web application showing how to use server-side APIs and bootstrap to design a current weather and five day forecast webpage.
      </p>
    </div>
  </div>
  <div className="cardFooter">
    <button>
    <a href="https://github.com/HadiqaAziz/5-days-weather-forecast">Repository</a>
    </button>
    <button>
    <a href="https://hadiqaaziz.github.io/5-days-weather-forecast/">Visit Site!</a>
    </button>
  </div>
</div>
</div>



</div>
  );
}

