import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ViewWrapper from './view/components/ViewWrapper';

const App = () => {
  return (
    <BrowserRouter>
      Hello World!
      <ViewWrapper />
    </BrowserRouter>
  );
};

export default App;
