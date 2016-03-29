import React, { PropTypes } from 'react';

function renderTitle(title) {
  if (!title) return '';
  return (
    <h2 className="section-heading" >{title}</h2>
  );
}

function PageSection({ title, children, className }) {
  return (
    <section className={`page-section ${className || ''}`} >
      <div className="page-section__inner">
        { renderTitle(title) }
        { children }
      </div>
    </section>
  );
}

PageSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PageSection;
