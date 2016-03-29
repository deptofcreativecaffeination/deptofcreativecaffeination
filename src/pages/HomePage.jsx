import React from 'react';
import Helmet from 'react-helmet';
import DefaultPage from './DefaultPage.jsx';
import PageSection from '../components/PageSection';
import ProjectGrid from '../components/ProjectGrid';
import BioList from '../components/BioList';
import ContactForm from '../components/ContactForm';

// Site Data
import siteData from '../data.js';

const HomePage = () => (
  <DefaultPage>
    <Helmet title="Home" />

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
        <ContactForm
          mailTo={siteData.contactForm.mailTo}
          subjectPrefix={siteData.contactForm.subjectPrefix}
        />
      </div>
    </PageSection>
  </DefaultPage>
);


export default HomePage;
