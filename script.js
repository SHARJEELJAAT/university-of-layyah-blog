
// University of Layyah Blog - JavaScript

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Blog popup elements
const modal = document.getElementById("blogModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription =
    document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

// Open popup when Read More is clicked
document.querySelectorAll(".read-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent =
            button.dataset.description;

        modal.hidden = false;
        closeModal.focus();
    });
});

// Close popup
closeModal.addEventListener("click", function () {
    modal.hidden = true;
});

// Close popup when clicking outside the content
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.hidden = true;
    }
});

// Close popup using the Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) {
        modal.hidden = true;
    }
});

// Handle subscription form
const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    message.textContent =
        "Thank you for your interest! Your form has been checked successfully.";

    subscribeForm.reset();
});
