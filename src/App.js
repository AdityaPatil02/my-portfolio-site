import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [
        "Final Year CSE Student",
        "Web Developer",
        "ML Enthusiast",
        "Tech Explorer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    AOS.init({ duration: 1000 });

    return () => typed.destroy();
  }, []);

  // New useEffect for smooth scroll with offset
  useEffect(() => {
  const navbar = document.querySelector('nav');
  if (!navbar) return;
  const navbarHeight = navbar.offsetHeight;

  const handleClick = (e) => {
    if (!e.target.matches('a[href^="#"]')) return;

    e.preventDefault();

    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    // ✅ NEW: More accurate offset calculation
    const rect = targetElement.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const offsetPosition = rect.top + scrollTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    if (isMenuOpen) setIsMenuOpen(false);
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
}, [isMenuOpen]);


  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold text-blue-600">Aditya Patil</h1>
        {/* Desktop Menu */}
       <div className="hidden md:flex space-x-7 items-center">
   <a href="#home" className="flex items-center space-x-1">
    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Home" className="w-5 h-5" />
    <span>Home</span>
  </a>
  
  <a href="#about" className="flex items-center space-x-1">
    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="About" className="w-5 h-5" />
    <span>About</span>
  </a>
  <a href="#skills" className="flex items-center space-x-1">
    <img        src="https://cdn-icons-png.flaticon.com/512/126/126486.png"
 alt="Skills" className="w-5 h-5" />
    <span>Skills</span>
  </a>
  <a href="#projects" className="flex items-center space-x-1">
    <img   src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000000%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224px%22%20height%3D%2224px%22%3E%0A%20%20%3Cpath%20d%3D%22M14%202H6C4.895%202%204%202.895%204%204v16c0%201.105.895%202%202%202h12c1.105%200%202-.895%202-2V8l-6-6zM13%203.5L18.5%209H13V3.5zM6%2020V4h7v5h5v11H6z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A"
 alt="Projects" className="w-5 h-5" />
    <span>Projects</span>
  </a>
  <a href="#contact" className="flex items-center space-x-1">
    <img  src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Contact" className="w-5 h-5" />
    <span>Contact</span>
  </a>
</div>


        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4 flex flex-col space-y-2 md:hidden">
           <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
   <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-10 text-center md:text-left overflow-visible"
>
  {/* Text Content */}
  <div className="md:w-1/2 space-y-6 max-w-xl w-full">
    <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-3xl sm:text-5xl font-bold mb-2 mt-0 break-words whitespace-normal"
>
  <span className="block sm:inline">Hi, I'm</span>{" "}
  <span className="block sm:inline">Aditya</span>{" "}
  <span className="block sm:inline">Patil</span>
</motion.h1>



    <h2 className="text-lg sm:text-xl mb-6">
      <span id="typed-text"></span>
    </h2>

    <p className="text-base sm:text-lg font-semibold max-w-3xl mx-auto md:mx-0">
      I am a frontend developer dedicated to delivering scalable and user-centric web applications. With a strong focus on problem-solving, I strive to create efficient, maintainable code that addresses real-world challenges while ensuring exceptional user experiences. I am committed to continuous learning and professional growth in the evolving landscape of web development.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <a
        href="#contact"
        className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition text-center"
      >
        Contact Me
      </a>
      <a
        href="https://drive.google.com/uc?export=download&id=19tZ4Wp77X4b1KS_mwaqXJynPmPvLuGsg"
        download
        className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition text-center"
      >
        Download Resume
      </a>
    </div>

    <div className="flex justify-center md:justify-start items-center space-x-7 mt-6">
      <a
        href="https://github.com/AdityaPatil02"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:opacity-90 transition"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6" />
      </a>

      <a
        href="https://www.linkedin.com/in/aditya-patil-27a218374/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:opacity-90 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          className="w-6 h-6"
        />
      </a>

      <a
  href="https://x.com/adityapatil275?t=Ag6UKfqk-d142lSIA1D1lg&s=09"  // replace with your actual X profile URL
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:opacity-90 transition"
>
  <img
    src="https://img.icons8.com/ios-filled/50/x.png" // replace with the actual X logo image path or URL
    alt="X"
    className="w-6 h-6"
  />
</a>

    </div>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
      <img src="https://i.postimg.cc/Bn7hxtNz/profile.jpg" alt="Aditya Patil" className="w-full h-full object-cover" />

    </div>
  </div>
</section>





      {/* About */}
   <section id="about" className="py-20 bg-[#f3ebe5] text-center ">
  <h2 className="text-4xl font-bold text-center -mt-7 mb-12 text-gray-900 scroll-mt-24">About Me</h2>

  <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center items-start ">

    {/* Left Side */}
    <div className="bg-white p-8 rounded-xl shadow-md md:w-1/2 space-y-6 text-center md:text-left">
      <div className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
        <span>🚀</span> <span>Frontend Developer</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
        Turning ideas into fast, elegant web apps.
      </h3>

      <p className="text-gray-700">
        I design and build responsive, accessible interfaces that prioritize user experience, speed, and maintainability. I enjoy solving real-world UI challenges and collaborating with teams to deliver impactful web applications.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <div className="bg-[#e9ddd5] px-6 py-4 rounded-md text-center">
          <p className="text-xl font-semibold">10+</p>
          <p className="text-sm text-gray-700">Projects</p>
        </div>
        <div className="bg-[#e9ddd5] px-6 py-4 rounded-md text-center">
          <p className="text-xl font-semibold">5+</p>
          <p className="text-sm text-gray-700">Workshops</p>
        </div>
        <div className="bg-[#e9ddd5] px-6 py-4 rounded-md text-center">
          <p className="text-xl font-semibold">4+</p>
          <p className="text-sm text-gray-700">Teams</p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="md:w-1/2 space-y-6">

      {/* Feature 1 */}
      <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
        <div className="text-xl">⚡</div>
        <div>
          <p className="font-semibold">Performance-first</p>
          <p className="text-sm text-gray-600">
            Optimized, responsive UIs with clean, accessible code.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
        <div className="text-xl">🌐</div>
        <div>
          <p className="font-semibold">End-to-end</p>
          <p className="text-sm text-gray-600">
            From APIs to deployments on Vercel/Render with CI-ready setup.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
        <div className="text-xl">💻</div>
        <div>
          <p className="font-semibold">Frontend Development</p>
          <p className="text-sm text-gray-600">
            Creating responsive and interactive interfaces with modern frameworks.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
        <div className="text-xl">🗄️</div>
        <div>
          <p className="font-semibold">Backend Collaboration</p>
          <p className="text-sm text-gray-600">
            Collaborating on server-side development and API integrations.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Skills */}
    <section id="skills" className="py-20 bg-gray-100" data-aos="fade-up">
  <h2 className="text-4xl font-bold mb-10 text-center">Skills and Technologies</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    
    {/* Programming Languages */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white shadow rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Programming Languages</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {[
          { name: "C", icon: "https://img.icons8.com/color/48/000000/c-programming.png" },
          { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
          { name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
         { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" }

        ].map((skill, index) => (
          <div key={index} className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
            <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Web Technologies */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white shadow rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Web Technologies</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {[
          { name: "HTML", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
          { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
          { name: "Tailwind", icon: "https://img.icons8.com/color/48/tailwindcss.png" },
          { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
          { name: "Express.js", icon: "https://img.icons8.com/ios/50/express-js.png" } // grayscale
        ].map((tech, index) => (
          <div key={index} className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
            <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Databases */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white shadow rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Databases</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {[
          { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
          { name: "MySQL", icon: "https://img.icons8.com/ios-filled/50/mysql-logo.png" }
        ].map((db, index) => (
          <div key={index} className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
            <img src={db.icon} alt={db.name} className="w-5 h-5" />
            <span className="text-sm">{db.name}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Tools & Utilities */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white shadow rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Tools & Utilities</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {[
          { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
          { name: "GitHub", icon: "https://img.icons8.com/ios-glyphs/30/github.png" },
          { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
          { name: "Docx2txt", icon: "https://img.icons8.com/ios-filled/50/document--v1.png" },
          { name: "PyPDF", icon: "https://img.icons8.com/fluency/48/pdf.png" }
        ].map((tool, index) => (
          <div key={index} className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
            <img src={tool.icon} alt={tool.name} className="w-5 h-5" />
            <span className="text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </motion.div>

  </div>
</section>


      {/* Projects */}
     <section
  id="projects"
  className="py-20 container mx-auto px-6"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold mb-10 text-center">Showcase Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Project 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
    >
      <img
        src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80"
        alt="Tough Guide"
        className="rounded-md mb-4 object-cover h-40 w-full"
      />
      <h3 className="text-xl font-semibold mb-2">Tough Guide</h3>
      <p className="mb-4 text-gray-700">
        Platform connecting tourists with local guides. Built with Node.js, Express.js, and MongoDB.
      </p>
      <span className="text-sm text-blue-600 block mb-4">Role: Frontend Developer</span>
      <div className="mt-auto flex space-x-3">
        <a
          href="https://github.com/AdityaPatil02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://github.com/AdityaPatil02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Live Demo
        </a>
      </div>
    </motion.div>

    {/* Project 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
    >
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
        alt="Real Estate Management"
        className="rounded-md mb-4 object-cover h-40 w-full"
      />
      <h3 className="text-xl font-semibold mb-2">Real Estate Management</h3>
      <p className="mb-4 text-gray-700">
        A platform for sellers, buyers, and agents to manage real estate transactions securely.
      </p>
      <div className="mt-auto flex space-x-3">
        <a
          href="https://github.com/AdityaPatil02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://github.com/AdityaPatil02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Live Demo
        </a>
      </div>
    </motion.div>

    {/* Project 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
    >
      <img
        src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=600&q=80"
        alt="Virtual Rock Paper Scissor Using AI"
        className="rounded-md mb-4 object-cover h-40 w-full"
      />
      <h3 className="text-xl font-semibold mb-2">Virtual Rock Paper Scissor Using AI</h3>
      <p className="mb-4 text-gray-700">
        An AI-powered virtual rock-paper-scissor game that predicts player moves and adapts.
      </p>
      <div className="mt-auto flex space-x-3">
        <a
          href="https://github.com/AdityaPatil02/Virtual-Rock-Paper-Scissor-Using-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        {/* If you don't have a live demo for this, you can omit the button or link it to a video/demo */}
          <a
          href="https://github.com/AdityaPatil02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
    
  </div>
</section>

{/* contact section */}
<section id="contact" className="py-20 bg-gray-900 text-center" data-aos="fade-up">
  <h2 className="text-4xl text-white font-bold mb-4">Get in Touch</h2>
  <p className="mb-12 text-white max-w-xl mx-auto text-lg">
    We’d love to hear from you! Fill out the form below or connect with us via email or social media.
  </p>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Contact Form */}
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={2}
          className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-600 text-white font-semibold px-6 py-3 rounded hover:bg-orange-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Info */}
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start space-y-6">
      <p className="flex items-center text-lg text-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Email"
          className="w-5 h-5 mr-3"
        />
        <strong>Email:</strong>
        <a href="mailto:adityapatil0275@gmail.com" className="text-blue-600 hover:underline ml-1">
          adityapatil0275@gmail.com
        </a>
      </p>
      <p className="flex items-center text-lg text-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className="w-5 h-5 mr-3"
        />
        <strong>Phone:</strong> +91 6363552689
      </p>
      <p className="flex items-center text-lg text-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          alt="Location"
          className="w-5 h-5 mr-3"
        />
        <strong>Location:</strong> Mysuru, Karnataka
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 justify-start mt-6">
        <a href="https://www.linkedin.com/in/aditya-patil-27a218374/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
          />
        </a>
        <a href="https://github.com/AdityaPatil02" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
          />
        </a>
        <a href="https://x.com/adityapatil275?t=Ag6UKfqk-d142lSIA1D1lg&s=09" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/50/x.png"
            alt="Twitter"
            className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
          />
        </a>
        <a href="https://www.instagram.com/adiipatil__02?igsh=MTc4N3Y1NjFnbHgyMQ==" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="Instagram"
            className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
          />
        </a>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-white text-white py-10">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
    {/* Tagline */}
    <p className="text-center text-black md:text-left text-gray-400 mb-6 md:mb-0 italic">
      Let's build something amazing together.
    </p>

    {/* Social Icons */}
    <div className="flex space-x-6">
      <a href="https://www.linkedin.com/in/aditya-patil-27a218374/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
        />
      </a>
      <a href="https://github.com/AdityaPatil02" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          alt="GitHub"
          className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
        />
      </a>
      <a href="https://x.com/adityapatil275?t=Ag6UKfqk-d142lSIA1D1lg&s=09" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/ios-filled/50/x.png"
          alt="Twitter"
          className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
        />
      </a>
      <a href="https://www.instagram.com/adiipatil__02?igsh=MTc4N3Y1NjFnbHgyMQ==" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
          alt="Instagram"
          className="w-8 h-8 rounded-full filter brightness-75 hover:brightness-100 transition"
        />
      </a>
    </div>

    {/* Copyright */}
    <p className="text-gray-500 text-sm mt-6 md:mt-0 text-center md:text-right">
      &copy; {new Date().getFullYear()} Aditya Patil. All rights reserved.
    </p>
  </div>
  
</footer>
    </div>
  );
}

export default App;

