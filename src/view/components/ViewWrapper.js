import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../../constants';
import { Home, Plan } from '../routes';

const ViewWrapper = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.plan} component={Plan} />
    </Switch>
  );
};

export default ViewWrapper;
