import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
        {/* <h2>Professional Portfolio</h2> */}
        <div className='envelope'>
          <a href="mailto:hadiqa.aziz@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
        </div>
        <div className='linkedin'>
        <a href="https://www.linkedin.com/in/hadiqa-aziz-9b2063209/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        </div>
        <div className='github'>
          <a href="https://github.com/HadiqaAziz">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
    </footer>
  );
}