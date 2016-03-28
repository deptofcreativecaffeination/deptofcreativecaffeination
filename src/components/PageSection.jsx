import React, { PropTypes } from 'react';

function PageSection({ title, children }) {
  return (
    <section className="page-section" id="work">
      <div className="page-section__inner">
        <h2 className="section-heading" >{title}</h2>
        { children }
      </div>
    </section>
  );
}

PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default PageSection;
