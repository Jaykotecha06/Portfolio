const projects = [
  {
    id: "Shakebot",
    title: "Shakebot",
    tech: "Python",
    category: "Chatbot ",
    description: "Developed a conversational AI chatbot for Shakebug that enables users to query and receive answers related to bugs, analytics, and user sessions. The system uses RAG architecture to retrieve context-specific data and generate accurate answers. By leveraging Azure OpenAI, the chatbot ensures natural, context-aware responses while keeping product data secure and scalable. This chatbot improves customer support, product insights, and bug analysis workflows within the Shakebug platform.",
    fullDescription: "Developed a conversational AI chatbot for Shakebug that enables users to query and receive answers related to bugs, analytics, and user sessions. The system uses RAG architecture to retrieve context-specific data and generate accurate answers. By leveraging Azure OpenAI, the chatbot ensures natural, context-aware responses while keeping product data secure and scalable. This chatbot improves customer support, product insights, and bug analysis workflows within the Shakebug platform.",
    features: [
      "Users can ask natural language questions related to bugs, analytics, and user sessions, and receive precise, relevant answers.",
      "Uses Retrieval-Augmented Generation to fetch context-specific information from internal data sources before generating a response, ensuring high accuracy.",
      "Delivers human-like, conversational responses while maintaining data security and performance.",
      "Provides instant details on reported bugs, severity, status, and resolution steps to streamline debugging workflows.",
      "Reduces manual support effort by providing instant, automated answers to user queries.",
      "Helps teams make data-driven decisions by offering actionable insights through conversational interaction."
    ],
    liveUrl: "https://app.shakebug.com/dashboard/",
    techStack: ["Python", "Flask", "Azure", "OpenAPI", "RAG Architecture"],
    images: [
      "images/projects/shakebot/1.png"
    ]
  },
  {
    id: "Ballysbet Gaming Website Data Scraping",
    title: "Ballysbet Gaming Website Data Scraping",
    tech: "Python, Selenium",
    category: "Data Scrapping",
    description: "We are working on the booking module for the Tamil Nadu Cricket Association, where users can book slots on a calendar. Admins can view these booked slots and update their status.",
    fullDescription: "The Tamil Nadu Cricket Association (TNCA) project is a comprehensive sports management system designed to streamline cricket facility bookings and camp management. The system features a sophisticated calendar-based booking module where users can reserve cricket facilities, while administrators have complete oversight with the ability to manage bookings, update statuses, and coordinate multiple cricket camps simultaneously.",
    features: [
      "Calendar-based slot booking system with real-time availability",
      "Comprehensive admin dashboard for slot management",
      "Automated email notifications for booking confirmations",
      "Advanced camp module with player and official allocation",
      "Multiple session management (net practice, bowling, matches)",
      "Payment integration for booking fees",
      "Mobile-responsive booking interface",
      "Detailed reporting and analytics for facility usage"
    ],
   
    techStack: ["Selenium", "Python", "BeautifulSoup", "Scrapy", "Requests", "pandas"],
    images: [
     "images/projects/Ballysbet_Gaming/1.jpg",
     "images/projects/Ballysbet_Gaming/2.jpg",
      "images/projects/Ballysbet_Gaming/3.jpg",
      "images/projects/Ballysbet_Gaming/4.jpg"
      
    ]
  },
  {
    id: "indiamea",
    title: "Indiamea",
    tech: "Laravel",
    category: "E-commerce",
    description: "Work on speed optimization and create dynamic modules",
    fullDescription: "Indiamea is a comprehensive e-commerce platform focused on Indian products and services. The project involved extensive performance optimization and the development of dynamic, reusable modules to enhance the user experience. Through careful analysis and optimization techniques, we achieved significant improvements in load times and overall site performance.",
    features: [
      "Advanced speed optimization reducing load times by 60%",
      "Dynamic module system for flexible content management",
      "Responsive design optimized for Indian market",
      "SEO-friendly structure with improved search rankings",
      "Integrated payment gateways for Indian consumers",
      "Multi-language support for regional accessibility",
      "Advanced product catalog with filtering and search",
      "Customer review and rating system"
    ],
    liveUrl: "https://www.indiamea.in/",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS3", "Bootstrap"],
    images: [
       "images/projects/indiamea/1.png",
      "images/projects/indiamea/2.png",
      "images/projects/indiamea/3.png",
      "images/projects/indiamea/4.png",
      "images/projects/indiamea/5.png"
    ]
  },
  {
    id: "pccvisa",
    title: "PCCVISA",
    tech: "Laravel",
    category: "Visa Services",
    description: "Integrate design and make all pages dynamic and SEO friendly",
    fullDescription: "PCCVISA is a comprehensive visa consultancy platform designed to streamline the visa application process. The project involved complete design integration, making all pages dynamic and SEO-friendly to improve search rankings and user engagement. The platform provides end-to-end visa services with an intuitive user interface and robust backend management system.",
    features: [
      "Complete design integration with modern UI/UX",
      "Dynamic page generation for improved flexibility",
      "Advanced SEO optimization for better search rankings",
      "Visa application tracking and status updates",
      "Document upload and verification system",
      "Multi-country visa information database",
      "Consultant appointment booking system",
      "Automated email notifications and reminders"
    ],
    liveUrl: "https://pccvisas.com/",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS3"],
    images: [
       "images/projects/pcc/1.png",
      "images/projects/pcc/2.png",
      "images/projects/pcc/3.png",
      "images/projects/pcc/4.png"
    ]
  },
  {
    id: "screen-extension",
    title: "Screen Recording Extension",
    tech: "JavaScript",
    category: "Browser Extension",
    description: "Help to record screen take screenshot, make capture buggy area",
    fullDescription: "The Screen Recording Extension is a powerful Chrome extension that revolutionizes screen recording and bug reporting workflows. Built with vanilla JavaScript, it provides developers and QA teams with comprehensive screen recording capabilities, screenshot functionality, and specialized tools for capturing and documenting software bugs with precise area selection and annotation features.",
    features: [
      "High-quality screen recording with multiple format options",
      "Advanced screenshot capture with annotation tools",
      "Buggy area selection with precision highlighting",
      "One-click recording start/stop functionality",
      "Automatic file naming and organization",
      "Integration with popular bug tracking systems",
      "Keyboard shortcuts for quick access",
      "Lightweight extension with minimal performance impact"
    ],
    liveUrl: "https://chromewebstore.google.com/detail/screen-recorder-with-bug/lffelidegdlllfdjfmfklolcfgaigleb",
    techStack: ["JavaScript", "Chrome Extension API", "HTML5", "CSS3", "MediaRecorder"],
    images: [
        "images/projects/screen-extension/1.jpg",
      "images/projects/screen-extension/2.jpg",
      "images/projects/screen-extension/3.jpg"
    ]
  },
  {
    id: "rmt",
    title: "Reserve My Table",
    tech: "Laravel",
    category: "Restaurant Management",
    description: "Reserve seat for restaurant setup temp blockout etc",
    fullDescription: "Reserve My Table is an innovative restaurant reservation management system built for the Australian market. The platform provides comprehensive table booking capabilities with advanced features like temporary blockouts, real-time availability tracking, and sophisticated restaurant management tools. The system helps restaurant owners optimize their seating arrangements while providing customers with a seamless booking experience.",
    features: [
      "Real-time table reservation system with live availability",
      "Advanced table setup and layout management",
      "Temporary blockout functionality for special events",
      "Customer management with booking history",
      "Restaurant dashboard with analytics and insights",
      "Automated confirmation and reminder emails",
      "Mobile-optimized booking interface",
      "Integration with popular payment gateways"
    ],
    liveUrl: "https://www.reservemytable.com.au/",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Wordpress", "CSS3"],
    images: [
       "images/projects/rmt/1.png",
      "images/projects/rmt/2.png",
      "images/projects/rmt/3.png",
      "images/projects/rmt/4.png"
    ]
  },
  
  {
    id: "softnoesis",
    title: "Softnoesis CRM",
    tech: "CodeIgniter 3",
    category: "CRM System",
    description: "Track employee task so productivity etc",
    fullDescription: "Softnoesis CRM is a sophisticated Customer Relationship Management and employee productivity tracking system designed for modern businesses. The platform provides comprehensive tools for tracking employee tasks, monitoring productivity metrics, managing client relationships, and generating detailed performance reports. Built with CodeIgniter 3, it offers a robust solution for companies looking to optimize their workflow and enhance team productivity.",
    features: [
      "Comprehensive employee task tracking and management",
      "Real-time productivity monitoring and analytics",
      "Advanced project management with milestone tracking",
      "Client relationship management with communication logs",
      "Detailed reporting and performance dashboards",
      "Time tracking with automated timesheet generation",
      "Team collaboration tools and file sharing",
      "Role-based access control and permission management"
    ],
    liveUrl: "https://projects.softnoesis.in/",
    techStack: ["CodeIgniter 3", "PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js"],
    images: [
      "images/projects/crm/1.png",
      "images/projects/crm/2.png",
    ]
  },
     {
    id: "careplus",
    title: "Careplus",
    tech: "WordPress",
    category: "Healthcare",
    description: "A healthcare service website providing home-based medical and caregiving solutions.",
    fullDescription: "Careplus is a professional healthcare service platform designed to make quality medical care accessible at home. The website highlights a wide range of services including nursing care, doctor visits, medical equipment rental, physiotherapy, diagnostic testing, and emergency support. Built on WordPress, Careplus ensures a user-friendly experience with clear navigation, service details, and easy access to contact and booking options. The platform was developed to help patients and families conveniently connect with trained healthcare professionals while maintaining affordability and trust.",
    features: [
      "Home nursing services with ICU-trained staff",
      "Doctor visits at home",
      "Physiotherapy and rehabilitation support",
      "Medical equipment rental and sales",
      "Diagnostic tests with home sample collection",
      "Medicine and surgical supply delivery",
      "Caretaker services for daily living assistance",
      "Emergency ambulance and portable diagnostic facilities"
    ],
    liveUrl: "https://careplus.services/",
    techStack: ["WordPress", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    images: [
      "images/projects/careplus/1.png",
      "images/projects/careplus/2.png"
    ]
  }

];

const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Make available globally
window.projectsData = projects;
window.getProjectById = getProjectById;