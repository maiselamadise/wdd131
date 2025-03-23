// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + "°F";
    } else {
        return "N/A";
    }
}

// Set the current year and last modified date in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Display windchill in the weather section when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const temperature = 41; // Temperature in °F
    const windSpeed = 10;   // Wind speed in mph
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = "Wind Chill: " + windChill;
});
