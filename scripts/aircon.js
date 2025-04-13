// Testimonials data
const testimonials = [
  { name: "Alice M.", feedback: "Quick service and professional team! Highly recommend." },
  { name: "Jason T.", feedback: "Fixed my refrigeration unit fast. Saved my weekend!" },
  { name: "Leah W.", feedback: "Very knowledgeable and friendly technicians." }
];

// Load testimonials
function loadTestimonials() {
  const container = document.getElementById("testimonial-container");
  container.innerHTML = testimonials.map(t => `<p><strong>${t.name}</strong>: ${t.feedback}</p>`).join("");
  localStorage.setItem("testimonials", JSON.stringify(testimonials));
}

// Load page from template
function loadPage(templateId) {
  const main = document.querySelector("main");
  const template = document.getElementById(templateId);
  if (template) {
    main.innerHTML = template.innerHTML;
    if (templateId === "contact-page") {
      document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);
    }
  }
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    localStorage.setItem("contactSubmission", JSON.stringify({ name, email, message }));
    document.getElementById("form-response").textContent = `Thanks for contacting us, ${name}!`;
    e.target.reset();
  } else {
    document.getElementById("form-response").textContent = "Please fill out all fields.";
  }
}

// Navigation event listeners
function setupNavigation() {
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href === "services.html") {
        e.preventDefault();
        loadPage("services-page");
      } else if (href === "contact.html") {
        e.preventDefault();
        loadPage("contact-page");
      }
    });
  });
}

// Initialize site
window.addEventListener("DOMContentLoaded", () => {
  loadTestimonials();
  setupNavigation();
});
