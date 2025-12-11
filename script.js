// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initProjectModals();
    // initContactForm();
    // initSkillAnimations();
    initTypingEffect();
    initFloatingLogos();
    initResumeDownload();
    generateProjectCards();
    generateSkillCards();
});

// Generate project cards from data
function generateProjectCards() {
    if (!window.projectsData) return;
    
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    window.projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project', project.id);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.images[0]}" alt="${project.title}">
                <div class="project-overlay">
                    <i class="fas fa-eye"></i>
                    <span>View Details</span>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 100)}...</p>
                <div class="project-tech">
                    ${project.techStack.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Generate skill cards from data
function generateSkillCards() {
    if (!window.skillsData) return;
    
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    window.skillsData.forEach(category => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.setAttribute('data-category', category.id);
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <i class="${category.icon}"></i>
                <h3>${category.title}</h3>
            </div>
            <ul class="skill-list">
                ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        }
    });

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Stagger animations for cards
    document.querySelectorAll('.skill-card, .project-card, .education-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Project modal functionality
function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');

    // Use event delegation for dynamically generated project cards
    document.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            const projectId = projectCard.getAttribute('data-project');
            const project = window.getProjectById ? window.getProjectById(projectId) : null;
            
            if (project) {
                populateModal(project);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Add animation
                modal.querySelector('.modal-content').style.transform = 'scale(0.7)';
                modal.querySelector('.modal-content').style.opacity = '0';
                
                setTimeout(() => {
                    modal.querySelector('.modal-content').style.transform = 'scale(1)';
                    modal.querySelector('.modal-content').style.opacity = '1';
                }, 10);
            }
        }
    });

    // Close modal
    function closeModal() {
        modal.querySelector('.modal-content').style.transform = 'scale(0.7)';
        modal.querySelector('.modal-content').style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}


document.getElementById('modal-live-link').addEventListener('click', e => {
    e.preventDefault(); // stop default
    console.log('its click');

    const url = e.currentTarget.href;
    window.open(url, '_blank'); // open in new tab
});


// Populate modal with project data
function populateModal(project) {
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.fullDescription;
    document.getElementById('modal-live-link').href = project.liveUrl;
    
    // Main image
    const mainImage = document.getElementById('modal-main-image');
    mainImage.src = project.images[0];
    mainImage.alt = project.title;
    
    // Thumbnail gallery
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${project.title} ${index + 1}">`;
        
        thumbnail.addEventListener('click', () => {
            // Update main image
            mainImage.src = image;
            
            // Update active thumbnail
            document.querySelectorAll('.gallery-thumbnail').forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Tech stack
    const techStackContainer = document.getElementById('modal-tech');
    techStackContainer.innerHTML = '';
    project.techStack.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        techStackContainer.appendChild(techTag);
    });
    
    // Features
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresContainer.appendChild(li);
    });
    
    // Challenges (using features as dummy challenges)
    const challengesContainer = document.getElementById('modal-challenges');
    challengesContainer.innerHTML = '';
    const challenges = [
        'Implementing complex business logic',
        'Optimizing database performance',
        'Creating intuitive user interface',
        'Integrating third-party services'
    ];
    // challenges.forEach(challenge => {
    //     const li = document.createElement('li');
    //     li.textContent = challenge;
    //     challengesContainer.appendChild(li);
    // });
    
    // Team info
    document.getElementById('modal-team').textContent = project.category.includes('CRM') || project.category.includes('Extension') || project.category.includes('Healthcare') ? 'Solo Project' : 'Individual Project';
}

// Contact form functionality
// function initContactForm() {
//     const contactForm = document.querySelector('.contact-form');
    
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const formData = new FormData(contactForm);
//         const name = formData.get('name');
//         const email = formData.get('email');
//         const message = formData.get('message');
        
//         // Validate form
//         if (!name || !email || !message) {
//             showNotification('Please fill in all fields', 'error');
//             return;
//         }
        
//         if (!isValidEmail(email)) {
//             showNotification('Please enter a valid email address', 'error');
//             return;
//         }
        
//         // Simulate form submission
//         showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
//         contactForm.reset();
//     });
// }

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #00d4aa, #4dabf7)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Skill card animations
function initSkillAnimations() {
    // Use event delegation for dynamically generated skill cards
    document.addEventListener('mouseenter', (e) => {
        if (e.target.closest('.skill-card')) {
            const card = e.target.closest('.skill-card');
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    }, true);
    
    document.addEventListener('mouseleave', (e) => {
        if (e.target.closest('.skill-card')) {
            const card = e.target.closest('.skill-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    }, true);
}

// Typing effect for hero section
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const text = 'Python Developer';
    let index = 0;
    
    // Clear existing text
    heroSubtitle.textContent = '';
    
    function typeText() {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    
    // Start typing effect after page loads
    setTimeout(typeText, 1000);
}

// Floating logos functionality
function initFloatingLogos() {
    const floatingTech = document.getElementById('floating-tech');
    if (!floatingTech) return;
    
    const logos = floatingTech.querySelectorAll('.tech-logo');
    
    // Animate logos on load
    logos.forEach((logo, index) => {
        logo.style.transform = 'translateX(100px)';
        logo.style.opacity = '0';
        
        setTimeout(() => {
            logo.style.transition = 'all 0.6s ease';
            logo.style.transform = 'translateX(0)';
            logo.style.opacity = '0.7';
        }, index * 200);
    });
    
    // Add hover effects and tooltips
    logos.forEach(logo => {
        const tech = logo.getAttribute('data-tech');
        const techNames = {
            'python': 'Python',
            'php': 'PHP',
            'js': 'JavaScript',
            'react': 'React',
            'node': 'Node.js',
            'mysql': 'MySQL',
            'git': 'Git',
            'api': 'REST API'
        };
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tech-tooltip';
        tooltip.textContent = techNames[tech] || tech;
        tooltip.style.cssText = `
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            background: var(--bg-card);
            color: var(--text-primary);
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            border: 1px solid #333;
            z-index: 1000;
        `;
        
        logo.style.position = 'relative';
        logo.appendChild(tooltip);
        
        logo.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
        });
        
        logo.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
    
    // Scroll-based animation
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        logos.forEach((logo, index) => {
            const speed = 0.5 + index * 0.1;
            logo.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
        });
    });
}



function initResumeDownload() {
    const downloadBtn = document.getElementById('download-resume');
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Path to your PDF (keep it in public folder or accessible URL)
        const pdfUrl = 'Jay_ Kotecha_ Python_ Resume .pdf'; 

        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'Jay_ Kotecha_ Python_ Resume .pdf'; // force download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        showNotification('Resume downloaded successfully!', 'success');
    });
}


// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter.parentElement);
    });
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', animateCounters);

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', initParallaxEffect);