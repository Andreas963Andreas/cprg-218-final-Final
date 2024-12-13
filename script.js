// Function to toggle sections based on navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}

// Dynamic Greeting Based on Time
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show home section by default

    const time = new Date().getHours();
    const greeting = document.createElement('p');
    if (time < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (time < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }

    const homeSection = document.getElementById('home');
    homeSection.prepend(greeting);
});
