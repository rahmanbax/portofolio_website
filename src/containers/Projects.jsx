import React from "react";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="relative">
      {/* content */}
      <div className="absolute left-0 right-0 mx-auto items-center z-10 mt-32 w-[1040px]">
        <h2 className="font-bold text-[49px] text-center mb-16">
          Featured Projects
        </h2>
        <div className="flex flex-wrap gap-8">
          <Card title="BuildU PC" />
          <Card title="BuildU PC" />
          <Card title="BuildU PC" />
          <Card title="BuildU PC" />
        </div>
        
      </div>
      {/* background */}
      <div className="top-0 w-full h-[1211px] bg-[#9CC5A1] z-0"></div>
    </div>
  );
};

export default Projects;
