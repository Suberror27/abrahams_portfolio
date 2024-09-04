
export function MySkills() {
    const skillsList = [
        {imgSource: "/react_icon.svg", title: "React.js", startTime: new Date("2024-05-01")},
        {imgSource: "/react_icon.svg", title: "React Native", startTime: new Date("2024-08-01")},
        {imgSource: "/nextjs_icon.svg", title: "Next.js", startTime: new Date("2024-05-01")},
        {imgSource: "/expo_icon.svg", title: "Expo", startTime: new Date("2024-08-01")},
        // {imgSource: "/nodejs_icon.svg", title: "Node.js", startTime: new Date("2024-01-01")},
        {imgSource: "/mongodb_icon.svg", title: "MongoDB", startTime: new Date("2024-05-01")},
        {imgSource: "/oracle-icon.svg", title: "OracleDB", startTime: new Date("2024-05-01")},
        {imgSource: "/github_icon.svg", title: "GitHub", startTime: new Date("2024-05-01")},
        {imgSource: "/tailwindcss_icon.svg", title: "Tailwind", startTime: new Date("2024-08-01")},
        {imgSource: "/bootstrap_icon.svg", title: "Bootstrap", startTime: new Date("2024-04-01")},
        {imgSource: "/html_icon.svg", title: "HTML", startTime: new Date("2023-09-01")},
        {imgSource: "/css_icon.svg", title: "CSS", startTime: new Date("2023-09-01")},
        {imgSource: "/javascript_icon.svg", title: "JavaScript", startTime: new Date("2024-04-01")},
      ]

    // Function to calculate months of experience from a start date
    // const calculateMonthsFromDate = (startDate) => {
    //     const now = new Date();
    //     let months = (now.getFullYear() - startDate.getFullYear()) * 12;
    //     months += now.getMonth() - startDate.getMonth();
    //     const years = Math.floor(months / 12);
    //     const remainingMonths = months % 12; //${years > 1 ? 's,' : ''}
    //     return `${years <= 0 ? "" : years + " year,"} ${years > 0 && remainingMonths > 0 ? ' ' : ''}${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    // };

    const calculateMonthsFromDate = (startDate) => {
        const now = new Date();
        let months = (now.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth();
        months += now.getMonth();
        return months <= 0 ? 0 : months;
    };

    // Calculate experience for each skill
    const skillsWithExperience = skillsList.map(skill => ({
        ...skill,
        experienceMonths: calculateMonthsFromDate(skill.startTime),
    }));

    return <>
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 lg:gap-8">
            {skillsWithExperience.map((item) => (
                <div key={item.title} className="flex flex-col justify-center items-center gap-1 hover:scale-110 duration-500">
                    <div title={item.title} className="h-24 w-24 p-3 md:h-28 md:w-28 rounded-full flex items-center justify-center">
                        <img className="w-full h-full p-2 object-fill rounded-md bg-gray-100 shadow-lg" src={item.imgSource} alt={item.imgSource} width="300" height="300" />
                    </div>
                    <p className="text-sm md:text-base font-bold">{item.title}</p>
                    <p className="text-xs md:text-base"><span>{item.experienceMonths}</span> months of Exp.</p>
                </div>
            ))}
        </div>
    </>
}