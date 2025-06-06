import React, { useState, useEffect, useRef, useMemo } from "react";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Database,
  ChevronDown,
  Globe,
  FileCode,
  GitBranch,
  Cpu,
  Smartphone,
  Coffee,
  Figma,
  Zap,
  Settings,
  ExternalLink,
  Sun,
  Moon,
  Users,
  Clock,
  BookOpen,
  Target,
  Phone,
  MapPin,
  Download,
  Send,
  X,
  Menu,
  Hash,
} from "lucide-react";
import Typewriter from "typewriter-effect";
import profileImage from "./images/main2.jpg";
import maingif from "./images/2.gif";
import resumePDF from "./Amalya Dayarathna - Associate Software Engineer.pdf";
import emailjs from 'emailjs-com';


const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_jm5wkyf',       // Service ID
      'template_m2v9xhs',      // Template ID
      e.target,
      'CVpa8YIiqD8P7u05_'        // Public ID --> Account
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message.");
      }
    );

  e.target.reset(); // clear form after submission
};


const skills = {
  frontend: [
    { name: "HTML", icon: <FileCode className="w-6 h-6" /> },
    { name: "CSS", icon: <FileCode className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "ReactJs", icon: <Globe className="w-6 h-6" /> },
    
    { name: "Dart", icon: <FileCode className="w-6 h-6" /> },
    { name: "Bootstrap", icon: <FileCode className="w-6 h-6" /> },
    { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Material UI", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Cpu className="w-6 h-6" /> },
  ],
  backend: [
    { name: "Node JS", icon: <Server className="w-6 h-6" /> },
    { name: "Express JS", icon: <Server className="w-6 h-6" /> },
    { name: "Java", icon: <Coffee className="w-6 h-6" /> },
    { name: ".Net", icon: <Hash className="w-6 h-6" /> },
  ],
  database: [
    { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
    { name: "MySQL", icon: <Database className="w-6 h-6" /> },
  ],
  other: [
    { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
    { name: "BitBucket", icon: <GitBranch className="w-6 h-6" /> },
    
    { name: "Power Apps", icon: <Zap className="w-6 h-6" /> },
    { name: "REST API", icon: <Server className="w-6 h-6" /> },
    { name: "Docker", icon: <Database className="w-6 h-6" /> },
    { name: "Kubernetes", icon: <Settings className="w-6 h-6" /> },
    { name: "Wordpress", icon: <Globe className="w-6 h-6" /> },
    { name: "VsCode", icon: <Code className="w-6 h-6" /> },
    { name: "Postman", icon: <Zap className="w-6 h-6" /> },
    { name: "Figma", icon: <Figma className="w-6 h-6" /> },
  ],
};

const projects = [
  {
    name: "Synergetic Innovation in Gherkin Cultivation ",
    description:
      "The final year research project developed to improve the Gherkin  cultivation in Sri Lanka. This mobile application containing pest identification, disease identification, harvest prediction and cost prediction functionalities. I developed the harvest prediction component using machine learning algorithm; Random Forest which was given 97% of training accuracy.",
    tech: [
      "React Native",
      "NodeJs",
      "MongoDB",
      "REST API",
      "Python",
      "Flask",
      "Docker",
      "Kubernetes",
      "GitHub",
    ],
    link: { type: "github", url: "https://github.com/Amalya-Dayarathna/Ino-Agri-Mobile-App.git" },
    
    
  },
  {
    name: "Green Store",
    description:
      "This web application was created for people engaged in the agricultural field. Registered farmers can sell their harvest directly to customers, and customers can order fresh vegetables and fruits through this system. Also, farmers can search for preferred weather for each crop, get details about the diseases, the preferred fertilizers for diseases, and the equipment, and order them.",
    tech: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "REST API",
      "BootstrapCSS",
      "GitHub",
    ],
    link: {
      type: "github",
      url: "https://github.com/Amalya-Dayarathna/GreenStore.git",
    },
  },
  {
    name: "Mobile Application for Police Savings Association",
    description:
      "Led the creation of a comprehensive mobile application for the Police Savings Association, enable users to securely access and manage their savings and loan balances through a seamless digital experience.",
    tech: ["Flutter", "Dart", "REST API", "Material UI", "Bit Bucket"],
    link: { type: "none" },
  },
];

const PageDivider = ({ isDarkMode }) => (
  <div className="w-full py-12 flex justify-center items-center">
    <div className="flex items-center">
      <motion.div
        className={`w-20 border-t ${
          isDarkMode ? "border-gray-400" : "border-gray-500"
        }`}
        initial={{ width: 0 }}
        animate={{ width: "15rem" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className={`h-4 w-4 rounded-full ${
          isDarkMode ? "bg-gray-400" : "bg-gray-500"
        }`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className={`w-20 border-t ${
          isDarkMode ? "border-gray-400" : "border-gray-500"
        }`}
        initial={{ width: 0 }}
        animate={{ width: "15rem" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  </div>
);

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
//   const sectionRefs = {
    
//     home: useRef(null),
//     whyHireMe: useRef(null),
//     about: useRef(null),
//     skills: useRef(null),
//     projects: useRef(null),
//     experience: useRef(null),
//     contact: useRef(null),
  
// };

const home = useRef(null);
    const whyHireMe = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const experience = useRef(null);
    const contact = useRef(null);

const sectionRefs = useMemo(() => ({
  home: home,
    whyHireMe: whyHireMe,
    about: about,
    skills: skills,
    projects: projects,
    experience: experience,
    contact: contact,
}), []);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = Object.keys(sectionRefs);
  //     const currentSection = sections.find((section) => {
  //       const element = sectionRefs[section].current;
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         return rect.top <= 100 && rect.bottom >= 100;
  //       }
  //       return false;
  //     });
  //     if (currentSection) setActiveSection(currentSection);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs);
      const currentSection = sections.find((section) => {
        const element = sectionRefs[section].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]); // <-- Add sectionRefs here to the dependency array
  

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } font-sans overflow-hidden transition-colors duration-300`}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Poppins", sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Gill Sans MT Pro Book", "Poppins", sans-serif;
        }
      `}</style>
      <div className="fixed inset-0 z-0">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"
              : "bg-gradient-to-br from-blue-100 via-purple-100 to-gray-100"
          } opacity-50 transition-colors duration-300`}
        ></div>
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%221%22 fill=%22%23fff%22 opacity=%220.3%22/%3E%3C/svg%3E")]'
              : 'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%221%22 fill=%22%23000%22 opacity=%220.1%22/%3E%3C/svg%3E")]'
          } bg-repeat transition-all duration-300`}
        ></div>
      </div>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg transition-colors duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <h1 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-purple-700'}`}>GEHAN SATHUSHKA</h1> */}
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              {[ "About", "Projects", "Experience", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase()
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  } hover:${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-colors text-lg font-medium`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-200 text-gray-800"
                } transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-200 text-gray-800"
                } transition-colors duration-300 mr-4`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                onClick={toggleMenu}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800"
                } transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed top-16 left-0 right-0 ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } z-40 shadow-lg`}
          >
            <div className="container mx-auto px-6 py-4">
              {[ "About", "Projects", "Experience", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 ${
                    activeSection === item.toLowerCase()
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  } hover:${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-colors text-lg font-medium`}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Home section */}
        <section
          id="home"
          ref={sectionRefs.home}
          className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-around px-4 md:px-44"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  isDarkMode
                    ? "from-orange-400 to-purple-600"
                    : "from-green-600 to-purple-700"
                }`}
              >
                AMALYA DAYARATHNA
              </span>
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                <Typewriter
                  options={{
                    strings: ["FULL STACK DEVELOPER"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Passionate about building innovative web applications
            </motion.p>
          </motion.div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 mt-4 md:mt-0">
            <img
              src={maingif}
              alt="Animated GIF"
              className="w-full h-full rounded-full"
            />
            <div className="absolute inset-0 bg-purple-900 opacity-50 rounded-full"></div>
          </div>
        </section>

        <section id="whyHireMe" ref={sectionRefs.whyHireMe} className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why You Should Hire Me
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Technical Expertise",
                  content:
                    "Proficient in Flutter and MERN Stack, with a strong foundation in modern web technologies.",
                },
                {
                  icon: <GitBranch className="w-6 h-6" />,
                  title: "Problem Solver",
                  content:
                    "Experienced in tackling complex challenges and delivering innovative solutions in various projects.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Team Player",
                  content:
                    "Proactive team leader with excellent communication skills, fostering collaboration and productivity.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Reliable",
                  content:
                    "Consistently meets tight deadlines and delivers high-quality work, ensuring project success.",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Quick Learner",
                  content:
                    "Adaptable to new technologies and environments, always eager to expand knowledge and skills.",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Detail-Oriented",
                  content:
                    "Strong attention to detail, ensuring high-quality deliverables that exceed expectations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${
                    isDarkMode
                      ? "bg-gray-800 bg-opacity-50"
                      : "bg-white bg-opacity-50"
                  } p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
                  </div>
                  <p>{item.content}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <p className="text-lg mb-6">
                I'm excited about the opportunity to bring my unique blend of
                technical expertise and soft skills to your team, driving
                innovation and success in your projects.
              </p>
              <motion.a
                href={resumePDF}
                download="Amalya_Dayarathna_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" size={20} />
                Download My Resume
              </motion.a>
            </motion.div>
          </div>
        </section>

        <PageDivider isDarkMode={isDarkMode} />

        {/* About section */}
        <section id="about" ref={sectionRefs.about} className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/3"
              >
                <img
                  src={profileImage}
                  alt="Gehan Sathushka"
                  className="rounded-2xl w-64 h-64 object-cover mx-auto shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-2/3"
              >
                <p className="text-lg mb-4 mr-8 text-justify">
                  Fresh graduate from Sri Lanka Institute of Information
                  Technology (SLIIT) and more than one year experience as a
                  software developer at Sri Lanka Telecom PLC (SLT).
                </p>
                <p className="text-lg mb-4 mr-8 text-justify">
                  This role allowed me to collaborate on cutting-edge projects
                  and develop practical expertise in software engineering. My
                  ability to learn quickly, work diligently, and embrace new
                  challenges makes me well-suited for contributing to innovative
                  and dynamic teams.
                </p>
                <p className="text-lg mr-8 text-justify">
                  As a quick learner with a strong work ethic, I am ready to
                  adapt to industry expectations and continually enhance my
                  skill set.
                </p>
                <br></br>
                <br></br>
                <motion.a
                href={resumePDF}
                download="Amalya_Dayarathna_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" size={20} />
                Download My Resume
              </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        <PageDivider isDarkMode={isDarkMode} />

        {/* Skills section */}
        <section id="skills" ref={sectionRefs.skills} className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${
                  isDarkMode ? "bg-gray-800 bg-opacity-50" : "bg-white"
                } p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-xl font-semibold mb-4 capitalize flex items-center justify-center">
                  {category === "frontend" && <Globe className="mr-2" />}
                  {category === "backend" && <Server className="mr-2" />}
                  {category === "database" && <Database className="mr-2" />}
                  {category === "other" && <FileCode className="mr-2" />}
                  {category}
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {skillList.map((skill) => (
                    <motion.li
                      key={skill.name}
                      className={`flex items-center ${
                        isDarkMode ? "bg-gray-700 bg-opacity-50" : "bg-gray-100"
                      } p-2 rounded-md`}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: isDarkMode
                          ? "rgba(59, 130, 246, 0.5)"
                          : "rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      <span className="text-sm">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <PageDivider isDarkMode={isDarkMode} />

        {/* Projects section */}
        <section id="projects" ref={sectionRefs.projects} className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 container mx-auto px-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${
                  isDarkMode ? "bg-gray-800 bg-opacity-50" : "bg-white"
                } rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`${
                          isDarkMode
                            ? "bg-blue-500 bg-opacity-50"
                            : "bg-blue-100"
                        } text-sm px-2 py-1 rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link.type === "github" && (
                    <motion.a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center ${
                        isDarkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-500"
                      } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="mr-2" size={20} />
                      View on GitHub
                      <ExternalLink className="ml-1" size={16} />
                    </motion.a>
                  )}
                  {project.link.type === "external" && (
                    <motion.a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center ${
                        isDarkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-500"
                      } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe className="mr-2" size={20} />
                      Visit Github
                      <ExternalLink className="ml-1" size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <PageDivider isDarkMode={isDarkMode} />

        {/* Experience section */}
        <section id="experience" ref={sectionRefs.experience} className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Professional Experience
            </h2>
            <div className="flex flex-col items-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${
                  isDarkMode ? "bg-gray-800 bg-opacity-50" : "bg-white"
                } p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-4xl`}
              >
                <h3 className="text-2xl font-semibold mb-2">
                  Software Developer - Including Internship
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mb-4`}
                >
                  Sri Lanka Telecom PLC, Colombo 01 | Nov 2023 - Present
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  Developed Flutter-based mobile applications for external clients of Sri Lanka Telecom (SLT)
                </li>
                <li>
                  Provided development and operational support for internal and external .NET web projects within SLT
                </li>
                <li>
                  Delivered customer support and handled installation processes for SLT-developed applications deployed to external clients
                </li>
                </ul>
              </motion.div>
              
            </div>
          </div>
        </section>

        <PageDivider isDarkMode={isDarkMode} />

        {/* Contact section */}
        <section id="contact" ref={sectionRefs.contact} className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <div
              className={`${
                isDarkMode
                  ? "bg-gray-800 bg-opacity-50"
                  : "bg-white bg-opacity-50"
              } rounded-lg shadow-2xl overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className={`w-full md:w-1/2 p-8 ${
                    isDarkMode
                      ? "bg-gray-900 bg-opacity-50"
                      : "bg-gray-100 bg-opacity-50"
                  }`}
                >
                  <h3
                    className={`text-2xl font-semibold mb-6 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Contact Information
                  </h3>
                  <div
                    className={`space-y-4 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <p className="flex items-center">
                      <Phone className="mr-4" size={24} />
                      +94 71 563 6691
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-4" size={24} />
                      amalyadayarathna@gmail.com
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-4" size={24} />
                      Malabe, Sri Lanka
                    </p>
                  </div>
                  <div className="mt-8 flex space-x-4">
                    <motion.a
                      href="https://github.com/Amalya-Dayarathna"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`${
                        isDarkMode
                          ? "bg-white text-gray-900"
                          : "bg-gray-900 text-white"
                      } p-3 rounded-full`}
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href="http://www.linkedin.com/in/amalya-dayarathna-24985b1a6"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`${
                        isDarkMode
                          ? "bg-white text-gray-900"
                          : "bg-gray-900 text-white"
                      } p-3 rounded-full`}
                    >
                      <Linkedin size={24} />
                    </motion.a>
                  </div>
                </div>
                <div
                  className={`w-full md:w-1/2 p-8 ${
                    isDarkMode
                      ? "bg-gray-800 bg-opacity-50"
                      : "bg-gray-50 bg-opacity-50"
                  }`}
                >
                  {/* <form className="space-y-6"> */}
                  <form className="space-y-6" onSubmit={sendEmail}>

                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`w-full px-4 py-2 rounded-md ${
                          isDarkMode
                            ? "bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300"
                            : "bg-gray-900 bg-opacity-20 border border-gray-900 border-opacity-30 text-gray-900 placeholder-gray-600"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300`}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full px-4 py-2 rounded-md ${
                          isDarkMode
                            ? "bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300"
                            : "bg-gray-900 bg-opacity-20 border border-gray-900 border-opacity-30 text-gray-900 placeholder-gray-600"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300`}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className={`w-full px-4 py-2 rounded-md ${
                          isDarkMode
                            ? "bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300"
                            : "bg-gray-900 bg-opacity-20 border border-gray-900 border-opacity-30 text-gray-900 placeholder-gray-600"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300`}
                        placeholder="Your message here..."
                        required
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className={`w-full flex items-center justify-center ${
                        isDarkMode
                          ? "bg-white text-purple-600 hover:bg-purple-100"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      } font-bold py-3 px-4 rounded-md transition-colors duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        } py-6 transition-colors duration-300`}
      >
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Amalya Dayarathna. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Floating action button for quick navigation */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${
            isDarkMode ? "bg-blue-500 text-white" : "bg-blue-600 text-white"
          } p-3 rounded-full shadow-lg`}
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </motion.button>
      </motion.div>

      {/* Background animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-600"
            } rounded-full`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ opacity: Math.random() * 0.5 + 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioWebsite;
