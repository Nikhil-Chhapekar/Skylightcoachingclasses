// Main JavaScript for Skylight Coaching Classes Website

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        console.log('Mobile menu elements found');
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active');
            console.log('Mobile menu toggled');
        });
    } else {
        console.warn('Mobile menu elements not found');
    }

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Current page:', currentPage);

    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
                console.log('Active desktop link:', linkPage);
            } else {
                link.classList.remove('active');
            }
        });
    }

    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
                console.log('Active mobile link:', linkPage);
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to speed up
            const inc = target / speed;

            if (count < target) {
                // Round up and set counter value
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }

    // Check if counters exist on the page
    if (counters.length > 0) {
        // Start the counter animation when the section comes into view
        const statsSection = document.querySelector('.counter').closest('section');

        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(statsSection);
        } else {
            // Fallback if section not found
            animateCounters();
        }
    }

    // Chat Button Functionality
    const chatButton = document.getElementById('chat-button');

    if (chatButton) {
        chatButton.addEventListener('click', function() {
            // Create chat popup if it doesn't exist
            let chatPopup = document.getElementById('chat-popup');

            if (!chatPopup) {
                chatPopup = document.createElement('div');
                chatPopup.id = 'chat-popup';
                chatPopup.className = 'fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl z-10 overflow-hidden transition-all duration-300 transform scale-0 origin-bottom-right';

                // Chat header
                const chatHeader = document.createElement('div');
                chatHeader.className = 'bg-primary text-white p-4 flex justify-between items-center';
                chatHeader.innerHTML = `
                    <h3 class="font-semibold">Chat with Us</h3>
                    <button id="close-chat" class="text-white hover:text-gray-200 focus:outline-none">
                        <i class="fas fa-times"></i>
                    </button>
                `;

                // Chat body
                const chatBody = document.createElement('div');
                chatBody.className = 'p-4 bg-gray-100 h-64 overflow-y-auto';
                chatBody.innerHTML = `
                    <div class="mb-4">
                        <div class="bg-primary text-white p-3 rounded-lg rounded-bl-none inline-block">
                            Hello! How can we help you today?
                        </div>
                    </div>
                `;

                // Chat input
                const chatInput = document.createElement('div');
                chatInput.className = 'p-4 bg-white border-t';
                chatInput.innerHTML = `
                    <div class="flex">
                        <input type="text" placeholder="Type your message..." class="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <button class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg transition duration-300">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                `;

                // Append all elements
                chatPopup.appendChild(chatHeader);
                chatPopup.appendChild(chatBody);
                chatPopup.appendChild(chatInput);

                // Add to body
                document.body.appendChild(chatPopup);

                // Add close button functionality
                document.getElementById('close-chat').addEventListener('click', function() {
                    chatPopup.classList.remove('scale-100');
                    chatPopup.classList.add('scale-0');
                });

                // Show with animation
                setTimeout(() => {
                    chatPopup.classList.remove('scale-0');
                    chatPopup.classList.add('scale-100');
                }, 50);
            } else {
                // Toggle visibility
                if (chatPopup.classList.contains('scale-0')) {
                    chatPopup.classList.remove('scale-0');
                    chatPopup.classList.add('scale-100');
                } else {
                    chatPopup.classList.remove('scale-100');
                    chatPopup.classList.add('scale-0');
                }
            }
        });
    }
});
