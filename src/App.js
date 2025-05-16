"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
const firebase_1 = require("./firebase");
const firestore_1 = require("firebase/firestore");
const delivery_png_1 = __importDefault(require("./assets/delivery.png"));
const profile_png_1 = __importDefault(require("./assets/profile.png"));
const App = () => {
    const [isSubmitting, setIsSubmitting] = (0, react_1.useState)(false);
    const [submitStatus, setSubmitStatus] = (0, react_1.useState)({ type: null, message: '' });
    // Add Firestore contact form handler
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });
        const form = e.currentTarget;
        const formData = {
            name: form.elements.namedItem('name').value,
            email: form.elements.namedItem('email').value,
            message: form.elements.namedItem('message').value,
            timestamp: new Date()
        };
        try {
            // Add to Firestore collection
            await (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_1.db, "contacts"), formData);
            // Show success message
            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! I will get back to you soon.'
            });
            // Reset form
            form.reset();
        }
        catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    // Single project data
    const project = {
        title: "mobile delivery app",
        image: delivery_png_1.default, // Replace with your screenshot or logo URL
        description: "A delivery app for ordering gas cylinders with live tracking, real-time driver updates, and a full admin management system.",
        tech: ["React", "Firebase", "CSS"], // List your tech stack
        demo: "", // Add your live demo link if you have one
        github: "https://github.com/marwan-sadiq/gas-clynder-delivery-app"
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsxs)("section", { className: "profile-section", children: [(0, jsx_runtime_1.jsx)("img", { className: "profile-img", src: profile_png_1.default, alt: "Profile" }), (0, jsx_runtime_1.jsxs)("div", { className: "profile-intro", children: [(0, jsx_runtime_1.jsx)("p", { className: "profile-hello", children: "Hello, I'm Marwan" }), (0, jsx_runtime_1.jsxs)("h1", { className: "profile-title", children: ["FULL STACK", (0, jsx_runtime_1.jsx)("br", {}), "DEVELOPER"] }), (0, jsx_runtime_1.jsx)("p", { className: "profile-desc", children: "I develop web and mobile applications." }), (0, jsx_runtime_1.jsx)("div", { className: "profile-languages", style: { marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' } }), (0, jsx_runtime_1.jsx)("a", { href: "#projects", className: "profile-btn", children: "View Projects" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "main-desktop-columns", children: [(0, jsx_runtime_1.jsxs)("section", { className: "card about-card", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-title", children: "About Me" }), (0, jsx_runtime_1.jsx)("p", { className: "section-text", children: "Hi, I'm a freelance software developer with a passion for building useful, fast, and modern applications. I specialize in full-stack development using React, React Native, and Django, and I enjoy solving real-world problems through technology." }), (0, jsx_runtime_1.jsx)("p", { className: "section-text", children: "Over the past year, I've focused on developing practical tools for businesses, including early-stage platforms and internal systems for hospitals. I combine strong technical skills with a fast learning mindset and an eye for clean UI/UX." }), (0, jsx_runtime_1.jsx)("p", { className: "section-text", children: "Right now, I'm open to freelance projects, collaborations, or contract work. Whether you're looking to build something from scratch or improve what you already have \u2014 let's talk." }), (0, jsx_runtime_1.jsx)("div", { style: { marginTop: '16px' } })] }), (0, jsx_runtime_1.jsxs)("section", { className: "card skills-card", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-title", children: "Skills" }), (0, jsx_runtime_1.jsxs)("div", { className: "skills-list", children: [(0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "JavaScript" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "React" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "Node.js" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "React Native" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "Firebase" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "Python/ django" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "Figma" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "SQL, REST APIs" })] }), (0, jsx_runtime_1.jsx)("h2", { className: "skills-header", style: { marginTop: '24px', marginBottom: '8px' }, children: "Languages" }), (0, jsx_runtime_1.jsxs)("div", { className: "skills-list", children: [(0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "English" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "T\u00FCrk\u00E7e" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "Kurd\u00EE" }), (0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "main-projects-contact-columns", children: [(0, jsx_runtime_1.jsxs)("section", { className: "card projects-card", id: "projects", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-title", children: "Projects" }), (0, jsx_runtime_1.jsx)("div", { className: "projects-list", children: (0, jsx_runtime_1.jsxs)("div", { className: "project-item", children: [(0, jsx_runtime_1.jsx)("img", { src: project.image, alt: project.title }), (0, jsx_runtime_1.jsx)("h3", { className: "project-title", children: project.title }), (0, jsx_runtime_1.jsx)("p", { className: "project-desc", children: project.description }), (0, jsx_runtime_1.jsx)("div", { className: "project-tech", children: project.tech.map((t, i) => ((0, jsx_runtime_1.jsx)("span", { className: "skill-pill", children: t }, i))) }), (0, jsx_runtime_1.jsx)("div", { className: "project-links", children: project.demo && ((0, jsx_runtime_1.jsx)("a", { href: project.demo, target: "_blank", rel: "noopener noreferrer", className: "project-link", children: "Live Demo" })) })] }) }), (0, jsx_runtime_1.jsx)("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "github-float-btn", "aria-label": "GitHub", children: "GitHub" })] }), (0, jsx_runtime_1.jsxs)("section", { className: "card contact-card", id: "contact", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-title", children: "Contact Me" }), (0, jsx_runtime_1.jsxs)("form", { className: "contact-form", onSubmit: handleContactSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", placeholder: "Your Name", required: true, className: "form-input", disabled: isSubmitting }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", placeholder: "Your Email", required: true, className: "form-input", disabled: isSubmitting }), (0, jsx_runtime_1.jsx)("textarea", { name: "message", placeholder: "Your Message", rows: 5, required: true, className: "form-textarea", disabled: isSubmitting }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "form-button", disabled: isSubmitting, children: isSubmitting ? 'Sending...' : 'Send Message' }), submitStatus.type && ((0, jsx_runtime_1.jsx)("div", { className: `submit-status ${submitStatus.type}`, children: submitStatus.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "social-row social-row-centered", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://github.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "social-icon", children: (0, jsx_runtime_1.jsx)("svg", { width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" }) }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://t.co/ZVerBVHbCp", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "social-icon", children: (0, jsx_runtime_1.jsx)("svg", { width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" }) }) }), (0, jsx_runtime_1.jsx)("a", { href: "marwan:mervan.sezek@gmail.com", "aria-label": "Email", className: "social-icon", children: (0, jsx_runtime_1.jsx)("svg", { width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.36a1 1 0 0 0 1.42 0L20 10.01V20H4z" }) }) })] })] })] })] }));
};
exports.default = App;
