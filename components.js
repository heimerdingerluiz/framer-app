// Component Library for Framer App
// These components can be easily integrated into Framer

class ComponentLibrary {
    // Button Component
    static createButton(text, options = {}) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = `btn btn-${options.variant || 'primary'}`;
        
        const styles = {
            primary: {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            },
            secondary: {
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            },
            outline: {
                background: 'transparent',
                color: '#667eea',
                border: '2px solid #667eea',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }
        };

        Object.assign(button.style, styles[options.variant || 'primary']);
        
        if (options.onClick) {
            button.addEventListener('click', options.onClick);
        }

        if (options.size) {
            const sizes = {
                small: { padding: '8px 16px', fontSize: '14px' },
                large: { padding: '16px 32px', fontSize: '18px' }
            };
            Object.assign(button.style, sizes[options.size] || {});
        }

        return button;
    }

    // Card Component
    static createCard(title, content, options = {}) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardHTML = `
            <div class="card-header">
                <h3>${title}</h3>
                ${options.subtitle ? `<p class="card-subtitle">${options.subtitle}</p>` : ''}
            </div>
            <div class="card-body">
                ${content}
            </div>
            ${options.footer ? `<div class="card-footer">${options.footer}</div>` : ''}
        `;
        
        card.innerHTML = cardHTML;
        
        const cardStyles = {
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            margin: '16px 0',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        };
        
        Object.assign(card.style, cardStyles);
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });

        return card;
    }

    // Modal Component
    static createModal(title, content, options = {}) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            border-radius: '16px';
            padding: '32px';
            max-width: '500px';
            width: '90%';
            max-height: '80vh';
            overflow-y: 'auto';
            transform: 'scale(0.9)';
            transition: 'transform 0.3s ease';
        `;

        modalContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #333;">${title}</h2>
                <button class="modal-close" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #999;">&times;</button>
            </div>
            <div class="modal-body">${content}</div>
        `;

        modal.appendChild(modalContent);

        // Close functionality
        const closeBtn = modalContent.querySelector('.modal-close');
        const closeModal = () => {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modalContent.style.transform = 'scale(0.9)';
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            }, 300);
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Open modal
        modal.open = () => {
            document.body.appendChild(modal);
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.style.visibility = 'visible';
                modalContent.style.transform = 'scale(1)';
            }, 10);
        };

        return modal;
    }

    // Form Component
    static createForm(fields, options = {}) {
        const form = document.createElement('form');
        form.className = 'form';
        
        fields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            formGroup.style.cssText = 'margin-bottom: 20px;';

            if (field.label) {
                const label = document.createElement('label');
                label.textContent = field.label;
                label.style.cssText = `
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #333;
                `;
                formGroup.appendChild(label);
            }

            let input;
            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.rows = field.rows || 4;
            } else {
                input = document.createElement('input');
                input.type = field.type || 'text';
            }

            input.name = field.name;
            input.placeholder = field.placeholder || '';
            input.required = field.required || false;
            
            input.style.cssText = `
                width: 100%;
                padding: 12px;
                border: 2px solid #e1e5e9;
                border-radius: 8px;
                font-size: 16px;
                transition: border-color 0.3s ease;
                font-family: inherit;
            `;

            input.addEventListener('focus', () => {
                input.style.borderColor = '#667eea';
            });

            input.addEventListener('blur', () => {
                input.style.borderColor = '#e1e5e9';
            });

            formGroup.appendChild(input);
            form.appendChild(formGroup);
        });

        if (options.submitButton) {
            const submitBtn = this.createButton(options.submitButton.text || 'Enviar', {
                variant: options.submitButton.variant || 'primary',
                onClick: (e) => {
                    e.preventDefault();
                    if (options.onSubmit) {
                        const formData = new FormData(form);
                        const data = Object.fromEntries(formData);
                        options.onSubmit(data);
                    }
                }
            });
            submitBtn.type = 'submit';
            form.appendChild(submitBtn);
        }

        return form;
    }

    // Navigation Component
    static createNavigation(items, options = {}) {
        const nav = document.createElement('nav');
        nav.className = 'navigation';
        
        const navStyles = {
            display: 'flex',
            gap: options.gap || '2rem',
            listStyle: 'none',
            padding: 0,
            margin: 0
        };
        
        Object.assign(nav.style, navStyles);

        items.forEach(item => {
            const link = document.createElement('a');
            link.href = item.href || '#';
            link.textContent = item.text;
            link.className = 'nav-link';
            
            const linkStyles = {
                textDecoration: 'none',
                color: item.color || '#333',
                fontWeight: '500',
                padding: '8px 16px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                position: 'relative'
            };
            
            Object.assign(link.style, linkStyles);

            link.addEventListener('mouseenter', () => {
                link.style.background = 'rgba(102, 126, 234, 0.1)';
                link.style.color = '#667eea';
            });

            link.addEventListener('mouseleave', () => {
                link.style.background = 'transparent';
                link.style.color = item.color || '#333';
            });

            if (item.onClick) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    item.onClick();
                });
            }

            nav.appendChild(link);
        });

        return nav;
    }

    // Hero Section Component
    static createHero(title, subtitle, options = {}) {
        const hero = document.createElement('section');
        hero.className = 'hero-section';
        
        const heroStyles = {
            minHeight: options.height || '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: options.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textAlign: 'center',
            padding: '0 20px',
            position: 'relative'
        };
        
        Object.assign(hero.style, heroStyles);

        const heroContent = document.createElement('div');
        heroContent.className = 'hero-content';
        heroContent.style.cssText = `
            max-width: 800px;
            animation: fadeInUp 1s ease;
        `;

        heroContent.innerHTML = `
            <h1 style="font-size: ${options.titleSize || '3.5rem'}; font-weight: 700; margin-bottom: 1rem; line-height: 1.2;">${title}</h1>
            <p style="font-size: ${options.subtitleSize || '1.2rem'}; margin-bottom: 2rem; opacity: 0.9;">${subtitle}</p>
            ${options.ctaButton ? `<div class="hero-cta"></div>` : ''}
        `;

        hero.appendChild(heroContent);

        if (options.ctaButton) {
            const ctaContainer = heroContent.querySelector('.hero-cta');
            const ctaBtn = this.createButton(options.ctaButton.text, {
                variant: options.ctaButton.variant || 'primary',
                onClick: options.ctaButton.onClick
            });
            ctaContainer.appendChild(ctaBtn);
        }

        return hero;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentLibrary;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
