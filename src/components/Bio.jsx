import React, { PropTypes } from 'react';

function Bio({ bio }) {
  return (
    <div className="bio">
      <img src={bio.img} alt={bio.name} />
      <div className="bio__titlecard">
        <h3 className="bio__name">{bio.name}</h3>
        <p className="bio__title">{bio.title}</p>
        <p className="bio__status {bio.statusClasses}">
          {bio.status}
        </p>
        <p><a href={bio.url} target="_blank">{bio.url}</a></p>
      </div>
    </div>
  );
}

Bio.propTypes = {
  bio: PropTypes.object.isRequired,
};

export default Bio;
