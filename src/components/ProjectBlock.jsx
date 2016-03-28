import React, { PropTypes } from 'react';

function ProjectBlock({ project }) {
  return (
    <li className="project-block">
      <a href={project.url}>
        {project.name}
      </a>
    </li>
  );
}

ProjectBlock.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectBlock;
