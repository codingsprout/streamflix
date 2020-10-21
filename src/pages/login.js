import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterSnippet } from '../snippet/footer';
import { HeaderSnippet } from '../snippet/header';
import { Form } from '../components';
import * as ROUTES from '../constant/routes';

function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // validation pieces

  const isInvalid = password === '' || emailAddress === '';
  const handleLogin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderSnippet>
        <Form>
          <Form.Title>Log In</Form.Title>
          {error && <Form.Err>{error}</Form.Err>}
          <Form.Mattress onSubmit={handleLogin} method='POST'>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              placeholder='Password'
              value={password}
              type='password'
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type='submit'>
              Log In
            </Form.Submit>
          </Form.Mattress>
          <Form.Text>
            New to Netflix? <Form.Link to='/register'>Register Now!</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot, so please do not spam me. Learn more.
          </Form.SmallText>
        </Form>
      </HeaderSnippet>
      <FooterSnippet />
    </>
  );
}

export default Login;
