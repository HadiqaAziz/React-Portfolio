import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

export default function Navigation(props) {
    const {
      currentTab,
      handleTabChange,
  
    } = props;
  
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab.name);
      }, [currentTab]);
  
  
    return (
  
     
      <nav className='nav'>
      <ul>
        <li>
            <a
              href="#about"
              onClick={() => handleTabChange('About')}
              className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handleTabChange('Portfolio')}
              className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleTabChange('Contact')}

              className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handleTabChange('Resume')}
              className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
      </ul>
      </nav>
  
    );
  }
