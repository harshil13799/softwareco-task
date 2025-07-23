import React from 'react';

const stats = [
  { title: 'Total Projects', value: 12 },
  { title: 'Total Estimations', value: 28 },
  { title: 'Users Online', value: 3 },
  { title: 'Pending Tasks', value: 5 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 border-l-4 border-blue-500"
          >
            <h2 className="text-lg font-semibold text-gray-700">{stat.title}</h2>
            <p className="text-2xl font-bold text-blue-600 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Project Alpha created</li>
          <li>Estimation for Web App submitted</li>
          <li>User admin logged in</li>
          <li>New task added to Project Beta</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;