import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        // eslint-disable-next-line
        subtitle="Are you looking for a movie or an actor?"
        subtitle="Developed By Varun Herlekar"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
