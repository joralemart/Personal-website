function colorMenuItem(path) {
  const homeItem = document.querySelector(".item-home");
  const portfolioItem = document.querySelector(".item-portfolio");
  const servicesItem = document.querySelector(".item-services");
  const contactItem = document.querySelector(".item-contact");

  switch (path) {
    case (path = "/index.html"):
      homeItem.style.backgroundColor = "rgb(187,54,54)";
      break;

    case (path = "/portfolio.html"):
      portfolioItem.style.backgroundColor = "rgb(187,54,54)";
      break;

    case (path = "/services.html"):
      servicesItem.style.backgroundColor = "rgb(187,54,54)";
      break;

    case (path = "/contact.html"):
      contactItem.style.backgroundColor = "rgb(187,54,54)";
      break;

    default:
      homeItem.style.backgroundColor = "rgb(187,54,54)";
  }
}

function openHeaderMobileMenu() {
  const menuButton = document.querySelector("#header-menu-button-mobile");
  menuButton.addEventListener("click", () => {
    menuButton.className.includes("is-active")
      ? menuButton.classList.remove("is-active")
      : menuButton.classList.add("is-active");
  });
}

function main() {
  openHeaderMobileMenu();
  colorMenuItem(document.location.pathname);
}

main();
