// Единственная точка управления мобильной навигацией.
const menuButton = document.querySelector(".nav__toggle");
const menu = document.querySelector("#nav-links");
const primary = document.querySelector("#nav-primary");

if (menuButton && menu && primary) {
  // Ссылки левой части шапки доступны и в мобильном меню.
  const mobileLinks = document.createElement("div");
  mobileLinks.className = "nav__mobile-links";
  primary.querySelectorAll("a").forEach(link => mobileLinks.append(link.cloneNode(true)));
  menu.prepend(mobileLinks);

  function closeMenu() {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Открыть меню");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  document.addEventListener("click", event => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 721px)").matches) closeMenu();
  });
}
