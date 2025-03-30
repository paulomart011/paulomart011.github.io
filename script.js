document.addEventListener('DOMContentLoaded', () => {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const animateOnScroll = () => {
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize timeline items with initial styles
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    // Run animation immediately and on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Animate skill bars
    const animateSkillBars = () => {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        skillLevels.forEach(level => {
            const targetWidth = level.style.width;
            // Reset width to 0 initially
            level.style.width = '0';
            
            // Set timeout to allow CSS transition to work properly
            setTimeout(() => {
                level.style.width = targetWidth;
            }, 300);
        });
    };
    
    // Initialize and run skill bars animation
    animateSkillBars();
    
    // Add smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effect for contact info items
    const contactItems = document.querySelectorAll('.contact-info li');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(8px)';
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = '#fff';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
                icon.style.color = '';
            }
        });
        
        // Add transition for smooth animation
        item.style.transition = 'transform 0.3s ease';
        const icon = item.querySelector('i');
        if (icon) {
            icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
        }
    });
    
    // Add interactive effects for timeline items
    document.querySelectorAll('.timeline-content').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const h3 = item.querySelector('h3');
            if (h3) {
                h3.style.transform = 'translateX(8px)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const h3 = item.querySelector('h3');
            if (h3) {
                h3.style.transform = 'translateX(0)';
            }
        });
        
        // Add transition for h3 elements
        const h3 = item.querySelector('h3');
        if (h3) {
            h3.style.transition = 'transform 0.3s ease';
        }
    });

    // Add a typing animation for the header
    const animateTyping = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    };

    // Get the header elements
    const headerTitle = document.querySelector('h1');
    const subtitle = document.querySelector('.subtitle');
    
    // Store original text
    const originalTitle = headerTitle.textContent;
    const originalSubtitle = subtitle.textContent;
    
    // Apply typing animation with delay for subtitle
    setTimeout(() => {
        animateTyping(headerTitle, originalTitle, 80);
        
        setTimeout(() => {
            animateTyping(subtitle, originalSubtitle, 80);
        }, originalTitle.length * 80 + 200);
    }, 300);
    
    // Parallax effect for profile picture
    const profilePicture = document.querySelector('.profile-picture');
    if (profilePicture) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 10;
            const yPos = (clientY / window.innerHeight - 0.5) * 10;
            
            profilePicture.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    }
    
    // Add floating animation to profile picture
    const addFloatingAnimation = () => {
        if (profilePicture) {
            profilePicture.style.animation = 'float 4s ease-in-out infinite';
        }
    };
    
    // Disable parallax and enable floating on smaller screens
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    if (mediaQuery.matches) {
        window.removeEventListener('mousemove', () => {});
        addFloatingAnimation();
    }
    
    // Adjust on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 900) {
            window.removeEventListener('mousemove', () => {});
            addFloatingAnimation();
        }
    });
}); 