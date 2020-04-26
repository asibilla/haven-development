import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SiteFooter, SiteHeader, ViewWrapper } from './view/components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SiteHeader />
        <ViewWrapper />
        <SiteFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
