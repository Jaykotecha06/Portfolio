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
    id: "Tender Management Syatem",
    title: "Tender Management Syatem",
    tech: "Django",
    category: "Tender Project",
    description: "Developed a Django-based Tender Management System featuring dynamic tender modules, optimized database operations, and seamless user workflows.",
    fullDescription: "The Tender Management System is a comprehensive platform designed to streamline the creation, management, and tracking of tenders. The project involved building dynamic and reusable modules for customer management, tender items, and document workflows. Through optimized database operations and performance-focused development, the system delivers faster load times, smooth user interactions, and an efficient end-to-end tender handling experience.",
    features: [
      "Advanced performance optimization, reducing page load times and speeding up tender operations",
      "Dynamic tender module system allowing flexible creation of tenders, items, and client-specific requirements",
      "Responsive dashboard and forms, ensuring smooth access across devices",
      "Role-based permissions allowing the admin to assign specific roles to users",
      "Users can access only the modules and actions permitted by their assigned role",
      "Unauthorized actions or access attempts are blocked with permission-denied alerts, ensuring secure and controlled system usage",
     
    ],
    liveUrl: "https://thecrm.pw/home/",
    techStack: ["Python", "Django", "MySQL", "JavaScript", "CSS3", "Bootstrap", "HTML5"],
    images: [
       "images/projects/Tender Management Software/1.png",
      "images/projects/Tender Management Software/2.png",
      "images/projects/Tender Management Software/3.png",
      "images/projects/Tender Management Software/4.png",
      "images/projects/Tender Management Software/5.png"
    ]
  },
  {
    id: "Doctor-Patient Voice Recognition & Transcription System",
    title: "Doctor-Patient Voice Recognition & Transcription System",
    tech: "AI",
    category: "Health Care",
    description: "Developed an AI-powered system to recognize and transcribe doctor and patient voices, accurately identifying speakers and converting conversations into structured text.",
    fullDescription: "The Doctor-Patient Voice Recognition & Transcription System is an AI-powered platform designed to streamline medical consultations. The project involved building dynamic modules for voice upload, speaker identification, and real-time transcription. Using advanced AI models, the system accurately distinguishes between doctor and patient voices, converting conversations into structured text, while providing an intuitive interface and efficient backend management for secure and seamless usage.",
    features: [
      "AI-powered voice recognition to accurately identify doctor and patient speakers",
      "Real-time transcription converting medical conversations into structured text",
      "Dynamic modules for uploading, storing, and managing voice recordings",
      "Intuitive UI/UX design for seamless interaction by doctors and patients",
      "Searchable conversation history with filtering by date, doctor, or patient",
     
    ],
    techStack: ["Python", "AI", "Langchain", "STT", "TTS"],
    images: [
       "images/projects/Doctor-Patient Voice Recognition & Transcription System/1.png",
      "images/projects/Doctor-Patient Voice Recognition & Transcription System/2.png"
    ]
  },
  {
    id: "eBay Product Data Automation",
    title: "eBay Product Data Automation",
    tech: "Data Scrapping",
    category: "Scrapping",
    description: "Automated scraping and structuring of eBay product data, capturing detailed product information and exporting it in structured JSON format for easy analysis and integration.",
    fullDescription: "The eBay Product Data Automation project is a Python-based solution designed to streamline the extraction and structuring of product information from eBay. The system automates the entire workflow, from searching products and collecting links to scraping detailed product attributes such as price, condition, brand, categories, and seller descriptions. The scraped data is stored in structured JSON format, enabling seamless integration with dashboards, analytics tools, or other applications. The project leverages Python, Selenium, and BeautifulSoup to deliver accurate, efficient, and repeatable data automation processes",
    features: [
      "Automated product search and link extraction from eBay",
      "Detailed product data scraping including price, condition, brand, category, and seller description",
      "Structured JSON output for easy integration with analytics tools or dashboards",
      "End-to-end Python automation workflow using Selenium and BeautifulSoup",
      "Scalable architecture to handle large datasets efficiently",
      "Optimized performance for faster scraping and minimal resource usage",
      
    ],
    techStack: ["Python", "Selenium", "BeautifulSoup", "JSON", "MediaRecRequestsorder"],
    images: [
        "images/projects/eBay Product Data Automation/1.png",
      "images/projects/eBay Product Data Automation/2.png"    ]
  },
  {
    id: "SEO Rank Tracker",
    title: "SEO Rank Tracker",
    tech: "Python",
    category: "SEO Department",
    description: "Automates keyword ranking checks with country-based search results and Excel upload support for SEO teams.",
    fullDescription: "The SEO Rank Tracker is an advanced automation system designed specifically for SEO teams to streamline daily keyword ranking analysis. The platform provides powerful keyword monitoring capabilities with features like Excel-based keyword uploads, country-specific ranking checks, and automated Google search scraping using undetected-chromedriver. The system delivers accurate ranking positions for target URLs, helping SEO professionals save time, improve workflow efficiency, and gain deeper insights into keyword performance across different regions.",
    features: [
      "Automated keyword ranking checks with accurate position tracking",
      "Excel sheet upload for bulk keyword and URL management",
      "Country-specific ranking system with dynamic region-based search",
      "Real-time Google search scraping using undetected-chromedriver",
      "Detailed ranking reports with export functionality",
      "User-friendly interface for seamless keyword and project management"
    ],
    techStack: ["Python", "Selenium", "Undetected-Chromedriver", "Flask", "Pandas", "BeautifulSoup"],
    images: [
       "images/projects/rmt/1.png",
      "images/projects/rmt/2.png",
      "images/projects/rmt/3.png",
      "images/projects/rmt/4.png"
    ]
  },
  
  {
    id: "Scrapping",
    title: "Justdial data Scrapping",
    tech: "Python",
    category: "Scrapping",
    description: "Scraped business listings from JustDial to collect structured data for analysis and automation.",
    fullDescription: "This project is an advanced JustDial Data Scraping and business information extraction system designed to collect accurate and structured data from JustDial’s public listings. The platform automates the process of gathering essential business details such as company names, contact numbers, addresses, categories, ratings, and operational information. Built using Python with tools like Requests, BeautifulSoup, and Selenium, the system ensures high-quality data collection while handling pagination, dynamic content, and anti-scraping measures. This solution is ideal for businesses looking to generate leads, analyze market trends, build local business directories, or power CRM systems with clean and reliable data.",
    features: [
      "Automated scraping of business listings from JustDial",
      "Extraction of key details such as name, contact, address, ratings, and categories",
      "Smart handling of dynamic content, pagination, and load delays",
      "Support for category-based and location-based scraping",
      "Customizable scraping filters based on keywords or regions"
    ],
    techStack: ["Python", "Selenium", "BeautifulSoup", "Requests", "Pandas", "Excel"],
    images: [
      "images/projects/Justdial/3.png",
      "images/projects/Justdial/4.png",
      "images/projects/Justdial/5.png",
      "images/projects/Justdial/6.png",
      "images/projects/Justdial/7.png",
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