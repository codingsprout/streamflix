import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { Styles } from './style';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <Styles />
      <App />
    </FirebaseContext.Provider>
  </>,

  document.getElementById('root')
);
