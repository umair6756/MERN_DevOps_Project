import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, FiCoffee, FiHeart, FiGithub, FiLinkedin, FiTwitter,
  FiMail, FiStar, FiZap, FiCpu, FiServer, FiCloud, 
  FiTerminal, FiChevronRight, FiMenu, FiX
} from 'react-icons/fi';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullText = "console.log('Hello World!');";

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const projects = [
    {
      title: "AI Meme Generator",
      description: "An AI that creates hilarious developer memes based on current tech trends",
      tags: ["AI", "React", "Humor"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Code-to-Music Converter",
      description: "Turns your code into musical compositions based on syntax and structure",
      tags: ["Web Audio API", "JavaScript", "Creative"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Dev Coffee Brew Calculator",
      description: "Calculates the perfect coffee brew based on lines of code written",
      tags: ["Productivity", "React", "Coffee"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const skills = [
    { name: "React", level: 90, icon: <FiZap /> },
    { name: "JavaScript", level: 95, icon: <FiCpu /> },
    { name: "Node.js", level: 85, icon: <FiServer /> },
    { name: "CSS/Design", level: 88, icon: <FiCloud /> },
    { name: "Debugging", level: 92, icon: <FiTerminal /> },
    { name: "Coffee Making", level: 100, icon: <FiCoffee /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-700 opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * 50 - 25],
              rotate: [null, Math.random() * 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {i % 3 === 0 ? "< />" : i % 3 === 1 ? "{}" : "();"}
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 py-4 px-6 flex justify-between items-center bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          {"<DevFun />"}
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, color: "#ec4899" }}
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <div className="hidden md:flex space-x-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium"
          >
            Let's Talk
          </motion.button>
        </div>
        
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-gray-900 p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-2xl font-bold text-pink-400">{"<DevFun />"}</div>
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 text-center">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6">
              {[FiGithub, FiLinkedin, FiTwitter, FiMail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block px-3 py-1 bg-gray-800 rounded-full mb-6 text-sm font-mono border border-pink-500/20"
              >
                <span className="text-pink-400">const</span> developer = <span className="text-purple-400">true</span>;
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Turning <span className="text-pink-400">ideas</span> into
                <br />
                <span className="text-purple-400">digital experiences</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                I design and develop fun, innovative web applications that users love and remember.
                Currently brewing coffee and coding the next big thing.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium shadow-lg flex items-center justify-center"
                >
                  View My Work <FiChevronRight className="ml-2" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800 rounded-lg font-medium border border-gray-700 hover:border-pink-500/30 transition-colors"
                >
                  Brew Coffee Together
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <div className="bg-gray-900 rounded-lg overflow-hidden mb-4">
                  <div className="flex space-x-2 p-3 bg-gray-950">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <div className="text-purple-400">class</div>
                    <div className="text-yellow-400">FunDeveloper</div>
                    <div className="text-purple-400">extends</div>
                    <div className="text-blue-400">Developer</div>
                    <div className="text-gray-700">{`{`}</div>
                    <div className="ml-4">
                      <div className="text-blue-400">constructor</div>
                      <div className="text-gray-700">{`()`}</div>
                      <div className="text-gray-700">{`{`}</div>
                      <div className="ml-4">
                        <div className="text-red-400">this</div>
                        <div className="text-gray-700">.</div>
                        <div className="text-blue-400">skills</div>
                        <div className="text-gray-700">= [</div>
                        <div className="text-cyan-400">"React"</div>
                        <div className="text-gray-700">, </div>
                        <div className="text-cyan-400">"JavaScript"</div>
                        <div className="text-gray-700">, </div>
                        <div className="text-cyan-400">"Fun"</div>
                        <div className="text-gray-700">];</div>
                      </div>
                      <div className="text-gray-700">{`}`}</div>
                    </div>
                    <div className="text-gray-700">{`}`}</div>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm flex items-center">
                  <div className="text-green-400">$ </div>
                  <div className="ml-2">
                    {typedText}
                    <span className={`inline-block w-2 h-4 bg-green-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                  </div>
                </div>
              </div>
              
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  repeatType: "reverse"
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-lg"
              >
                <FiCoffee size={24} />
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-lg shadow-lg"
              >
                <FiStar size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My <span className="text-pink-400">Fun</span> Projects</h2>
            <p className="text-xl text-gray-400">
              I build things that are not only functional but also bring joy and creativity to the digital world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 shadow-xl cursor-pointer`}
                onClick={() => setActiveProject(index)}
              >
                <div className="bg-gray-900 bg-opacity-20 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-100 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 bg-opacity-50 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My <span className="text-purple-400">Superpowers</span></h2>
            <p className="text-xl text-gray-400">
              Skills I've mastered on my coding journey (and my coffee brewing expertise).
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3 text-purple-400">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <div className="ml-auto text-pink-400">{skill.level}%</div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6 md:mb-0"
            >
              {"<DevFun />"}
            </motion.div>
            
            <div className="flex space-x-6">
              {[FiGithub, FiLinkedin, FiTwitter, FiMail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full text-xl"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800"
          >
            <p>Made with <FiHeart className="inline text-pink-500" /> and lots of <FiCoffee className="inline text-yellow-500" /></p>
            <p className="mt-2">© {new Date().getFullYear()} Fun Developer. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;