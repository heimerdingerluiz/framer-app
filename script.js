// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !phone || !message) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Phone validation (simple)
            const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
            if (!phoneRegex.test(phone)) {
                showNotification('Por favor, insira um telefone válido no formato (11) 1234-5678', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            this.reset();
            
            // Log form data (in real app, this would be sent to server)
            console.log('Form Data:', { name, email, phone, message });
        });
    }

    // Buy Now button functionality
    const buyNowBtn = document.querySelector('.buy-now-btn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            showNotification('Redirecionando para a página de compras...', 'info');
            // In real app, this would redirect to purchase page
            setTimeout(() => {
                console.log('Navigate to purchase page');
            }, 1500);
        });
    }

    // Product buttons functionality
    const productBtns = document.querySelectorAll('.product-btn');
    productBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price-value').textContent;
            
            showNotification(`Interesse em: ${productName} - ${productPrice}`, 'info');
            
            // Scroll to contact form
            setTimeout(() => {
                scrollToSection('contato');
                // Pre-fill contact form with product interest
                const messageField = document.querySelector('textarea');
                if (messageField) {
                    messageField.value = `Tenho interesse no produto: ${productName} - ${productPrice}`;
                }
            }, 1000);
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.borderBottom = '1px solid rgba(255, 107, 53, 0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.product-card, .solution-item, .stat, .contact-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Phone number formatting
    const phoneInput = document.querySelector('input[type="tel"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = `(${value}`;
                } else if (value.length <= 7) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
                }
            }
            e.target.value = value;
        });
    }

    // Mobile menu toggle
    initMobileMenu();

    // Parallax effect for hero section
    initParallax();

    // Typing effect for hero title
    initTypingEffect();
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Show notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;

    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #ff6b35 0%, #ff5722 100%)';
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Mobile menu initialization
function initMobileMenu() {
    // Check if mobile menu is needed
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        
        // Create mobile menu button if it doesn't exist
        if (!document.querySelector('.mobile-menu-toggle')) {
            const mobileMenuButton = document.createElement('button');
            mobileMenuButton.className = 'mobile-menu-toggle';
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuButton.style.cssText = `
                display: block;
                background: #ff6b35;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: white;
                padding: 10px 15px;
                border-radius: 6px;
                transition: all 0.3s ease;
            `;
            
            nav.appendChild(mobileMenuButton);
            
            // Toggle mobile menu
            mobileMenuButton.addEventListener('click', function() {
                const isExpanded = navLinks.style.display === 'flex';
                
                if (isExpanded) {
                    navLinks.style.display = 'none';
                    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                } else {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.background = 'rgba(10, 10, 10, 0.98)';
                    navLinks.style.padding = '1rem';
                    navLinks.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
                    navLinks.style.borderBottom = '1px solid rgba(255, 107, 53, 0.3)';
                    mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
                }
            });
        }
    }
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-content');
            if (parallax) {
                const speed = 0.5;
                parallax.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-text h2');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.innerHTML = text.slice(0, index + 1);
                index++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect when page loads
        setTimeout(typeWriter, 500);
    }
}

// Re-initialize mobile menu on window resize
window.addEventListener('resize', function() {
    initMobileMenu();
});

// Utility functions
const utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Get random color for dynamic effects
    getRandomColor: function() {
        const colors = ['#ff6b35', '#ff5722', '#f4511e', '#e64a19', '#d84315'];
        return colors[Math.floor(Math.random() * colors.length)];
    },

    // Format currency
    formatCurrency: function(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
};

// Performance optimization with debounced scroll
const debouncedScroll = utils.debounce(function() {
    // Add any scroll-based performance optimizations here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { utils, showNotification, scrollToSection };
}
