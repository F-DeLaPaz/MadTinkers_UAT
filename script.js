// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Update the "Last Updated" date with today's date
    document.getElementById("update-date").textContent = new Date().toLocaleDateString();
});
