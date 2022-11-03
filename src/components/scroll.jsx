export const menuLinks = document.querySelectorAll(
  '.Buttons-container a[href^="#"]'
);

function ScrollToSection(event) {
  event.preventDefault();
}

menuLinks.forEach((link) => {
  link.addEventListener("click", ScrollToSection);
});

console.log(menuLinks);
