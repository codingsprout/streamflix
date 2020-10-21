import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderSnippet } from '../snippet/header';
import { Form } from '../components';
import * as ROUTES from '../constant/routes';
import { FooterSnippet } from '../snippet/footer';

function Register() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <HeaderSnippet>
        <Form>
          <Form.Title>Register</Form.Title>
          {error && <Form.Err>{error}</Form.Err>}

          <Form.Mattress onSubmit={handleRegister} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({ target }) => setFirstname(target.value)}
            />

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
              Register
            </Form.Submit>
            <Form.Text>
              Already registered?{' '}
              <Form.Link to='/login'>Sign in here!</Form.Link>
            </Form.Text>
            <Form.SmallText>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot, so please do not spam me. Learn more.
            </Form.SmallText>
          </Form.Mattress>
        </Form>
      </HeaderSnippet>
      <FooterSnippet />
    </>
  );
}

export default Register;
