import React from 'react';
import { FAQSnippet } from '../snippet/faqs';
import { JumbotronSnippet } from '../snippet/jumbotron';
import { FooterSnippet } from '../snippet/footer';
import { HeaderSnippet } from '../snippet/header';
import { Feature, TrialForm } from '../components';

function Home() {
  return (
    <>
      <HeaderSnippet>
        <Feature>
          <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel any time.</Feature.SubTitle>
          <TrialForm>
            <TrialForm.Input placeholder='Email Address' />
            <TrialForm.Button>Try it now!</TrialForm.Button>
            <TrialForm.Break />
            <TrialForm.Text>
              Ready? Enter email to create or restart membership
            </TrialForm.Text>
          </TrialForm>
        </Feature>
      </HeaderSnippet>
      <JumbotronSnippet />
      <FAQSnippet />
      <FooterSnippet />
    </>
  );
}

export default Home;
