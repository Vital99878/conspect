import React from 'react';
import './Layout.scss';
import { useHistory } from 'react-router-dom';

type LayoutProps = {
  pageHeading?: string;
  children: React.ReactElement;
  Footer?: React.Component | React.ReactElement;
  Header?: React.Component | React.ReactElement;
  isGoBack?: boolean;
};
// const initialLayoutProps: Exclude<LayoutProps, 'children'> = {
//   Header: null,
//   Footer: null,
//   pageHeading: '',
//   isGoBack: false,
// }

/**
 * Layout для страницы. Оборачивает компонент. Нужен для того, что не засорять логику страницы повторяющимся элементами
 */

const GoBackButton: React.FC = () => {
  const history = useHistory();
  return <button onClick={history.goBack}>go back </button>;
};

const PageLayout: React.FC<LayoutProps> = ({
  children,
  pageHeading = '',
  Footer = null,
  Header = null,
  isGoBack = false,
}) => {
  const PageHeading = pageHeading ? <h1>{pageHeading}</h1> : null;
  const Content = children;

  return (
    <>
      {Header}
      {PageHeading}
      {isGoBack && <GoBackButton />}
      {Content}
      {Footer}
    </>
  );
};

export default PageLayout;
