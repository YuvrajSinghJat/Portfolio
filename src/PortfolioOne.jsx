
import { useState, useEffect } from "react"
import yuviiImage from "../src/img/yuviimage.jpg";
import notesheetImage from "../src/img/notesheetImage.png";
import conferenceImage from "../src/img/conferenceMainImage.png";
import AWSCloudArchitectingImage from "../src/img/AWSCloudArchitecting.png";
import AWSCloudFoundationsImage from "../src/img/AWSCloudFoundations.png";
import yuvrajSinghJatResume from "../src/img/Yuvraj_Singh_Jat_Resume.pdf";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ExternalLink,
  Download,
  Code,
  Database,
  Palette,
  Server,
  Star,
  Eye,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  Coffee,
  Zap,
} from "lucide-react"

export default function PortfolioOne() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend")

  // User Data Variables - Easily customizable
  const userData = {
    name: "Yuvraj Singh Jat",
    title: "Full Stack Web Developer",
    tagline: "Crafting digital experiences with code and creativity",
    location: "Indore [M.P.], India",
    email: "yuvrajsingh1008jat@gmail.com",
    phone: "+91 9685851293",
    website: "https://portfolio-coral-theta-26.vercel.app/",
    resumeUrl: yuvrajSinghJatResume,
    avatar: "",

    // Availability
    availableForHire: true,
    availabilityText: "Available for freelance projects",

    // Bio
    bio: "Passionate full-stack web developer with experience of building scalable web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",

    // Social Links
    social: {
      github: "https://github.com/YuvrajSinghJat",
      linkedin: "http://www.linkedin.com/in/yuvrajsinghjat",
      twitter: "https://twitter.com/",
      website: "https://portfolio-coral-theta-26.vercel.app/",
    },

    // Experience Stats
    // stats: {
    //   experience: "1+",
    //   projects: "5+",
    //   clients: "2",
    //   coffees: "1000+",
    // },
  }

  const projects = [
    {
      id: 1,
      title: "Notesheet Managment System",
      description:
        "Engineered a full-stack System using HTML, CSS, JS, Node.js, Express, and SQL with secure, role-based access.  Designed and optimized a relational SQL schema with 6+ tables to streamline notesheet workflows and approvals. Deployed the app on university server, enabling real-time access, user auth, and multi-level file approval.",
      image: notesheetImage,
      technologies: ["HTML", "JavaScript", "CSS", "MySQL", "Node js","Express js"],
      liveUrl: "http://note.medicaps.ac.in:5000",
      githubUrl: "https://github.com/YuvrajSinghJat/Notesheet.git",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Conference Website",
      description:
        "Developed a responsive conference website using React (CRA) and JavaScript, showcasing event schedules, speakers, and registration info.Implemented dynamic routing, reusable components, and interactive UI for seamless user experience. Deployed the site on AWS, ensuring fast, accessible, and mobile-friendly performance.",
      image: conferenceImage,
      technologies: ["React js", "JavaScript", "Tailwind CSS", "Bootstarp", "Create React App"],
      liveUrl: "https://conference.medicaps.ac.in/",
      githubUrl: "https://github.com/YuvrajSinghJat/ConferenceMedicaps.git",
      featured: true,
      category: "Frontend",
    },

  ]

  const internships = [
    {
      id: 1,
      institute: "MII Foundation",
      title : "Software Development Engineer Intern And Project Manager Intern",
      description1 : "Architected and contributed to scalable codebases as an SDE intern, driving development across frontend and backend using modern web stacks.",
      description2 : "Led a cross-functional team of developers and designers to deliver project milestones on time, coordinating sprint planning, task allocation, and regular stand-ups.",
      description3 : "Facilitated effective collaboration between stakeholders and team members, improving communication flow and ensuring alignment with project goals and timelines.",
      technologies: ["HTML","CSS","EJS", "React js","JavaScript","Node js", "Express js","MongoDB"],
    },
    {
      id: 1,
      institute: "IQPaths",
      title : "Full Stack Web Developer Intern",
      description1 : "Developed advanced backend logic and APIs to support dynamic, data-driven features, improving application performance and scalability.",
      description2 : "Contributed across the full stack using modern tools and frameworks, collaborating effectively with the team through Jira, GitHub.",
      description3 : "Enhanced backend architecture by integrating modular logic and ensuring clean, maintainable code",
      technologies: ["React js", "JavaScript", "Tailwind CSS", "Node js", "Express js","MongoDB"],
    },

  ]

    const certifications = [
    {
      id: 1,
      title: "AWS Cloud Architecting",
      image: AWSCloudArchitectingImage,
      url: "https://www.credly.com/go/ztpio35x",
    },
    {
      id: 2,
      title: " AWS Cloud Foundations",
      image: AWSCloudFoundationsImage,
      url: "https://www.credly.com/go/bKVpVdw1",
    },

  ]



  const skills = {
    frontend: [
      { name: "JavaScript", icon: "🟨" },
      { name: "React js", icon: "⚛️" },
      { name: "HTML", icon: "⚛️" },
      { name: "CSS", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🎨" },
      
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "REST APIs", icon: "🌐" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🚀" },
    ],
    tools: [
      { name: "Git", icon: "📝" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☁️" },
      { name: "AWS", licon: "☁️" },
      { name: "VS Code", icon: "💙" },
    ],
    programminglanguages : [
      { name: "C/C++", icon: "📝" },
      { name: "JavaScript", icon: "🐳" },
      { name: "Java", icon: "☁️" },
      { name: "Python", icon: "☁️" },
    ],
  }

  const testimonials = [
    {
      name: "Prof. Sanket Gupta",
      role: "Professor & Academic Head 3rd Year CSE, Medicaps University",
      content:
        "",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      name: "Prof. Shivani Patnah",
      role: "Professor, Medicaps University",
      content:
        "",
      avatar: "👩‍💼",
      rating: 5,
    },
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate projects
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "tools", name: "Tools", icon: Github },
    { id: "programminglanguages", name: "Programming Laguages", icon: Code },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/6 to-cyan-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-orange-400/20 text-4xl font-mono animate-bounce delay-300">
          {"<>"}
        </div>
        <div className="absolute top-40 right-20 text-blue-400/20 text-3xl font-mono animate-bounce delay-700">
          {"{}"}
        </div>
        <div className="absolute bottom-40 left-20 text-green-400/20 text-5xl font-mono animate-bounce delay-1000">
          {"[]"}
        </div>
        <div className="absolute bottom-20 right-40 text-purple-400/20 text-2xl font-mono animate-bounce delay-1500">
          {"()"}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div
            className={
              "text-center transition-all duration-1000 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            {/* Avatar */}
            <div className="relative mb-8">
              <div className="w-58 h-58 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 p-1 bg-gradient-to-r from-orange-500 to-red-500">
                <img
                   src={yuviiImage}
                  alt={userData.name}
                  className="rounded-full bg-neutral-800"
                />
              </div>

              {/* Availability Badge */}
              {/* {userData.availableForHire && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>{userData.availabilityText}</span>
                  </div>
                </div>
              )} */}
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              {userData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              {userData.title}
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">{userData.tagline}</p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400 mb-1">{userData.stats.experience}</div>
                <div className="text-neutral-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-1">{userData.stats.projects}</div>
                <div className="text-neutral-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-1">{userData.stats.clients}</div>
                <div className="text-neutral-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400 mb-1">{userData.stats.coffees}</div>
                <div className="text-neutral-400 text-sm">Cups of Coffee</div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href={'https://mail.google.com/mail/?view=cm&fs=1&to=yuvrajsingh1008jat@gmail.com'}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Get In Touch</span>
              </a>

              <a
                href={userData.resumeUrl}
                download
                className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-300 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Me</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-neutral-300 leading-relaxed">{userData.bio}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-neutral-300">Backend Expert</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Heart className="w-5 h-5 text-orange-400" />
                    <span className="text-neutral-300">Data Structures and Algorithms</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-neutral-300">Problem Solver</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-6">
                  <a
                    href={userData.social.github}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.linkedin}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  {/* <a
                    href={userData.social.twitter}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-sky-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6" />
                  </a> */}
                  <a
                    href={userData.social.website}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-400 ml-4 font-mono text-sm">developer.js</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-purple-400">
                      const <span className="text-blue-400">developer</span> = {"{"}
                    </div>
                    <div className="text-neutral-400 ml-4">
                      name: <span className="text-green-400">'Yuvraj Singh Jat'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      title: <span className="text-green-400">'{userData.title}'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      location: <span className="text-green-400">'{userData.location}'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      available: <span className="text-orange-400">{userData.availableForHire.toString()}</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      skills: [<span className="text-green-400">'Node js'</span>,{" "}
                      <span className="text-green-400">'Express js'</span>,{" "}
                      <span className="text-green-400">'JavaScript'</span>],
                    </div>
                    <div className="text-neutral-400 ml-4">
                      passion: <span className="text-green-400">'Building amazing things'</span>
                    </div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-500 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  className={
                    "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
                    (activeSkillCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
                  }
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills[activeSkillCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    {/* <span className="text-orange-400 font-bold">{skill.level}%</span> */}
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "100%"}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-700 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={userData.social.github}
                className="group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>



        {/* Experience*/}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-700 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                A showcase of my recent internships and work
              </p>
            </div>

            <div className="grid lg:grid-cols-1 gap-8">
              {internships.map((internship, index) => (
                <div
                  key={internship.id}
                  className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {internship.institute}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{internship.institute}</h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed font-bold">{internship.title}</p>
                    <p className="text-neutral-300 mb-4 leading-relaxed"># {internship.description1}</p>
                    <p className="text-neutral-300 mb-4 leading-relaxed"># {internship.description2}</p>
                    <p className="text-neutral-300 mb-4 leading-relaxed"># {internship.description3}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {internship.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={userData.social.github}
                className="group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>View All Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>


        {/* Certification Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-700 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Achieved{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((certification, index) => (
                <div
                  key={certification.id}
                  className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={certification.image || "/placeholder.svg"}
                      alt={certification.title}
                      className="w-full h-100 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{certification.title}</h3>

                    <div className="flex space-x-4">
                      <a
                        href={certification.url}
                        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Badge</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>




        {/* Testimonials Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-900 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My Mentors{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Way</span>
              </h2>
              {/* <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Testimonials from satisfied clients and collaborators
              </p> */}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  {/* <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div> */}
                  {/* <p className="text-neutral-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p> */}
                   <div className="flex items-center space-x-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-neutral-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-1100 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                Open to work.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start a Role?</h3>
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                  I'm currently {userData.availableForHire ? "available" : "not available"} for new roles. Give me oppourtunity to 
                  work together to achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <a
                    href={"https://mail.google.com/mail/?view=cm&fs=1&to=yuvrajsingh1008jat@gmail.com"}
                    className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Mail</span>
                  </a>

                  {/* <a
                    href={userData.phone}
                    className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Schedule Call</span>
                  </a> */}
                </div>

                {/* <div className="flex justify-center items-center space-x-8 text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Flexible Rates</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

