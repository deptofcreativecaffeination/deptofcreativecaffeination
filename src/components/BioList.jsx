import React, { PropTypes } from 'react';
import uuid from 'node-uuid';
import Bio from './Bio';

function getId(bio) {
  return bio._id || uuid.v4();
}

function BioList({ bios }) {
  return (
    <div className="bio-list">
      { bios.map(bio => <Bio key={ getId(bio) } bio={bio} />)}
    </div>
  );
}

BioList.propTypes = {
  bios: PropTypes.array.isRequired,
};

export default BioList;
