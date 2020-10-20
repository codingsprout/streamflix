import React from 'react';
import { FAQSnippet } from '../snippet/faqs';
import { JumbotronSnippet } from '../snippet/jumbotron';
import { FooterSnippet } from '../snippet/footer';

function Home() {
  return (
    <>
      <JumbotronSnippet />
      <FAQSnippet />
      <FooterSnippet />
    </>
  );
}

export default Home;
