// Product array
const products = [
    { id: "p001", name: "Smartphone X" },
    { id: "p002", name: "Laptop Pro" },
    { id: "p003", name: "Wireless Earbuds" },
    { id: "p004", name: "Smartwatch 2" },
    { id: "p005", name: "Gaming Console" }
  ];
  
  // Populate select field
  window.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productSelect");
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  
  