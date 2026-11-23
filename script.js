document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Interactive feedback form on contacts page
    const contactForm = document.getElementById('kramatorsk-form');
    const successAlert = document.getElementById('form-success');
    if (contactForm && successAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            successAlert.style.display = 'block';
            contactForm.reset();
        });
    }

    // Filter places on landmarks page
    const filterBtns = document.querySelectorAll('[data-filter]');
    const placeCards = document.querySelectorAll('[data-category]');
    if (filterBtns.length && placeCards.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                filterBtns.forEach(b => b.style.opacity = '0.75');
                btn.style.opacity = '1';

                placeCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
