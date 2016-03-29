import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';

// data
import siteData from '../data.js';

// font awesome assets
import 'font-awesome/scss/font-awesome.scss';
import '../analytics.js';

const DefaultPage = ({ children }) => (
  <div className="page-wrap">

    <PageHeader
      logoImage={siteData.logo}
      alt={siteData.name}
    />

    <main className="main">
      { children }
    </main>

    <PageSection className="section-footer">
      <div>
        <ul className="social-media">
          <li>
            <a href="https://github.com/deptofcreativecaffeination">
              <FontAwesome name="github" />
            </a>
          </li>
          <li>
            <a href="mailto:hello@deptofcreativecaffeination.com">
              <FontAwesome name="envelope" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/deptofcc">
              <FontAwesome name="twitter" />
            </a>
          </li>
        </ul>
        <p>&copy; The Department of Creative Caffeination</p>
      </div>
    </PageSection>
  </div>
);

DefaultPage.propTypes = {
  children: PropTypes.array,
};

export default DefaultPage;
