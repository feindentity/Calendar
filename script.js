// DOM Elements (initialized in init)
let grid, modalOverlay, modalContent, closeModalBtn, modalDay, modalTitle, modalText, modalImageContainer;

// State
let openedDays = [];
let lastFocusedElement = null;

/**
 * Initializes the application, gets DOM elements, and sets up event listeners.
 */
function init() {
    // Query DOM elements
    grid = document.getElementById('calendar-grid');
    modalOverlay = document.getElementById('modal-overlay');
    modalContent = document.getElementById('modal-content');
    closeModalBtn = document.getElementById('close-modal');
    modalDay = document.getElementById('modal-day');
    modalTitle = document.getElementById('modal-title');
    modalText = document.getElementById('modal-text');
    modalImageContainer = document.getElementById('modal-image-container');

    // Load opened state from localStorage
    openedDays = getOpenedDays();

    // Render grid and set up listeners
    renderGrid();
    setupEventListeners();

    // Reset Button
    const resetBtn = document.getElementById('reset-calendar');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetCalendar);
    }
}

/**
 * Renders the calendar grid based on calendarData.
 */
function renderGrid() {
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
}

function setupEventListeners() {
    closeModalBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('visible')) {
            closeModal();
        }
        if (e.key === 'Tab') {
            trapFocus(e);
        }
    });
}

function getOpenedDays() {
    return JSON.parse(localStorage.getItem('openedDays')) || [];
}

function saveOpenedDay(day) {
    if (!openedDays.includes(day)) {
        openedDays.push(day);
        localStorage.setItem('openedDays', JSON.stringify(openedDays));
    }
}

function openDay(data, cardElement) {
    const wasAlreadyOpened = openedDays.includes(data.day);

    if (!wasAlreadyOpened) {
        saveOpenedDay(data.day);
        cardElement.classList.add('opened');
        cardElement.setAttribute('aria-expanded', 'true');
        cardElement.setAttribute('aria-label', `December ${data.day}, opened: ${data.category}`);
    }

    // In a test environment, we don't want to wait for animations
    const delay = typeof process !== 'undefined' ? 0 : (wasAlreadyOpened ? 0 : 300);
    setTimeout(() => showModal(data), delay);
}

function showModal(data) {
    lastFocusedElement = document.activeElement;

    document.getElementById('modal-day').textContent = `Day ${data.day} - ${data.dateLabel}`;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-text').textContent = data.content;

    const imageContainer = document.getElementById('modal-image-container');
    imageContainer.innerHTML = '';
    if (data.image) {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = `${data.category} illustration`;
        img.onerror = () => { img.style.display = 'none'; };
        imageContainer.appendChild(img);
    }

    modalOverlay.classList.remove('hidden');
    void modalOverlay.offsetWidth;
    modalOverlay.classList.add('visible');
    modalOverlay.setAttribute('aria-hidden', 'false');

    closeModalBtn.focus();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('visible');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

    // In a test environment, we don't want to wait for animations
    const delay = typeof process !== 'undefined' ? 0 : 300;
    setTimeout(() => modalOverlay.classList.add('hidden'), delay);
}

function resetCalendar() {
    if (confirm('Are you sure you want to reset the calendar? This will close all opened days.')) {
        localStorage.removeItem('openedDays');
        openedDays = [];
        location.reload();
    }
}

function trapFocus(e) {
    if (modalOverlay.classList.contains('visible')) {
        const focusableModalElements = modalContent.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableModalElements[0];
        const lastElement = focusableModalElements[focusableModalElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }
}

// Main execution
if (typeof process === 'undefined') { // Ensures this only runs in the browser
    document.addEventListener('DOMContentLoaded', init);
}

// Export functions for testing

if (typeof module !== 'undefined' && module.exports) {

    module.exports = {

        init,

        renderGrid,

        openDay,

        showModal,

        closeModal,

        getOpenedDays,

        saveOpenedDay,

        trapFocus,

        resetCalendar

    };

}
