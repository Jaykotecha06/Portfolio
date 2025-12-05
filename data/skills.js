const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: "fas fa-code",
    color: "text-primary",
    skills: [
      "Python",
      "Django & Flask",
      "Web Scraping",
      "Langchain"
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "fas fa-palette",
    color: "text-accent",
    skills: [
      "HTML5, CSS3, JavaScript", 
      "Bootstrap",
      
    ]
  },
  {
    id: "database",
    title: "Database",
    icon: "fas fa-database",
    color: "text-yellow-500",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite", 
      "Pinecone"
    ]
  },
  {
    id: "api",
    title: "API Integration",
    icon: "fas fa-plug",
    color: "text-purple-500",
    skills: [
      "RESTful APIs",
      "OAuth & API Keys",
      "Payment Gateways",
      "Open APIs"
    ]
  },
 
  {
    id: "tools",
    title: "Development Tools",
    icon: "fas fa-tools",
    color: "text-blue-500",
    skills: [
      "Git, GitHub",
      
      "Postman",
      "VS Code & Sublime"
    ]
  },
  {
    id: "cloud",
    title: "Hosting",
    icon: "fas fa-cloud",
    color: "text-green-500",
    skills: [
      "cPanel & hPanel",
      "Nginx",
      "Domain & SSL Management"
    ]
  },
  {
    id: "specialized",
    title: "Specialized",
    icon: "fas fa-rocket",
    color: "text-pink-500",
    skills: [
      "Web Scrapping",
      "Django Project",
      "Chatbot Development"
    ]
  }
];

// Make available globally
window.skillsData = skillCategories;