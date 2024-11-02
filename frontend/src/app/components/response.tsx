"use client"

import React from 'react';

interface Container {
  name: string;
  image: string;
}

interface Pod {
  name: string;
  containers: Container[];
  status: string;
}

interface PodCardProps {
  pod: Pod;
}

const PodCard: React.FC<PodCardProps> = ({ pod }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(pod, null, 2));
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md relative mb-4 text-black">
      <h3 className="text-lg font-semibold">{pod.name}</h3>
      <p><strong>Status:</strong> {pod.status}</p>
      <div className="mt-2 text-sm text-gray-700">
        {pod.containers.map((container, index) => (
          <div key={index} className="mt-2">
            <p><strong>Container Name:</strong> {container.name}</p>
            <p><strong>Image:</strong> {container.image}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
      >
        Copy
      </button>
    </div>
  );
};

export default PodCard;
