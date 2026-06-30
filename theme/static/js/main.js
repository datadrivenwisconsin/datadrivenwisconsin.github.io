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

    // Speaker Modal Functionality
    const speakerModal = document.getElementById('speaker-modal');

    // Populate and open the shared modal from a speaker card element.
    // The card may be on this page (speakers) or come from a fetched speakers
    // document (schedule page) — both have the same .speaker-card-full structure.
    // Read the image via getAttribute so the root-relative /images/... path
    // resolves the same whether the card is live or parsed from fetched HTML.
    function populateSpeakerModal(card) {
        const titleText = card.querySelector('.speaker-title-link').textContent;
        const nameText = card.querySelector('.speaker-name').textContent;
        const roleText = card.querySelector('.speaker-role').textContent;
        const bioHtml = card.querySelector('.speaker-bio').innerHTML;
        const abstractHtml = card.querySelector('.speaker-abstract').innerHTML;
        const imageUrl = card.querySelector('img').getAttribute('src');

        document.getElementById('speaker-modal-title').textContent = titleText;
        document.getElementById('speaker-modal-name').textContent = nameText;
        document.getElementById('speaker-modal-role').textContent = roleText;
        document.getElementById('speaker-modal-bio').innerHTML = bioHtml;
        document.getElementById('speaker-modal-abstract').innerHTML = abstractHtml;
        document.getElementById('speaker-modal-image').src = imageUrl;
        document.getElementById('speaker-modal-image').alt = nameText;

        // Mirror the card's LinkedIn button into the modal (opens in a new tab).
        const cardLinkedin = card.querySelector('.speaker-linkedin');
        const modalLinkedin = document.getElementById('speaker-modal-linkedin');
        if (cardLinkedin) {
            modalLinkedin.href = cardLinkedin.getAttribute('href');
            modalLinkedin.setAttribute('aria-label', cardLinkedin.getAttribute('aria-label') || (nameText + ' on LinkedIn'));
            modalLinkedin.style.display = '';
        } else {
            modalLinkedin.style.display = 'none';
        }

        speakerModal.setAttribute('aria-hidden', 'false');
        speakerModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Always start at the top of the content
        speakerModal.querySelector('.speaker-modal-content').scrollTop = 0;
    }

    // Add click handlers to speaker titles (speakers page)
    document.querySelectorAll('.speaker-title-link').forEach(titleLink => {
        titleLink.addEventListener('click', function() {
            populateSpeakerModal(this.closest('.speaker-card-full'));
        });

        // Allow keyboard trigger (Enter/Space)
        titleLink.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Schedule page: open the speaker modal in place (over the schedule) rather
    // than navigating, so closing it returns to the schedule with no Back press.
    // The links keep their speakers.html#key href as a no-JS / fetch-fail fallback.
    const scheduleSpeakerLinks = document.querySelectorAll('.track-info a[href*="speakers.html#"]');
    if (scheduleSpeakerLinks.length) {
        let speakersDocPromise = null;
        const loadSpeakersDoc = function(url) {
            if (!speakersDocPromise) {
                speakersDocPromise = fetch(url)
                    .then(function(resp) { return resp.ok ? resp.text() : Promise.reject(resp.status); })
                    .then(function(html) { return new DOMParser().parseFromString(html, 'text/html'); });
            }
            return speakersDocPromise;
        };
        scheduleSpeakerLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const hashIndex = href.indexOf('#');
                if (hashIndex === -1) return;
                const key = href.slice(hashIndex + 1);
                const pageUrl = href.slice(0, hashIndex);
                e.preventDefault();
                loadSpeakersDoc(pageUrl).then(function(doc) {
                    const card = doc.querySelector('.speaker-card-full[data-speaker-id="' + key + '"]');
                    if (card) {
                        populateSpeakerModal(card);
                    } else {
                        window.location.href = href; // unknown key: fall back to navigation
                    }
                }).catch(function() {
                    window.location.href = href; // fetch failed: fall back to navigation
                });
            });
        });
    }
    
    // Deep-link: open a specific speaker's modal from the URL hash.
    // e.g. speakers.html#vandenbush — key is the headshot filename stem (data-speaker-id).
    const speakerHash = decodeURIComponent(window.location.hash.slice(1)).trim();
    if (speakerHash) {
        const targetCard = document.querySelector('.speaker-card-full[data-speaker-id="' + speakerHash + '"]');
        if (targetCard) {
            // Center the card behind the modal so closing it lands on that speaker.
            targetCard.scrollIntoView({ block: 'center' });
            targetCard.querySelector('.speaker-title-link').click();
        }
    }

    // Close modal functions
    function closeSpeakerModal() {
        speakerModal.setAttribute('aria-hidden', 'true');
        speakerModal.style.display = 'none';
        document.body.style.overflow = '';
    }
    // Expose for the modal's inline onclick close handlers (X button, overlay).
    window.closeSpeakerModal = closeSpeakerModal;
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && speakerModal.style.display === 'flex') {
            closeSpeakerModal();
        }
    });
    
    // Close modal when clicking outside
    speakerModal.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('speaker-modal-overlay')) {
            closeSpeakerModal();
        }
    });
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

