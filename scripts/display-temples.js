// displayTemples.js
window.addEventListener('DOMContentLoaded', () => {
    const templeGallery = document.getElementById('temple-gallery');
  
    temples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');
  
      templeCard.innerHTML = `
        <figure>
          <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
          <figcaption>
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
          </figcaption>
        </figure>
      `;
  
      templeGallery.appendChild(templeCard);
    });
  });
  