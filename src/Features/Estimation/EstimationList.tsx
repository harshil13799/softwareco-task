import React from 'react';
import { Link } from 'react-router-dom';

const EstimationList: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estimations</h1>
      <Link to="/estimations/new" className="bg-blue-600 text-white px-4 py-2 rounded">Add Estimation</Link>
      {/* Mock estimation list UI */}
      <ul className="mt-4 list-disc list-inside">
        <li>Website Redesign</li>
        <li>Mobile App UI</li>
      </ul>
    </div>
  );
};

export default EstimationList;
