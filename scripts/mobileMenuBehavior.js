function colorMenuItem(path) {
  //Mobile buttons
  const homeItem = document.querySelector(".item-home");
  const portfolioItem = document.querySelector(".item-portfolio");
  const servicesItem = document.querySelector(".item-services");
  const contactItem = document.querySelector(".item-contact");

  //DesktopButtons
  const homeItemDesktop = document.querySelector("#link-home");
  const portfolioItemDesktop = document.querySelector("#link-portfolio");
  const servicesItemDesktop = document.querySelector("#link-services");
  const contactItemDesktop = document.querySelector("#link-contact");

  switch (path) {
    case (path = "/Personal-website/index.html"):
      homeItem.style.backgroundColor = "rgb(187,54,54)";
      homeItemDesktop.style.backgroundColor = "rgb(187,54,54)";
      break;

    case (path = "/Personal-website/portfolio.html"):
      portfolioItem.style.backgroundColor = "rgb(187,54,54)";
      portfolioItemDesktop.style.backgroundColor = "rgb(187,54,54)";
      break;

    case (path = "/Personal-website/services.html"):
      servicesItem.style.backgroundColor = "rgb(187,54,54)";
      servicesItemDesktop.style.backgroundColor = "rgb(187,54,54)";
      break;

    case (path = "/Personal-website/contact.html"):
      contactItem.style.backgroundColor = "rgb(187,54,54)";
      contactItemDesktop.style.backgroundColor = "rgb(187,54,54)";
      break;

    default:
      homeItem.style.backgroundColor = "rgb(187,54,54)";
      homeItemDesktop.style.backgroundColor = "rgb(187,54,54)";
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
