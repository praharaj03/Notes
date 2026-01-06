import { SiNextdotjs, SiReact, SiMongodb, SiTailwindcss, SiJavascript, SiVercel, SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="py-9 mt-9">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 mb-4 font-bold text-xl">Developed by Abhisek Praharaj with 💖</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <SiReact className="text-blue-500" title="React" />
          <SiNextdotjs className="text-black" title="Next.js" />
          <SiMongodb className="text-green-500" title="MongoDB" />
          <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />
          <SiJavascript className="text-yellow-500" title="JavaScript" />
          <SiVercel className="text-black" title="Vercel" />
          <SiGithub className="text-black" title="GitHub" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;