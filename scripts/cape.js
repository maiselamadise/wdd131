// Calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return 'N/A'; // If conditions for wind chill aren't met
    }
}

// Update wind chill and other dynamic data on page load
window.onload = function() {
    const temperature = 5; // Example temperature in Celsius
    const windSpeed = 15; // Example wind speed in km/h

    // Get the wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display wind chill in the weather section
    document.getElementById("wind-chill").textContent = windChill !== 'N/A' ? windChill.toFixed(2) + '°C' : windChill;

    // Set current year and last modified date
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("last-modified").textContent = lastModified;
};
