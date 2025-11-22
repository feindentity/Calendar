document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('calendar-grid');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');

    // Modal elements
    const modalDay = document.getElementById('modal-day');
    const modalCategory = document.getElementById('modal-category'); // Note: This might not exist in HTML, need to check or create dynamically if needed. 
    // Actually, in the new design, category is part of the modal text or title, or we can add it. 
    // Let's check index.html. It has <div id="modal-day"></div>, <h2 id="modal-title"></h2>, <p id="modal-text">.
    // I will append category to modal-day or just use it in the aria-label.

    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalImageContainer = document.getElementById('modal-image-container');

    // Load opened state from localStorage
    let openedDays = JSON.parse(localStorage.getItem('openedDays')) || [];

    // Variable to store the last focused element before opening the modal
    let lastFocusedElement = null;

    // Render Grid
    if (typeof calendarData !== 'undefined') {
        calendarData.forEach((data) => {
            const card = document.createElement('div');
            card.classList.add('day-card');
            card.dataset.day = data.day;

            if (openedDays.includes(data.day)) {
                card.classList.add('opened');
                card.setAttribute('aria-expanded', 'true');
                card.setAttribute('aria-label', `December ${data.day}, opened: ${data.category}`);
            } else {
                card.setAttribute('aria-expanded', 'false');
                card.setAttribute('aria-label', `December ${data.day}, ${data.dateLabel}, wrapped`);
            }

            // Date Label (e.g. "Nov 23")
            const dateSpan = document.createElement('span');
            dateSpan.classList.add('card-date');
            dateSpan.textContent = data.dateLabel;

            // Category Label (e.g. "Stress")
            const categorySpan = document.createElement('span');
            categorySpan.classList.add('card-category');
            categorySpan.textContent = data.category;

            // Day Number (e.g. "Day 1")
            const daySpan = document.createElement('span');
            daySpan.classList.add('card-day');
            daySpan.textContent = `Day ${data.day}`;

            card.appendChild(dateSpan);
            card.appendChild(categorySpan);
            card.appendChild(daySpan);

            // Accessibility: Make card focusable and interactive
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');

            // Mouse Click
            card.addEventListener('click', () => openDay(data, card));

            // Keyboard Interaction (Enter or Space)
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openDay(data, card);
                }
            });

            grid.appendChild(card);
        });
    } else {
        console.error('calendarData is not defined. Make sure data.js is loaded.');
    }

    function openDay(data, cardElement) {
        // If already opened, just show modal
        if (openedDays.includes(data.day)) {
            showModal(data);
            return;
        }

        // Mark as opened
        openedDays.push(data.day);
        localStorage.setItem('openedDays', JSON.stringify(openedDays));

        // Visual update
        cardElement.classList.add('opened');
        cardElement.setAttribute('aria-expanded', 'true');
        cardElement.setAttribute('aria-label', `December ${data.day}, opened: ${data.category}`);

        // Play unwrap animation (if any) then show modal
        setTimeout(() => {
            showModal(data);
        }, 300);
    }

    function showModal(data) {
        lastFocusedElement = document.activeElement; // Save focus

        modalDay.textContent = `Day ${data.day} - ${data.dateLabel}`;
        modalTitle.textContent = data.title;
        modalText.textContent = data.content;

        // Clear previous image
        modalImageContainer.innerHTML = '';
        if (data.image) {
            const img = document.createElement('img');
            img.src = data.image;
            img.alt = `${data.category} illustration`;
            img.onerror = () => { img.style.display = 'none'; }; // Hide if missing
            modalImageContainer.appendChild(img);
        }

        modalOverlay.classList.remove('hidden'); // Ensure it's not hidden
        // Force reflow for transition
        void modalOverlay.offsetWidth;
        modalOverlay.classList.add('visible');
        modalOverlay.setAttribute('aria-hidden', 'false');

        // Trap Focus: Focus on the close button when modal opens
        closeModalBtn.focus();

        // Prevent scrolling on body
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('visible');
        modalOverlay.setAttribute('aria-hidden', 'true');

        // Restore scrolling
        document.body.style.overflow = '';

        // Restore focus to the element that opened the modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }

        setTimeout(() => {
            modalOverlay.classList.add('hidden');
        }, 300); // Match CSS transition duration
    }

    closeModalBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key and trap focus
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('visible')) {
            closeModal();
        }

        // Trap focus inside modal
        if (modalOverlay.classList.contains('visible') && e.key === 'Tab') {
            const focusableModalElements = modalContent.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableModalElements[0];
            const lastElement = focusableModalElements[focusableModalElements.length - 1];

            if (e.shiftKey) { /* shift + tab */
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else { /* tab */
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
});
