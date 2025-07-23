import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Project "${title}" added.`);
    navigate('/projects');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">New Project</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default ProjectForm;