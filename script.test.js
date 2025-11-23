/**
 * @jest-environment jsdom
 */
const { init, showModal, closeModal, saveOpenedDay, getOpenedDays } = require('./script');

// Mock the data file
const calendarData = [{
    day: 1,
    dateLabel: "Nov 23",
    category: 'Stress',
    title: "Test Title",
    content: "Test Content",
    image: "test.png"
}];

describe('Holiday Calendar App', () => {

    beforeEach(() => {
        // Set up a mock DOM for each test
        document.body.innerHTML = `
            <main id="app">
                <div id="calendar-grid">
                    <div class="day-card" role="button" tabindex="0" data-day="1">Card 1</div>
                </div>
                <div id="modal-overlay" class="hidden">
                    <div id="modal-content" role="dialog">
                        <button id="close-modal">&times;</button>
                        <div id="modal-image-container"></div>
                        <div id="modal-day"></div>
                        <h2 id="modal-title"></h2>
                        <p id="modal-text"></p>
                    </div>
                </div>
            </main>
        `;

        // Mock localStorage
        localStorage.clear();

        // Initialize the script's DOM variables
        init();
    });

    describe('Modal Functionality', () => {
        test('showModal should make the modal visible and populate content', () => {
            const modalOverlay = document.getElementById('modal-overlay');
            const testData = calendarData[0];

            // Call the function
            showModal(testData);

            // Assertions
            expect(modalOverlay.classList.contains('visible')).toBe(true);
            expect(modalOverlay.getAttribute('aria-hidden')).toBe('false');
            expect(document.getElementById('modal-title').textContent).toBe('Test Title');
            expect(document.getElementById('modal-text').textContent).toBe('Test Content');
            expect(document.getElementById('close-modal')).toBe(document.activeElement);
        });

        test('closeModal should hide the modal and restore focus', () => {
            const modalOverlay = document.getElementById('modal-overlay');
            const card = document.querySelector('[data-day="1"]');
            card.focus(); // Set initial focus

            showModal(calendarData[0]); // Open the modal first
            expect(modalOverlay.classList.contains('visible')).toBe(true);

            // Now close it
            closeModal();

            expect(modalOverlay.classList.contains('visible')).toBe(false);
            expect(modalOverlay.getAttribute('aria-hidden')).toBe('true');
            expect(document.activeElement).toBe(card); // Check if focus is restored
        });
    });

    describe('State Management', () => {
        test('saveOpenedDay should add a day to localStorage', () => {
            saveOpenedDay(1);
            expect(localStorage.getItem('openedDays')).toBe('[1]');
            expect(getOpenedDays()).toEqual([1]);
        });
    });
});