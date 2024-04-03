import React from 'react';
import SkillDataProvider from '../components/sub/SkillDataProvider';
const Skill_data = [
    {
      skill_name: "Html 5",
      Image: "/images/html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Css",
      Image: "/images/css.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Java Script",
      Image: "/images/js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Tailwind Css",
      Image: "/images/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React",
      Image: "/images/react.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Redux",
      Image: "/images/redux.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Type Script",
      Image: "/images/ts.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Next js 13",
      Image: "/images/next.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Framer Motion",
      Image: "/images/framer.png",
      width: 80,
      height: 80,
    },
  
  ];
  const Backend_skill = [
    {
      skill_name: "Node js",
      Image: "/images/node-js.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Express js",
      Image: "/images/express.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Mongo db",
      Image: "/images/mongodb.png",
      width: 40,
      height: 40,
    },
    {
      skill_name: "Fire base",
      Image: "/images/Firebase.png",
      width: 55,
      height: 55,
    },
    
    
    {
      skill_name: "My SQL",
      Image: "/images/mysql.png",
      width: 70,
      height: 70,
    },
    
    
  ];
  
 
  const Full_stack = [
    {
      skill_name: "React Native",
      Image: "/images/ReactNative .png",
      width: 70,
      height: 70,
    },
    {
      skill_name: "Docker",
      Image: "/images/docker.webp",
      width: 70,
      height: 70,
    },
  
    {
      skill_name: "Figma",
      Image: "/images/figma.png",
      width: 50,
      height: 50,
    },
  
  ];
  
  export const Other_skill = [
  ];
  const programming_skill = [
    {
      skill_name: "C++",
      Image: "/images/cpp.jpg",
      width: 80,
      height: 80,
    },
  ];
const SkillSection = () => {
    
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-50 py-20"
      style={{ transform: 'scale(0.9)' }}
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {programming_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

    </section>
  );
};

export default SkillSection;
