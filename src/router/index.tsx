import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './config';

export function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
