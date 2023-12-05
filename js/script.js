document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".navbar__menu-button");
  const modal = document.querySelector(".navbar__modal");

  menuButton.addEventListener("click", function () {
    modal.classList.toggle("active");
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
});
