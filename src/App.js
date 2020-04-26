import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SiteHeader, ViewWrapper } from './view/components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SiteHeader />
        <ViewWrapper />
      </BrowserRouter>
    </div>
  );
};

export default App;
