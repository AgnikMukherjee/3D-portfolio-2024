import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "react.svg",
    "redux.svg",
    "tailwindcss.svg",
    "framer-motion.svg",
    "gsap.svg",
    "threejs.svg",
    "nextjs.svg",
    "node.svg",
    "express.svg",
    "mongodb.svg",
    "neon.jpeg",
    "cloudinary.jpeg",
    "javascript.svg",
    "cplusplus.svg",
    "figma.svg",
    "python.svg",
    "gemini.svg",
    "git.svg"



  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={90} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />

  
);
