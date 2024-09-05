import { MySkills } from "../components/MySkills";
import ProgressBar from "@/components/ProgressBar";

export default function Skills() {
    return (
     <>
      <h1 className="text-white text-2xl md:text-4xl text-center pb-4">My Skills</h1>
      <div className="pb-5">
        <MySkills />
      </div>
      <div className="pb-5 w-full p-4">
        <h1 className="text-black text-xl md:text-4xl text-center pb-4">Percentage Skills Level</h1>
        <ProgressBar title= "React.js" progress={80} />
        <ProgressBar title= "React Native" progress={50} />
        <ProgressBar title= "Next.js" progress={80} />
        <ProgressBar title= "Expo"  progress={50} />
        <ProgressBar title= "Node.js" progress={60} />
        <ProgressBar title= "MongoDB"  progress={60} />
        <ProgressBar title= "OracleDB"  progress={80} />
        <ProgressBar title= "GitHub"  progress={50} />
        <ProgressBar title= "Tailwind"  progress={70} />
        <ProgressBar title= "Bootstrap"  progress={90} />
        <ProgressBar title= "HTML"  progress={95} />
        <ProgressBar title= "CSS"  progress={95} />
        <ProgressBar title= "JavaScript"  progress={75} />
      </div>
     </>
    );
  }
  