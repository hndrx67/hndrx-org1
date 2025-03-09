// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Apply staggered animation to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-up');
    
    // Function to apply staggered animation
    function staggeredAnimation(elements, delayIncrement) {
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * delayIncrement}s`;
        });
    }
    
    staggeredAnimation(fadeElements, 0.2);
    staggeredAnimation(slideElements, 0.2);
    
    // Gallery image modal functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const closeModal = document.querySelector('.close-modal');
    
    // If we're on the gallery page
    if (modal) {
        const viewButtons = document.querySelectorAll('.view-btn');
        
        viewButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the parent gallery item
                const galleryItem = this.closest('.gallery-item');
                const img = galleryItem.querySelector('img');
                const title = galleryItem.querySelector('h3').textContent;
                const desc = galleryItem.querySelector('p').textContent;
                
                // Set modal content
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modalTitle.textContent = title;
                modalDesc.textContent = desc;
                
                // Display the modal with animation
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);
            });
        });
        
        // Close modal when clicking the close button
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        });
        
        // Close modal when clicking outside the content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPosition = `center ${scrollPosition * 0.05}px`;
        });
    }
    
    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('/')) {
                return; // Allow normal navigation for different pages
            }
            
            e.preventDefault();
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Interactive header that changes on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'linear-gradient(135deg, #4a90e2, #2a70c2)';
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.background = 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Add hover effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 12px 30px rgba(74, 144, 226, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(74, 144, 226, 0.2)';
        });
    });
});