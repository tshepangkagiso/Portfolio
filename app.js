// DOM Elements
const loadingOverlay = document.getElementById('loading-overlay');
const downloadCVBtn = document.getElementById('downloadCV');
const downloadTranscriptBtn = document.getElementById('downloadTranscript');

// Helper function for delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Loading overlay
async function showContent() {
    await delay(1500);
    loadingOverlay.style.opacity = '0';
    await delay(500);
    loadingOverlay.style.display = 'none';
}

// Download CV function
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'resources/Tshepang Mashigo CV.pdf';
    link.download = 'Tshepang Mashigo CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download Transcript function
function downloadTranscript() {
    /*const link = document.createElement('a');
    link.href = 'resources/Tshepang Mashigo Transcript.pdf';
    link.download = 'Tshepang Mashigo Transcript.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/
    window.alert("Academic transcripts are available upon request, due to containing sensitive information and to get the latest results.")
}

// Scroll reveal animations
ScrollReveal().reveal('.hero h1, .hero h2', { delay: 500, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.about-content, .skills-grid, .projects-grid, #contactForm', { delay: 300, distance: '50px', origin: 'bottom' });

// Skill progress animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const target = bar.getAttribute('data-progress');
        bar.style.width = target + '%';
    });
}

// Typewriter effect for hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Parallax effect for hero section
function parallax() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });
}

// Interactive project cards
function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
}

// Highlight active navigation link
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize all functions
window.addEventListener('DOMContentLoaded', () => {
    showContent();
    animateSkills();
    typeWriter(document.querySelector('.hero h1'), 'Tshepang Kagiso Mashigo');
    typeWriter(document.querySelector('.hero h2'), 'Batchelor of Computing Science & Specializing in Software Engineering.', 100);
    parallax();
    setupProjectCards();
    highlightNavLink();
});

// Event listeners
downloadCVBtn.addEventListener('click', downloadCV);
downloadTranscriptBtn.addEventListener('click', downloadTranscript);
