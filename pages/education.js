import Container from "@/components/Container";
import Badges from "@/components/Badges";
import Certificates from "@/components/Certificates";

export default function Education() {

  const education = [
    { title: "GED", company: "NWACC", date: "03/2023", description: "3.2 GPA" },
    { title: "Computer Technician", company: "CONALEP", date: "2014 - 2017", description: "High School Diploma in Computer Technician" },
    // Add more education
  ];

  const workExperience = [
    { title: "Systems Administrator", company: "Walmart", date: "05-2024 - Present", description: "Systems Administrator at Walmart Print Solutions 8600" },
    { title: "Systems Operator", company: "Walmart", date: "02-2022 - 05-2024", description: "Systems Operator at Walmart DC 6094" },
    // Add more workExperience
  ];

  const certInfo = [
    { title: "IBM Full-Stack JavaScript Developer Profesional Certificate", issuer: "IBM / Coursera", date: "Working on it...", image: "/cert_placeholder.svg" },
    { title: "HTML, CSS, and Javascript for Web Developers Specialization", issuer: "John Hopkins University / Coursera", date: "04-2024", image: "/Coursera 8PCJJNTAPXYJ.svg" },
    // Add more certifications
  ];

  const badges = [
    { title: "Azure Fundamentals", image: "/azure_fundamentals_badge.svg", issuer: "Microsoft" },
    { title: "Azure Developing Solutions", image: "/azure_solutions_badge.svg", issuer: "Microsoft" },
    // Add more badges
  ];

    return (
     <>
     <div className="fade-in">

        <h1 className="text-gray-700 font-semibold text-2xl md:text-5xl text-center pb-8">Education and Work Exprerience</h1>

        <div className="grid grid-rows-1">
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="pt-4 pb-2">
              <h1 className="font-semibold text-white text-2xl md:text-4xl text-center">Education</h1>
              <Container information={education} />
            </div>

            <div className="pt-4 pb-2">
              <h1 className="font-semibold text-white text-2xl md:text-4xl text-center">Work Experience</h1>
              <Container information={workExperience} />
            </div>
            
          </div>
        </div>

        <div className="grid grid-rows-1">
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="pt-4 pb-2">
              <h1 className="font-semibold text-white text-2xl md:text-4xl text-center">Certificates</h1>
              <Certificates certInfo={certInfo}/>
            </div>

            <div className="pt-4 pb-2">
              <h1 className="font-semibold text-white text-2xl md:text-4xl text-center">Badges</h1>
              <Badges badgeInfo={badges} />
            </div>

          </div>
        </div>
    </div>
     </>
    );
  }