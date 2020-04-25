import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SiteHeader, ViewWrapper } from './view/components';
import { styles } from './constants/';

const { globalStyles } = styles;


const App = () => {
  return (
    <div className={globalStyles}>
      <BrowserRouter>
        <SiteHeader />
        <ViewWrapper />
      </BrowserRouter>
    </div>
  );
};

export default App;
