"use client"
import React from 'react';
import AnimatedFollower3 from './Mus2';
import Card from "@/app/(public)/test/Card";

const App = () => {
  return (
    <div className="relative">
      {/* <AnimatedFollower /> */}
      <AnimatedFollower3 />

        {/*start product grid */}
<div className="max-w-7xl mx-auto">
  <Card/>
</div>

    </div>
  );
};

export default App;
