// Main JavaScript for Skylight Coaching Classes Website

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active');
        });
    }

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
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

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;

                // Toggle active class
                this.classList.toggle('active');

                // Toggle answer visibility
                if (answer.classList.contains('hidden')) {
                    answer.classList.remove('hidden');
                    setTimeout(() => {
                        answer.classList.add('active');
                    }, 10);
                } else {
                    answer.classList.remove('active');
                    setTimeout(() => {
                        answer.classList.add('hidden');
                    }, 300);
                }
            });
        });
    }

    // Course Filtering
    const courseFilters = document.querySelectorAll('.course-filter');
    const courseSections = document.querySelectorAll('.course-section');

    if (courseFilters.length > 0 && courseSections.length > 0) {
        courseFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Remove active class from all filters
                courseFilters.forEach(f => f.classList.remove('active', 'bg-blue-600', 'text-white'));
                courseFilters.forEach(f => f.classList.add('bg-gray-200', 'text-gray-700'));

                // Add active class to clicked filter
                this.classList.add('active', 'bg-blue-600', 'text-white');
                this.classList.remove('bg-gray-200', 'text-gray-700');

                const category = this.getAttribute('data-filter');

                // Show/hide course sections based on filter
                if (category === 'all') {
                    courseSections.forEach(section => {
                        section.classList.remove('hidden');
                    });
                } else {
                    courseSections.forEach(section => {
                        if (section.getAttribute('data-category') === category) {
                            section.classList.remove('hidden');
                        } else {
                            section.classList.add('hidden');
                        }
                    });
                }
            });
        });
    }

    // Testimonial Carousel
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');

    if (testimonialSlider && testimonialPrev && testimonialNext) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        const slideCount = slides.length;

        // Set initial position
        updateSliderPosition();

        // Previous button click
        testimonialPrev.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSliderPosition();
        });

        // Next button click
        testimonialNext.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSliderPosition();
        });

        function updateSliderPosition() {
            testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Auto slide
        setInterval(function() {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSliderPosition();
        }, 5000);
    }

    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    let count = 0;
                    const updateCounter = () => {
                        const increment = target / 100;
                        if (count < target) {
                            count += increment;
                            counter.innerText = Math.ceil(count);
                            setTimeout(updateCounter, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get email input
            const emailInput = this.querySelector('input[type="email"]');

            if (emailInput && emailInput.value) {
                // Here you would typically send the data to a server
                // For demo purposes, we'll just show an alert
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Floating Chat Button
    const chatButton = document.getElementById('chat-button');

    if (chatButton) {
        chatButton.addEventListener('click', function() {
            alert('Chat functionality would be implemented here. This is just a demo.');
        });
    }

    // Video Play Buttons
    const videoPlayButtons = document.querySelectorAll('.video-play-btn');

    if (videoPlayButtons.length > 0) {
        videoPlayButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Video would play here. This is just a demo.');
            });
        });
    }

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Only apply to same-page links
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });

                        // Close mobile menu if open
                        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                            mobileMenu.classList.remove('active');
                        }
                    }
                }
            });
        });
    }
});
