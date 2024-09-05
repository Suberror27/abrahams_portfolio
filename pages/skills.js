import { MySkills } from "../components/MySkills";
import ProgressBar from "@/components/ProgressBar";

export default function Skills() {
    return (
     <>
      <h1 className="text-white text-2xl md:text-4xl text-center pb-4">My Skills</h1>
      <div className="pb-5">
        <MySkills />
        <ProgressBar title="Task 1" progress={25} label="25%" />
        <ProgressBar title="Task 2" progress={50} label="50%" />
        <ProgressBar title="Task 3" progress={75} label="75%" />
        <ProgressBar title="Task 4" progress={100} label="100%" />
      </div>
     </>
    );
  }
  