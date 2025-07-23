import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <Link to="/projects/new" className="bg-blue-600 text-white px-4 py-2 rounded">Add Project</Link>
      {/* Mock project list UI */}
      <ul className="mt-4 list-disc list-inside">
        <li>Project Alpha</li>
        <li>Project Beta</li>
      </ul>
    </div>
  );
};

export default ProjectList;