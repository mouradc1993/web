// Simple form submission alert
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been received. We'll get back to you soon.");
    contactForm.reset();
  });
}
