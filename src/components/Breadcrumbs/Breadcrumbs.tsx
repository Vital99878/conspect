import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import './Breadcrumbs.scss';

const Arrow = () => {
  return (
    <svg width="12px" height="12px" viewBox="0 0 20 20" data-name="24x24/On Light/Arrow-Right">
      <rect id="view-box" width="24" height="24" fill="none" />
      <path
        id="Shape"
        d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z"
        transform="translate(9.25 6.25)"
        fill="#141124"
      />
    </svg>
  );
};

const Breadcrumbs = ({ history, location }: RouteComponentProps) => {
  function isHome(path: string): boolean {
    return path === '/';
  }

  function isLastItem(arr: any[], index: number): boolean {
    return index === arr.length - 1;
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
            return routes.length > 1 ? (
              <li key={'first'} className={'flow-row'}>
                <a onClick={() => history.push('/')}>Home</a>
                <Arrow />
              </li>
            ) : (
              <li key={'first'}>Home</li>
            );
          }
          if (isLastItem(routes, index)) {
            return <li key={path}>{path}</li>;
          }
          return (
            <li key={path} className={'flow-row'}>
              <a onClick={() => history.push(routeTo)}>{path}</a>
              <Arrow />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Breadcrumbs);
