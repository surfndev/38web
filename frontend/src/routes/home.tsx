import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export const Route = createFileRoute('/home')({
  component: Home,
});

export default Home;