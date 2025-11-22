document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('calendar-grid');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');

    // Modal elements
    const modalDay = document.getElementById('modal-day');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    // Load opened state from localStorage
    let openedDays = JSON.parse(localStorage.getItem('openedDays')) || [];

    // Render Grid
    calendarData.forEach((data) => {
        const card = document.createElement('div');
        card.classList.add('day-card');
        card.dataset.day = data.day;

        if (openedDays.includes(data.day)) {
            card.classList.add('opened');
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

        card.addEventListener('click', () => openDay(data));

        grid.appendChild(card);
    });

    function openDay(data) {
        // Mark as opened
        if (!openedDays.includes(data.day)) {
            openedDays.push(data.day);
            localStorage.setItem('openedDays', JSON.stringify(openedDays));
            const card = document.querySelector(`.day-card[data-day="${data.day}"]`);
            if (card) card.classList.add('opened');
        }

        // Populate Modal
        modalDay.textContent = `Day ${data.day} - ${data.dateLabel}`;
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalText.textContent = data.content;

        // Image
        const modalImageContainer = document.getElementById('modal-image-container');
        modalImageContainer.innerHTML = '';
        if (data.image) {
            const img = document.createElement('img');
            img.src = data.image;
            img.alt = data.title;
            // Styles handled in CSS now
            img.onerror = () => { img.style.display = 'none'; }; // Hide if missing
            modalImageContainer.appendChild(img);
        }

        // Show Modal with slight delay for effect
        setTimeout(() => {
            modalOverlay.classList.remove('hidden');
            // Force reflow for transition
            void modalOverlay.offsetWidth;
            modalOverlay.classList.add('visible');
        }, 300);
    }

    function closeModal() {
        modalOverlay.classList.remove('visible');
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

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('visible')) {
            closeModal();
        }
    });
});
