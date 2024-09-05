// import SkillBars from "@/components/SkillsBar";
import Container from "@/components/Container";
import Badges from "@/components/Badges";
import Certificates from "@/components/Certificates";

export default function Education() {

  const education = [
    { title: 'Software Engineer', company: 'Tech Corp', date: '2020 - Present', description: 'Developed amazing features for our flagship product.' },
    { title: 'Software Engineer', company: 'Tech Corp', date: '2020 - Present', description: 'Developed amazing features for our flagship product.' },
    // Add more education
  ];

  const workExperience = [
    { title: 'Software Engineer', company: 'Tech Corp', date: '2020 - Present', description: 'Developed amazing features for our flagship product.' },
    { title: 'Software Engineer', company: 'Tech Corp', date: '2020 - Present', description: 'Developed amazing features for our flagship product.' },
    // Add more education
  ];

  const certInfo = [
    { title: 'Certified React Developer', issuer: 'React Academy', date: '2022' },
    { title: 'Certified React Developer', issuer: 'React Academy', date: '2022' },
    { title: 'Certified React Developer', issuer: 'React Academy', date: '2022' },
    { title: 'Certified React Developer', issuer: 'React Academy', date: '2022' },
    // Add more certifications
  ];

  const badges = [
    { title: 'Tester', image: '/expo_icon.svg', issuer: 'Expo' },
    { title: 'Tester 2', image: '/html_icon.svg', issuer: 'HMTL' },
    { title: 'Tester', image: '/expo_icon.svg', issuer: 'Expo' },
    { title: 'Tester 2', image: '/html_icon.svg', issuer: 'HMTL' },
    // Add more badges
  ];

    return (
     <>
      <h1 className="text-white font-semibold text-2xl md:text-4xl text-center pb-4">My Education and Expreriences</h1>

      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div>
            <h1 className="font-semibold text-gray-700 text-2xl md:text-4xl text-center">Education</h1>
            <Container information={education} />
          </div>

          <div>
            <h1 className="font-semibold text-gray-700 text-2xl md:text-4xl text-center">Work Experience</h1>
            <Container information={workExperience} />
          </div>
          
        </div>
      </div>

      <div className="grid grid-rows-1 pt-4 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div>
            <h1 className="font-semibold text-gray-700 text-2xl md:text-4xl text-center">Certificates</h1>
            <Certificates certInfo={certInfo}/>
          </div>

          <div>
            <h1 className="font-semibold text-gray-700 text-2xl md:text-4xl text-center">Badges</h1>
            <Badges badgeInfo={badges} />
          </div>

        </div>
      </div>
     </>
    );
  }
  
  
 {/* <div class="flex flex-col items-center">
          <div class="primary_bg2 py-2 px-5 rounded-md hover:scale-105 duration-500">Education</div>
          <div class="w-px h-[30px] bg-gray-500/50 "></div>
          <div class="rounded-full p-4 primary_bg2 hover:scale-105 duration-500">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
            </svg>
          </div>
          <div class="w-px h-[30px] bg-gray-500/50 "></div>
          <div class="max-w-[575px] text-sm section_color shadow-lg p-4 mb-12 rounded-lg text-center hover:scale-105 duration-500">
            <p class="text-lg font-bold mb-1 primary_text">B.Sc. Engineer | 2006-2010</p>
            <p class="mb-1 font-light">The Institution of Engineers Bangladesh (IEB)</p>
            <p class=""><b>Subject:</b> Electrical &amp; Electronics (EEE)</p>
          </div>
        </div>

        <div class="relative w-full flex flex-col item-center justify-center mt-10 ">
          <div class="hidden absolute xl:flex flex-col inset-0 items-center">
            <div class="primary_bg2 py-2 px-5 rounded-md hover:scale-105 duration-300">Experiences</div>
            <div class="w-px h-[130px] bg-gray-500/50 "></div>
            <div class="rounded-full p-4 primary_bg2 hover:scale-105 duration-500">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>
            </div>
            <div class="w-px h-[130px] bg-gray-500/50 "></div>
            <div class="rounded-full p-4 primary_bg2 hover:scale-105 duration-500">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>
            </div>
          </div>
          
          <div class="xl:hidden flex flex-col items-center">
            <div class="primary_bg2 py-2 px-5 rounded-md hover:scale-105 duration-500">Experiences</div>
            <div class="w-px h-[30px] bg-gray-500/50 "></div>
            <div class="self-center rounded-full p-4 primary_bg2 hover:scale-105 duration-500">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>
            </div>
            <div class="w-px h-[30px] bg-gray-500/50 "></div>
          </div>

          <div class="w-full flex flex-wrap justify-around gap-x-16 gap-y-10 xl:mt-16 px-4">
            <div class="flex flex-col gap-2 max-w-[430px] text-sm section_color shadow-lg p-4 rounded-lg xl:mt-[60px] hover:scale-105 duration-500">
              <p class="lg:text-lg font-bold primary_text">Aspiring Professional with Notable Project Experience</p>
              <p class=" font-bold">Personal Project Endeavors<span class="font-light text-[12px]"> | Oct 2020 - till now</span></p>
              <div class="mt-2 font-semibold ">My Skills:</div>
              <div class="ml-2 flex flex-col my-2">
                <div class="flex mr-1">
                  <div class="w-4 h-4">
                    <div class="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>I have independently completed all aspects of the projects I've worked on, including frontend, backend, database management, and project planning.</p>
                </div>
              </div>
              <div class="ml-2 flex flex-col my-2">
                <div class="flex mr-1">
                  <div class="w-4 h-4">
                    <div class="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>I dedicated 3+ years to rigorous self-training in MERN technology, and now I am fully confident in my abilities to make valuable contributions and provide support to a team.</p>
                </div>
              </div>
              <div class="ml-2 flex flex-col my-2">
                <div class="flex mr-1">
                  <div class="w-4 h-4">
                    <div class="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>I possess proficiency in various aspects of ReactJS, including routing, state management, component creation, context API usage, Hooks usage and seamless integration of APIs into the frontend.</p>
                </div>
              </div>
              <div class="ml-2 flex flex-col my-2">
                <div class="flex mr-1">
                  <div class="w-4 h-4">
                    <div class="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>In the backend, I handle server creation, credential management, database administration, and the seamless upload of files or images to Cloudinary, all achieved using Express.js and MongoDB.</p>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col gap-2 max-w-[430px] text-sm section_color shadow-lg p-4 rounded-lg xl:mt-[60px] hover:scale-105 duration-500">
              <p class="lg:text-lg font-bold primary_text">Engineer (Electrical &amp; Automation)</p>
              <p class=" font-bold">Bashundhara Group, Bangladesh<span class="font-light text-[12px]"> | Nov 2010 - Sep 2020</span></p>
              <div class="mt-2 font-semibold ">My Skills:</div>
              <div class="ml-2 flex flex-col my-2">
                <div class="flex mr-1">
                  <div class="w-4 h-4">
                    <div class="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>Programing automation technology (PLC &amp; HMI) of industrial machine &amp; utility</p>
                </div>
              </div>
              <div class="ml-2 flex flex-col my-2">
                <div class="flex mr-1">
                  <div class="w-4 h-4">
                    <div class="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>Trouble shooting &amp; maintenance of industrial machine</p>
                </div>
              </div>
              <div class="ml-2 flex flex-col my-2">
                <div class="flex mr-1">
                  <div class="w-4 h-4">
                    <div class="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>Despite my successful career in this field, I nurtured a strong interest in programming. Over the past 3+ years, I embarked on an intensive self-training journey with MERN technology. Today, I am confident in my proficiency and am eager to leverage my skills to contribute to and support a dynamic team.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}