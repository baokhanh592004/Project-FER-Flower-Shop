// src/pages/Naturals.jsx
import React from 'react';
import  orchids  from '../data/ListOfOrchid';
import OrchidsCard from '../components/OrchidsCard';

export default function Naturals() {
  const naturalOrchids = orchids.filter(o => o.isNatuaral);
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-4xl font-bold text-green-600 dark:text-green-400">
        Natural Orchids
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {naturalOrchids.map(orchid => (
          <OrchidsCard key={orchid.id} orchid={orchid} />
        ))}
      </div>
    </div>
  );
}