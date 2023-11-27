import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  const { currentTab, handleTabChange } = props

  return (
    <div className='header'>
      <section>
        <header className='headerTitle'>
          <div>
            {/* <h1>Hadiqa Aziz</h1> */}
          </div>
          <div>
            <Navigation
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navigation>
          </div>
        </header>
      </section>
    </div>
  );
}
