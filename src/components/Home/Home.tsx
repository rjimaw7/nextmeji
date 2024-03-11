import React from 'react';

import Lists from './Lists';

const Home = async () => {
  return (
    <section id="lists" className="container mx-auto my-8 bg-white py-4">
      <h2 className="text-xl font-semibold">User Card Lists</h2>
      <Lists />
    </section>
  );
};

export default Home;
