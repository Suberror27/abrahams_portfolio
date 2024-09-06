import { MySkills } from "../components/MySkills";
import ProgressBar from "@/components/ProgressBar";

export default function Skills() {
    return (
     <>
      <h1 className="text-gray-700 font-semibold text-2xl md:text-5xl text-center pb-10">My Skills</h1>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pb-5">
          <h1 className="text-white font-semibold text-2xl md:text-4xl text-center pb-4">My Tech Stacks</h1>
            <MySkills />
          </div>
          <div className="pb-8 w-full p-4">
            <h1 className="text-white font-semibold text-2xl md:text-4xl text-center pb-4">Skill Level</h1>
            <ProgressBar title= "React.js" progress={80} />
            <ProgressBar title= "React Native" progress={50} />
            <ProgressBar title= "Next.js" progress={80} />
            <ProgressBar title= "Expo"  progress={50} />
            <ProgressBar title= "Node.js" progress={60} />
            <ProgressBar title= "MongoDB"  progress={60} />
            <ProgressBar title= "OracleDB"  progress={80} />
            <ProgressBar title= "GitHub"  progress={50} />
            <ProgressBar title= "Tailwind"  progress={75} />
            <ProgressBar title= "Bootstrap"  progress={90} />
            <ProgressBar title= "HTML"  progress={90} />
            <ProgressBar title= "CSS"  progress={90} />
            <ProgressBar title= "JavaScript"  progress={75} />
          </div>
        </div>
      </div>
     </>
    );
  }
  