'use client';

import { useContext } from 'react';
import { LevelContext } from '@/utilities/context/mycontext';

export default function Section({ children }: { children: any }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </section>
  );
}