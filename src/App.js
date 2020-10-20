import React from 'react';
import { FAQSnippet } from './snippet/faqs';
import { FooterSnippet } from './snippet/footer';
import { JumbotronSnippet } from './snippet/jumbotron';

function App() {
  return (
    <>
      <JumbotronSnippet />
      <FAQSnippet />
      <FooterSnippet />
    </>
  );
}

export default App;
