// ===== SCROLL PROGRESS BAR =====
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    const progressFill = document.getElementById('scrollFill');
    if (progressFill) {
        progressFill.style.width = scrolled + '%';
    }
});

// ===== CUSTOM CURSOR (Desktop only) =====
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.innerWidth > 1024) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        if (cursorDot) {
            cursorDot.style.transform = `translate(${posX - 3}px, ${posY - 3}px)`;
        }
        if (cursorOutline) {
            cursorOutline.style.transform = `translate(${posX - 16}px, ${posY - 16}px)`;
        }
    });
    
    const interactiveElements = document.querySelectorAll('a, button, .btn-primary, .btn-outline, .project-card, .contact-card, .skill-group, .stat-card, .logo-avatar');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorOutline) cursorOutline.style.transform = `scale(1.5)`;
            if (cursorDot) cursorDot.style.transform = `scale(1.5)`;
        });
        el.addEventListener('mouseleave', () => {
            if (cursorOutline) cursorOutline.style.transform = `scale(1)`;
            if (cursorDot) cursorDot.style.transform = `scale(1)`;
        });
    });
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            const navLinks = document.getElementById('navLinks');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ===== ACTIVE NAVIGATION ON SCROLL =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href').substring(1);
        if (href === current) {
            item.classList.add('active');
        }
    });
});

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
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

const fadeElements = document.querySelectorAll('section, .project-card, .skill-group, .edu-card, .contact-card, .timeline-item, .stat-card');
fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.padding = '0.75rem 0';
        navbar.style.backgroundColor = 'rgba(5, 5, 8, 0.98)';
    } else {
        navbar.style.padding = '1.25rem 0';
        navbar.style.backgroundColor = 'rgba(5, 5, 8, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// ===== PARALLAX EFFECT ON HERO =====
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
        }
    });
}

// ===== IMAGE ERROR HANDLING =====
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.height = '100%';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.background = 'linear-gradient(135deg, #1E3A8A20, #5B21B620)';
        placeholder.innerHTML = '<i class="fas fa-code" style="font-size: 48px; color: #3B82F6;"></i>';
        this.parentNode.appendChild(placeholder);
        this.remove();
    });
});

// Profile avatar error fallback
const profileAvatar = document.getElementById('profileAvatar');
if (profileAvatar) {
    profileAvatar.addEventListener('error', function() {
        this.style.display = 'none';
        const parent = this.parentNode;
        parent.style.background = 'var(--gradient-primary)';
        parent.style.display = 'flex';
        parent.style.alignItems = 'center';
        parent.style.justifyContent = 'center';
        parent.innerHTML = '<span style="color: white; font-weight: bold; font-size: 18px;">T</span>';
    });
}

// ===== CONSOLE GREETING =====
console.log('%c Tshepang Kagiso Mashigo | Software Engineer ', 'background: linear-gradient(135deg, #2563EB, #7C3AED); color: #FFFFFF; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 6px;');
console.log('%c 4+ years coding journey • 0 years professional • Ready for internship opportunities', 'color: #60A5FA; font-size: 12px;');

// ===== FIX FOR MOBILE TOUCH =====
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// ===== DYNAMIC YEAR IN FOOTER =====
const yearSpan = document.querySelector('.footer-copyright');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = yearSpan.textContent.replace('2025', currentYear);
}