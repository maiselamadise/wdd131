// Default testimonials
const defaultTestimonials = [
  { name: "Alice M.", feedback: "Quick service and professional team! Highly recommend." },
  { name: "Jason T.", feedback: "Fixed my refrigeration unit fast. Saved my weekend!" },
  { name: "Leah W.", feedback: "Very knowledgeable and friendly technicians." }
];

// Load testimonials
function loadTestimonials() {
  const container = document.getElementById("testimonial-container");
  let testimonials = JSON.parse(localStorage.getItem("testimonials")) || defaultTestimonials;

  if (container) {
    container.innerHTML = testimonials
      .map(t => `<p><strong>${t.name}</strong>: ${t.feedback}</p>`)
      .join("");
    
    // Save to localStorage if not already stored
    if (!localStorage.getItem("testimonials")) {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
  }
}

// Load page from template
function loadPage(pageId) {
  const main = document.getElementById("main-content");
  const template = document.getElementById(`${pageId}-page`);
  if (template && main) {
    main.innerHTML = "";
    main.appendChild(template.content.cloneNode(true));

    if (pageId === "contact") {
      setupContactForm();
    }
  }
}

// Contact form setup
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  if (form && response) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;

      if (name && email && message) {
        localStorage.setItem("contactSubmission", JSON.stringify({ name, email, message }));
        response.textContent = `Thanks for contacting us, ${name}!`;
        form.reset();
      } else {
        response.textContent = "Please fill out all fields.";
      }
    });
  }
}

// Setup navigation
function setupNavigation() {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page === "home") {
        window.location.reload();
      } else {
        loadPage(page);
      }
    });
  });
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  loadTestimonials();
  setupNavigation();
});
