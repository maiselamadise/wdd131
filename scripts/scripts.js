// Example static values
const temperature = 5; // in Celsius
const windSpeed = 10; // in km/h

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Round to 2 decimal places
    } else {
        return "N/A"; // Return "N/A" if conditions are not met
    }
}

// Display the windchill factor
document.getElementById("windchill").textContent = `Windchill: ${calculateWindChill(temperature, windSpeed)} °C`;

// Display Current Year and Last Modified Date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
