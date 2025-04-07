window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("reviewList");
    const reviews = JSON.parse(localStorage.getItem("productReviews")) || [];
  
    if (reviews.length === 0) {
      container.innerHTML = "<p>No reviews submitted yet.</p>";
      return;
    }
  
    reviews.forEach((review, index) => {
      const reviewCard = document.createElement("div");
      reviewCard.className = "review-card";
  
      reviewCard.innerHTML = `
        <h2>${review.product}</h2>
        <p><strong>Rating:</strong> ${review.rating} ⭐</p>
        <p><strong>Installed On:</strong> ${review.installDate}</p>
        <p><strong>Features:</strong> ${review.features.join(", ") || "None"}</p>
        <p><strong>Review:</strong> ${review.reviewText || "No written feedback."}</p>
        <p><strong>Submitted By:</strong> ${review.userName}</p>
        <p class="timestamp">🕒 Submitted: ${new Date(review.dateSubmitted).toLocaleString()}</p>
      `;
  
      container.appendChild(reviewCard);
    });
  });
  