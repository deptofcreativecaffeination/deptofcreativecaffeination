import React from 'react';
import FontAwesome from 'react-fontawesome';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';
import ProjectGrid from '../components/ProjectGrid';
import BioList from '../components/BioList';
import ContactForm from '../components/ContactForm';
import siteData from '../data.js';

// font awesome assets
import 'font-awesome/scss/font-awesome.scss';
import '../analytics.js';

function HomePage() {
  return (
    <div className="page-wrap">

      <PageHeader
        logoImage={siteData.logo}
        alt={siteData.name}
      />

    <PageSection title="Our Work" className="section-projects">
      <ProjectGrid projects={siteData.projects} />
    </PageSection>

    <PageSection title="Our Team" className="section-bio-list">
      <BioList bios={siteData.bios} />
    </PageSection>

    <PageSection title="Hire Us" className="section-hireus">
      <div>
        <p>
          We love working with small to medium-sized businesses and non-profits.
        </p>
        <ContactForm settings={siteData.contactForm} />
      </div>
    </PageSection>

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
}

export default HomePage;
