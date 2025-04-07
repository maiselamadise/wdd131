// Sample Product Array (already in your code)
const products = [
  { id: "p001", name: "Smartphone X" },
  { id: "p002", name: "Laptop Pro" },
  { id: "p003", name: "Wireless Earbuds" },
  { id: "p004", name: "Smartwatch 2" },
  { id: "p005", name: "Gaming Console" }
];

// Populate product select dropdown
window.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productSelect");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Attach submit handler
  document.getElementById("reviewForm").addEventListener("submit", handleFormSubmit);
});

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault(); // Stop normal form submission

  // Collect form data
  const formData = {
    product: document.getElementById("productSelect").value,
    rating: document.querySelector("input[name='rating']:checked")?.value || '',
    installDate: document.getElementById("installDate").value,
    features: Array.from(document.querySelectorAll("input[name='features[]']:checked")).map(cb => cb.value),
    reviewText: document.getElementById("reviewText").value.trim(),
    userName: document.getElementById("userName").value.trim(),
    dateSubmitted: new Date().toISOString()
  };

  // Get existing reviews or create an empty array
  const reviews = JSON.parse(localStorage.getItem("productReviews")) || [];

  // Add new review
  reviews.push(formData);

  // Save back to localStorage
  localStorage.setItem("productReviews", JSON.stringify(reviews));

  // Optionally show a message
  alert("Thank you! Your review has been saved.");

  // Optionally redirect to another page
  // window.location.href = "review.html";
}
