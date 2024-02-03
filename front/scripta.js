// script.js

document.addEventListener("DOMContentLoaded", function () {
    generateCalendar();
});

function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    const monthDays = document.createDocumentFragment();

    for (let i = 1; i <= daysInMonth + firstDayIndex; i++) {
        const day = document.createElement("div");
        if (i > firstDayIndex) {
            day.textContent = i - firstDayIndex;
            day.addEventListener("click", () => showEvents(i - firstDayIndex, currentMonth + 1, currentYear));
        }
        monthDays.appendChild(day);
    }

    calendarContainer.innerHTML = "";
    calendarContainer.appendChild(monthDays);
}

function showEvents(day, month, year) {
    // Implement your logic to display events for the selected day, month, and year
    alert(`Events for ${day}/${month}/${year}`);
}

