document.getElementById('toggleDarkMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function calculateStrategy() {
    // Calculation logic remains the same
}

document.getElementById('toggleChart').addEventListener('click', () => {
    const chart = document.getElementById('strategyChart');
    chart.classList.toggle('toggle-section');
});
