import tourPlannerImage from "../../../public/tourplanner.png";
import fileUPloader from "../../../public/fileUploader.png";

import WeatherImage from "../../../public/weatherImage.jpg";
import pdfReaderImage from "../../../public/pdfReaderImage.png";
import webServer from "../../../public/server.png";
import calculator from "../../../public/calculator.png";
import portfolio from "../../../public/portfolio.png";
import store from "../../../public/backend-api.png";
import task from "../../../public/taskManagement.png";
import cart from "../../../public/cart.png";
import reactRouter from "../../../public/React-Router.png";
import dashboard from "../../../public/dashboard.png"

const projects = [
  {
    id: 1,
    name: "Tour-Planner",
    technologies: "Frontend",
    image: tourPlannerImage,
    github: "https://github.com/mhbipul/Tour-Planner2.0",
    link : "https://mhbipul.github.io/Tour-Planner2.0/"
  },
  {
    id: 2,
    name: "React-Portfolio",
    technologies: "Frontend",
    image: portfolio,
    github: "https://github.com/mhbipul",
    link : "https://github.com/mhbipul/portfolio"
  },
  {
    id: 3,
    name: "Express-Store-Api",
    technologies: "Backend",
    image: store,
    github: "https://github.com/mhbipul/store-api",
    link : " https://youtu.be/FyrZmpsQOFk"
  },
  {
    id: 4,
    name: "File Uploader",
    technologies: "Backend",
    image: fileUPloader,
    github: "https://github.com/mhbipul/simple_file_uploader_using_multer",
    link : " https://youtu.be/B6lyNW1DdWY"
  },
  {
    id: 5,
    name: "Task Management",
    technologies: "MERN",
    image: task,
    github: "https://github.com/mhbipul/Task_Mangement_MERN",
    link : "https://youtu.be/HDXk6s5vs8s"
  },
  {
    id: 6,
    name: "React- ADD to Cart",
    technologies: "Frontend",
    image: cart,
    github: "https://github.com/mhbipul/simple-react-e-commerce",
    link : "https://sneaky-low.surge.sh/"
  },
  {
    id: 7,
    name: "React-Router Simple Project",
    technologies: "Frontend",
    image: reactRouter,
    github: "https://github.com/mhbipul/simple-react-router-demo",
    link : " https://straight-weight.surge.sh/"
  },
  {
    id: 8,
    name: "Python Webserver",
    technologies: "Backend",
    image: webServer,
    github: "https://github.com/mhbipul",
    link : "https://github.com/mhbipul/http-server-using-python-socket-programming"
  },
  {
    id: 9,
    name: "PDF Reader",
    technologies: "Backend",
    image: pdfReaderImage,
    github: "https://github.com/mhbipul",
    link : "https://github.com/mhbipul/simple_pdfreader"
  },
  {
    id: 10,
    name: "Weather App",
    technologies: "Backend",
    image: WeatherImage,
    github: "https://github.com/mhbipul/weather-app",
    link : "https://github.com/mhbipul/weather-app"
  },
  {
    id: 11,
    name: "BMI Calculator",
    technologies: "Frontend",
    image: calculator,
    github: "https://github.com/mhbipul/simple-bmi-calculator-react",
    link : "https://github.com/mhbipul/weather-app"
  },
  {
    id: 12,
    name: "React-Dashboard",
    technologies: "Frontend",
    image: dashboard,
    github: "https://github.com/mhbipul/Admin_Dashboard",
    link : "https://mhbipuladmindashboard.netlify.app/"
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
