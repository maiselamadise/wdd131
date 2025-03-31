// Get the current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill Calculation Function
function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Wind Chill Formula (Celsius version)
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

// Static temperature and wind speed values
const temperature = 5; // Celsius
const windSpeed = 15; // km/h

// Calculate wind chill and update the page
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windchill').textContent = windChill;

// Update the weather icon based on the conditions
const weatherIcon = document.getElementById('weather-icon');
weatherIcon.innerHTML = '⛅';  // Example: Cloudy weather icon
