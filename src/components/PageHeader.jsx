import React, { PropTypes } from 'react';

function PageHeader({ logoImage, alt }) {
  return (
    <header className="page-section section-header">
      <h1>
        <img
          src={logoImage}
          alt={alt}
        />
      </h1>
    </header>
  );
}

// validation
PageHeader.propTypes = {
  logoImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PageHeader;
