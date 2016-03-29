import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import DefaultPage from './DefaultPage.jsx';
import PageSection from '../components/PageSection';

import siteData from '../data';

const email = siteData.socialMedia.email;

const ThankYouPage = () => (
  <DefaultPage>
    <Helmet title="Thank You" />
    <PageSection title="Thank You">
      <p>Great!</p>
      <p>We sent your message to <a href={`mailto:${email}`}>{email}</a>!</p>
      <p>We'll be in touch soon.</p>
      <p><Link to="/" className="btn">&larr; Go Back to Homepage</Link></p>
    </PageSection>
  </DefaultPage>
);

export default ThankYouPage;
