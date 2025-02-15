import AboutImage from "../../../public/aboutme-image.png";
import photo from "../../../public/photo.png";
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={photo}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node & Express JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Git
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Databases 
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              




            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  1+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  20+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details about my self */}

      <div>
        <div role="tablist" className="tabs tabs-lifted px-28 py-20">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Education"
          />
          <div
            role="tabpanel"
            className="tab-content bg-neutral-900 border border-base-300 rounded-lg p-6"
          >
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    2020-2024
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    Bsc in Computer Science & Engineering - United International
                    Unitersity
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                    I have completed my university studies, with a strong focus
                    on Data Structures and Algorithms, Digital Image Processing,
                    Deep Learning, and Artificial Intelligence. While I value
                    theoretical knowledge, I am most passionate about applying
                    these concepts through hands-on practice. My preferred
                    programming language is Python, though I am also proficient
                    in Java.
                  </p>
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="timeline-end timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    2017-2019
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    Higher Secondary School Certificate - Govt. Haraganga
                    College
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                    I graduated from Govt. Haraganga College, Munshiganj, with a
                    GPA of 4.08 out of 5.00 in the Science stream. My favorite
                    subjects were Higher Mathematics and Physics, and I was
                    particularly passionate about solving complex problems and
                    practicing these subjects extensively.
                  </p>
                </div>

                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />

                <div className="timeline-start timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    2016-2017
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    Secondary School Certificate - Malkhanagar High School
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                    I completed my secondary education at Malkhanagar High
                    School, Munshiganj, under the Dhaka Education Board,
                    achieving a perfect GPA of 5.00 out of 5.00 in the Science
                    stream.
                  </p>
                </div>

                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>

              <li>
                <hr className="bg-primary" />

                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
            </ul>
          </div>


          {/* tab 2 starts  */}

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Experience"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-neutral-900 border border-base-300 rounded-lg p-6"
          >
            <ul className="timeline timeline-vertical">
              <li>
                

                <div className="timeline-start timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    May 2024 - Running
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    Software Engineer at DigiSoft BD <a href="https://digisoftbd.com/index.php" className="text-blue-500 font-semibold underline" target="_blank">(link)</a>
                  </h3>
                  <br />
                  <ul className="list-disc pl-5">
                    <li>Develop and maintain large web applications</li>
                    <li>Provide training and support to users</li>
                    <li>Technology used here PHP, React, JavaScript, MySql</li>
                  </ul>
                  <br />
                  
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                 

                
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                

                <div className="timeline-end timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    Since 2023
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    Full Stack Developer (MERN)
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                  <ul className="list-disc pl-5">
                    <li>Proficient in JavaScript & ES6+ – Strong understanding of modern JavaScript features and best practices.</li>
                    <li>Full-stack expertise – Ability to work with both frontend (React) and backend (Node.js, Express.js).</li>
                    <li>Database management – Skilled in designing and managing MongoDB databases efficiently.</li>
                    <li>API development – Experience in building RESTful and GraphQL APIs for seamless data exchange.</li>
                    <li>Problem-solving mindset – Ability to debug, optimize performance, and write clean, maintainable code.</li>
                  </ul>
                  </p>
                </div>
                  

              
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    Since 2021
                  </span>
                  <br />
                  <h2 className="mt-4 font-bold text-xl text-white">
                  <b>Frontend Developer</b>
                  </h2>
                  <br />
                  <ul className="list-disc pl-5">
                    <li>Proficient in HTML, CSS, and JavaScript – Building responsive and interactive user interfaces. </li>
                    <li>Experience with modern frameworks & UI libraries– Skilled in React, Vue.js, or Angular, along with UI libraries like DaisyUI, Material UI, ShadCN UI, Bootstrap, Tailwind CSS, and Vanilla CSS</li>
                    <li>Responsive and performance-focused design – Ensuring seamless experiences across devices.  </li>
                    <li>Continuous learning – Started web development in 2021, always exploring new technologies, including Web 3.0.</li>
                  </ul>
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              
              
            </ul>
          </div>


          {/* tab 2 ends  */}

          {/* tab 3 starts  */}

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Award"
          />
          <div
            role="tabpanel"
            className="tab-content bg-neutral-900 border border-base-300 rounded-lg p-6"
          >
            <ul className="timeline timeline-vertical">
              <li>
                

                <div className="timeline-start timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    2nd January 2023
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    First Runner Up - CSE project show Fall 2022
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                  This project, titled <b> "Tour Planner,"</b> was developed as part of the <b>System Analysis and Design lab</b> course. It is a web-based application designed to assist users in planning and managing their tours from start to finish.
                  </p>
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                 

                
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                

                <div className="timeline-end timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    2nd January 2023
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    Second Runner Up - CSE project show Summer 2022
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                  The <b> "Smart Coffee Booth" </b>project was developed as part of the <b>Microprocessors & Microcontrollerslab </b> course. This system enables users to register via RFID and purchase coffee seamlessly. It also remembers individual user preferences, allowing them to reorder their preferred coffee with a single click.
                  </p>
                </div>
                  

              
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start timeline-box bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    19 September 2022
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                  Second Runner Up - CSE project show Summer 2022
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                  The <b>"BabySitter BD"</b>  project was developed as part of the <b>Database Management System Laboratory </b> course. It is a babysitting application that allows users to either offer babysitting services or hire a caregiver for their child, providing a convenient and reliable solution for child care.
                  </p>
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              
              
            </ul>
          </div>

          {/* tab 3 ends  */}

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Publication"
          />
          <div
            role="tabpanel"
            className="tab-content bg-neutral-900 border border-base-300 rounded-lg p-6"
          >
            {/* table-4 content starts */}
            <ul className="timeline timeline-end">
              <li>
                {/* <hr className="bg-primary" /> */}

                <div className="bg-neutral-900 border border-base-300 p-6 rounded-lg">
                  <span className="block text-sm font-medium text-neutral-300">
                    27 April, 2024
                  </span>
                  <br />
                  <h3 className="mt-4 font-bold text-xl text-white">
                    ElectroSortNet: A Novel CNN Approach for <br />
                    E-Waste Classification and IoT-Driven Separation System.
                  </h3>
                  <br />
                  <p className="mt-2 text-base text-neutral-300">
                    Author(s): Hasibul Hasan Rupok, Nahian Sourov, Sanjida
                    Jannat Anannaya, Amina Afroz, <b>Mahmudul Hasan Bipul</b>,
                    <br /> Md. Motaharul Islam.
                  </p>
                  <br />

                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/10561784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-800 underline"
                  >
                    {" "}
                    View{" "}
                  </a>
                </div>

                {/* <hr className="bg-primary" /> */}
              </li>
            </ul>
            {/* tab-4 content ends */}
          </div>
        </div>
      </div>

      {/* Details about my self */}
    </div>
  );
};

export default About;
