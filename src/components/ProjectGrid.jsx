import React, { PropTypes } from 'react';
import ProjectBlock from './ProjectBlock';
import uuid from 'node-uuid';

function renderProjects(projectList) {
  return projectList.map(project => (
    <ProjectBlock
      key={ project._id || uuid.v4() }
      project={project}
    />
  ));
}

function ProjectGrid({ projects }) {
  return (
    <ul className="project-grid">
      { renderProjects(projects) }
    </ul>
  );
}

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectGrid;
