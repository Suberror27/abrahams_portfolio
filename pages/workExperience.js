import Container from "@/components/Container";

export default function WorkExperience() {

    const workExperience = [
        { title: "Data Systems Administrator", company: "Walmart", date: "05-2024 - Present", description: "Systems Administrator at Walmart Print Solutions 8600" },
        { title: "Systems Operator", company: "Walmart", date: "02-2022 - 05-2024", description: "Systems Operator at Walmart DC 6094" },
        // Add more workExperience
    ];

    return (
    <>
    <div className="fade-in">
      <h1 className="text-gray-700 font-semibold text-2xl md:text-5xl text-center pb-10">Work Experience</h1>

      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1 md:grid-cols-1 bg-red-600">
            
        </div>
      </div>

        <div className="pt-4 pb-2">
          {/* <h1 className="font-semibold text-white text-2xl md:text-4xl text-center">Work Experience</h1> */}
          <Container information={workExperience} />
        </div>

    </div>
    </>
    );
  }
  