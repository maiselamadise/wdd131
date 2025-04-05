// Define the array of temples
const temples = [
  {
      name: "Durban Temple",
      location: "Durban, South Africa",
      dedicated: "2000-08-25",
      area: "25,000",
      image: "Images/Durban-Temple.png",
      alt: "Durban Temple, showcasing its architecture"
  },
  {
      name: "Johannesburg Temple",
      location: "Johannesburg, South Africa",
      dedicated: "1985-12-15",
      area: "32,000",
      image: "Images/JHB-Temple.jpg",
      alt: "Johannesburg Temple, a beautiful building with spires"
  },
  {
      name: "Lima Peru Temple",
      location: "Lima, Peru",
      dedicated: "1986-01-10",
      area: "40,000",
      image: "Images/lima-peru-temple.jpg",
      alt: "Lima Peru Temple with unique architecture"
  },
  {
      name: "Manti Temple",
      location: "Manti, Utah, USA",
      dedicated: "1888-05-21",
      area: "52,000",
      image: "Images/manti-temple.jpg",
      alt: "Manti Temple with its towering spires and grand entrance"
  },
  {
      name: "Mexico City Temple",
      location: "Mexico City, Mexico",
      dedicated: "1983-12-02",
      area: "44,000",
      image: "Images/mexico-city-temple.jpg",
      alt: "Mexico City Temple with classical architecture and gardens"
  },
  {
      name: "Orem Utah Temple",
      location: "Orem, Utah, USA",
      dedicated: "2020-03-20",
      area: "17,000",
      image: "Images/orem-utah-temple1.jpeg",
      alt: "Orem Utah Temple, a stunning modern design"
  },
  {
      name: "Payson Utah Temple",
      location: "Payson, Utah, USA",
      dedicated: "2015-05-17",
      area: "35,000",
      image: "Images/payson-utah-temple.jpg",
      alt: "Payson Utah Temple with surrounding red rock formations"
  },
  {
      name: "Washington DC Temple",
      location: "Washington DC, USA",
      dedicated: "1975-11-19",
      area: "71,000",
      image: "Images/washington_dc_temple.jpeg",
      alt: "Washington DC Temple in Utah with tall spires and impressive architecture"
  },
  {
      name: "Yigo Guam Temple",
      location: "Yigo, Guam",
      dedicated: "2020-06-01",
      area: "24,000",
      image: "Images/yigo_guam_temple_2.jpg",
      alt: "Yigo Guam Temple with its majestic structure and vibrant gardens"
  }
];

// Function to display the temples when the page is loaded
window.addEventListener('DOMContentLoaded', () => {
  const templeGallery = document.getElementById('temple-gallery');

  temples.forEach(temple => {
    // Create a div for each temple card
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    // Insert the temple details into the temple card
    templeCard.innerHTML = `
      <figure>
        <img src="${temple.image}" alt="${temple.alt}" loading="lazy">
        <figcaption>
          <h3>${temple.name}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
        </figcaption>
      </figure>
    `;

    // Append the temple card to the gallery
    templeGallery.appendChild(templeCard);
  });
});
