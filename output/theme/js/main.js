/**
 * Data-Driven Wisconsin - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Toggle mobile menu visibility
            if (navLinks) {
                navLinks.classList.toggle('mobile-open');
            }
        });
    }
    
    // Mobile dropdown toggle - expand/collapse on click
    const dropdownParents = document.querySelectorAll('.has-dropdown > a');
    dropdownParents.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only toggle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('dropdown-open');
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.theme-card, .speaker-card, .sponsor-card, .event-card, .team-member').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// Add mobile menu styles dynamically
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    @media (max-width: 768px) {
        .nav-links.mobile-open {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: white;
            padding: 1rem;
            border-top: 1px solid #e2e8f0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }
        
        .nav-links.mobile-open li {
            padding: 0.75rem 0;
            border-bottom: 1px solid #f1f5f9;
        }
        
        .nav-links.mobile-open li:last-child {
            border-bottom: none;
        }
        
        /* Hide dropdowns by default on mobile */
        .nav-links.mobile-open .has-dropdown .dropdown {
            display: none;
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            background: #f8fafc;
            margin-top: 0.5rem;
            padding: 0.5rem 0;
            border-radius: 8px;
        }
        
        /* Show dropdown when parent has dropdown-open class */
        .nav-links.mobile-open .has-dropdown.dropdown-open .dropdown {
            display: block;
        }
        
        
        .nav-links.mobile-open .has-dropdown .dropdown li {
            padding: 0.5rem 1rem;
            border-bottom: none;
        }
        
        .nav-links.mobile-open .has-dropdown .dropdown li a {
            font-size: 0.9rem;
            color: #4a5568;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    }
`;
document.head.appendChild(mobileStyles);

