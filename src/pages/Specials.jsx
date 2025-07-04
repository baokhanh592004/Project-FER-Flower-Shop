// src/pages/Specials.jsx
import React from 'react';
import  orchids from '../data/ListOfOrchid';
import OrchidsCard from '../components/OrchidsCard';

export default function Specials() {
  const specialOrchids = orchids.filter(o => o.isSpecial);
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-4xl font-bold text-pink-500 dark:text-pink-400">
        Special Orchids
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {specialOrchids.map(orchid => (
          <OrchidsCard key={orchid.id} orchid={orchid} />
        ))}
      </div>
    </div>
  );
}