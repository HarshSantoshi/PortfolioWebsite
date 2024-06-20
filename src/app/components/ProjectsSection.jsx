"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HealthMate",
    description: "Webapp to help patients book appointments with doctor",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarshSantoshi/getToWork",
    previewUrl: "https://harshsantoshi.vercel.app/",
  },
  {
    id: 2,
    title: "MovieHub",
    description: "A website to explore various Movies and Web series.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarshSantoshi/MovieHub",
    previewUrl: "https://movie-hubb.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An Ecommerce Website developed using MERN stack.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarshSantoshi/EcommerceWebsite",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "WhatsHub",
    description: "A real time chat application developed using MERN stack and socket.io",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarshSantoshi/WhatsHub",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Audio Zone",
    description: "A music player website developed using HTML , CSS and Vanila Javascript",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarshSantoshi/Music-Playerhttps://github.com/HarshSantoshi/MusicPlayer/tree/main",
    previewUrl: "https://music-player-blue-one.vercel.app/",
  },
  {
    id: 6,
    title: "Snake Game",
    description: "Classic arcade-style game where the player controls a growing snake,while avoiding collisions with walls and its own body.",
    image: "/images/projects/6.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/HarshSantoshi/Snake-Game",
    previewUrl: "https://snake-game-nine-umber.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;