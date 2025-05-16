import React from 'react';
import './App.css';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import delivery from './assets/delivery.png';
import profile from './assets/profile.png';



function App() {
  // Add Firestore contact form handler
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      timestamp: new Date()
    };
    try {
      await addDoc(collection(db, "contacts"), data);
      alert("Message sent!");
      form.reset();
    } catch (error) {
      alert("Error sending message.");
    }
  };

  // Single project data
  const project = {
    title: "my Projects",
    image: delivery, // Replace with your screenshot or logo URL
    description: "A delivery app for ordering gas cylinders with live tracking, real-time driver updates, and a full admin management system.",
    tech: ["React", "Firebase", "CSS"], // List your tech stack
    demo: "", // Add your live demo link if you have one
    github: "https://github.com/marwan-sadiq/gas-clynder-delivery-app"
  };

  return (
    <div className="App">
      <section className="profile-section">
      <img className="profile-img" src={profile} alt="Profile" />
        <div className="profile-intro">
          <p className="profile-hello">Hello, I'm Marwan</p>
          <h1 className="profile-title">FULL STACK<br />DEVELOPER</h1>
          <p className="profile-desc">I develop web and mobile applications.</p>
          <div className="profile-languages" style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          
          </div>
          <a href="#projects" className="profile-btn">View Projects</a>
        </div>
      </section>

      <div className="main-desktop-columns">
        <section className="card about-card">
          <h2>About Me</h2>
          <p>Hi, I'm a freelance software developer with a passion for building useful, fast, and modern applications. I specialize in full-stack development using React, React Native, and Django, and I enjoy solving real-world problems through technology.</p>
          <p>Over the past year, I've focused on developing practical tools for businesses, including early-stage platforms and internal systems for hospitals. I combine strong technical skills with a fast learning mindset and an eye for clean UI/UX.</p>
          <p>Right now, I'm open to freelance projects, collaborations, or contract work. Whether you're looking to build something from scratch or improve what you already have — let's talk.</p>
          <div style={{ marginTop: '16px' }}>
            {/* Skills list removed as it's already present in the Skills section */}
          </div>
        </section>

        <section className="card skills-card">
          <h2>Skills</h2>
          <div className="skills-list">
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">React Native</span>
            <span className="skill-pill">Firebase</span>
            <span className="skill-pill">Python/ django</span>
            <span className="skill-pill">Figma</span>
            <span className="skill-pill">SQL, REST APIs</span>
          </div>
          <h2 className="skills-header" style={{ marginTop: '24px', marginBottom: '8px' }}>Languages</h2>
          <div className="skills-list">
            <span className="skill-pill">English</span>
            <span className="skill-pill">Türkçe</span>
            <span className="skill-pill">Kurdî</span>
            <span className="skill-pill">العربية</span>
          </div>
        </section>
      </div>

      <div className="main-projects-contact-columns">
        <section className="card projects-card" id="projects">
          <h2>Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="skill-pill">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section className="card contact-card" id="contact">
          <h2>Contact Me</h2>
          <form
            className="contact-form"
            onSubmit={handleContactSubmit}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required />
            <button type="submit">Send Message</button>
          </form>
          <div className="social-row">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/>
              </svg>
            </a>
            <a href="https://t.co/ZVerBVHbCp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/>
              </svg>
            </a>
            <a href="marwan:mervan.sezek@gmail.com" aria-label="Email" className="social-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.36a1 1 0 0 0 1.42 0L20 10.01V20H4z"/>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
