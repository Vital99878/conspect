import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ history, location }: RouteComponentProps) => {
  function isLastItem(arr: any[], index: number): boolean {
    return index === arr.length - 1;
  }

  function isHome(path: string): boolean {
    return path === '/';
  }

  function splitPath(path: string): string[] {
    if (isHome(path)) return [''];
    return path.split('/');
  }

  const [routes, setRoutes] = useState(splitPath(location.pathname));

  useEffect(() => {
    setRoutes(splitPath(location.pathname));
  }, [location]);

  return (
    <nav className={'breadcrumbs'}>
      <ul className={'flow-row'} style={{ gap: '1rem' }}>
        {routes.map((path, index) => {
          const routeTo = `${routes.slice(0, index + 1).join('/')}`;
          if (index === 0) {
            console.log(routes.length);
            return routes.length > 1 ? (
              <li key={'first'}>
                <a onClick={() => history.push('/')}>Home</a>
              </li>
            ) : (
              <li key={'first'}>Home</li>
            );
          }
          if (isLastItem(routes, index)) {
            return <li key={path}>{path}</li>;
          }
          return (
            <li key={path}>
              <a onClick={() => history.push(routeTo)}>{path}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Breadcrumbs);
