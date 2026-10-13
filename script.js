
document.addEventListener("DOMContentLoaded", function () {
  // Automatically update the copyright year.
  document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Mobile navigation.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("open");
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");
      });
    });
  }

  // Preselect a service from the Services page.
  const serviceSelect = document.querySelector("#service");

  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get("service");

    if (requestedService) {
      serviceSelect.value = requestedService;
    }
  }

  // Contact form demo.
  const contactForm = document.querySelector("#contactForm");
  const formMessage = document.querySelector("#formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const name = document.querySelector("#name").value.trim();

      formMessage.textContent =
        "Thank you, " + name +
        "! Your form is valid. This demo does not send messages to a server.";

      contactForm.reset();
    });
  }
});
