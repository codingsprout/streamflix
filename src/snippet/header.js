import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constant/routes';
import LOGO from '../logo.svg';

export const HeaderSnippet = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={LOGO} to={ROUTES.HOME} alt='Netflix' />
        <Header.Button to={ROUTES.LOG_IN}>Log In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
};
