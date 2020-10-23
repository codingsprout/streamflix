import React from 'react';
import * as ROUTES from '../constant/routes';
import logo from '../logo.svg';
import { Header, Profile } from '../components';

export const SelectProfileSnippet = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
};
