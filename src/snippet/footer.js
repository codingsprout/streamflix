import React from 'react';
import { Footer } from '../components';

export const FooterSnippet = () => {
  return (
    <Footer>
      <Footer.Title>Questions? Contact Cero</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Col>
          <Footer.Link href='#'>FAQ</Footer.Link>
          <Footer.Link href='#'>Investor Relations</Footer.Link>
          <Footer.Link href='#'>Ways to Watch</Footer.Link>
          <Footer.Link href='#'>Corporate Information</Footer.Link>
          <Footer.Link href='#'>Netflix Originals</Footer.Link>
        </Footer.Col>

        <Footer.Col>
          <Footer.Link href='#'>Help Center</Footer.Link>
          <Footer.Link href='#'>Jobs</Footer.Link>
          <Footer.Link href='#'>Terms of Use</Footer.Link>
          <Footer.Link href='#'>Contact Us</Footer.Link>
        </Footer.Col>

        <Footer.Col>
          <Footer.Link href='#'>Account</Footer.Link>
          <Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
          <Footer.Link href='#'>Privacy</Footer.Link>
          <Footer.Link href='#'>Speed Test</Footer.Link>
        </Footer.Col>

        <Footer.Col>
          <Footer.Link href='#'>Media Center</Footer.Link>
          <Footer.Link href='#'>Buy Gift Cards</Footer.Link>
          <Footer.Link href='#'>Cookie Preferences</Footer.Link>
          <Footer.Link href='#'>Legal Notices</Footer.Link>
        </Footer.Col>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix by Cero</Footer.Text>
    </Footer>
  );
};
