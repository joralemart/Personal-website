function createComponent(name) {
  //Create mobile header
  if (name == "mobileHeader") {
    const mobileHeaderComponent = document.createElement("div");
    mobileHeaderComponent.innerHTML = `
    <header class="header">
      <div class="header-container m-4">
        <div class="logo-container">
          <span class="logo-name" style="color: white;">Alejandro</span>
          <span class="logo-slogan">Software Developer</span>
        </div>

        <div id="header-menu-button-mobile" class="dropdown is-right is-hidden-tablet">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-header-menu">
              <span class="icon is-small">
                <i class="fa-solid fa-bars"></i>
              </span>
            </button>
          </div>

          <div class="dropdown-menu" id="dropdown-header-menu" role="menu">
            <div class="dropdown-content">
              <a href="./index.html" class="dropdown-item item-home"> Inicio </a>
              <hr class="dropdown-divider" />
              <a href="./portfolio.html" class="dropdown-item item-portfolio"> Porfolio </a>
              <hr class="dropdown-divider" />
              <a href="./services.html" class="dropdown-item item-services"> Servicios </a>
              <hr class="dropdown-divider" />
              <a href="./contact.html" class="dropdown-item item-contact"> Contacto </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    `;
    const mobileHeaderClone = document.importNode(mobileHeaderComponent, true);
    document.body.prepend(mobileHeaderClone);
  }

  //Create desktop header
  else if (name == "desktopHeader") {
    const desktopHeaderComponent = document.createElement("div");
    desktopHeaderComponent.className = "header-desktop-container";
    desktopHeaderComponent.innerHTML = `
      <div id="link-home" class="header-desktop-container">
        <a href="/index.html">Inicio</a>
      </div>
      <div id="link-portfolio" class="header-desktop-container">
        <a href="/portfolio.html">Portfolio</a>
      </div>
      <div id="link-services" class="header-desktop-container">
        <a href="/services.html">Servicios</a>
      </div>
      <div id="link-contact" class="header-desktop-container">
        <a href="/contact.html">Contacto</a>
      </div>
  `;
    const desktopHeaderClone = document.importNode(desktopHeaderComponent, true);
    document.querySelector(".header-container").appendChild(desktopHeaderClone);
  }

  //Create form
  else if (name == "form") {
    const formComponent = document.createElement("form");
    formComponent.id = "contact-form";
    formComponent.className = "section-3-container";
    formComponent.innerHTML = `
    <div class="title-container">
    <h1 class="title">Escribime</h1>
  </div>

  <div class="form-container">
    <div class="name-and-email-container">
      <div class="name-container">
        <label class="name-label" for="form-name">Nombre</label>
        <input id="form-name" class="input is-medium" type="text" placeholder="Tu nombre" />
      </div>

      <div class="email-container">
        <label class="email-label" for="form-email">Email</label>
        <input id="form-email" class="input is-medium" type="email" placeholder="tu@mail.com" />
      </div>
    </div>

    <div class="message-and-send-container">
      <label class="menssage-label" for="form-message">Mensaje</label>
      <textarea id="form-message" class="textarea has-fixed-size is-medium" placeholder="Escribe tu mensaje" rows="10"></textarea>
      <button id="form-submit" class="button is-medium has-icons-right">
        Enviar
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </div>
  </div>
  `;
    const formClone = document.importNode(formComponent, true);
    document.querySelector(".section-3").appendChild(formClone);
  }

  //Create footer
  else if (name == "footer") {
    const footerComponent = document.createElement("div");
    footerComponent.className = "footer-container";
    footerComponent.innerHTML = `
      <div class="logo-container">
        <span class="logo-name" style="color: white">Alejandro</span>
        <span class="logo-slogan">Software Developer</span>
      </div>
      <div class="pages-container">
        <a href="/index.html">
          <i class="fa-solid fa-house"></i>
          <span>Inicio</span>
        </a>
        <a href="/services.html">
          <i class="fa-solid fa-wrench"></i>
          <span>Servicios</span>
        </a>
        <a href="/contact.html">
          <i class="fa-solid fa-phone"></i>
          <span>Contacto</span>
        </a>
      </div>

      <div class="social-links">
        <button class="button is-medium">
          <a href="https://github.com/joralemart">
            <i class="fa-brands fa-github"></i>
          </a>
        </button>
        <button class="button is-medium">
          <a href="https://www.linkedin.com/in/joralemart/">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </button>
      </div>

      <div class="footer-last-text">
        <h2>© 2024 - www.joralemart.dev</h2>
      </div>
  `;
    const footerClone = document.importNode(footerComponent, true);
    document.querySelector(".footer-element").appendChild(footerClone);
  }
}

function formHandler() {
  const form = document.getElementById("contact-form");
  const name = document.getElementById("form-name");
  const email = document.getElementById("form-email");
  const submitButton = document.getElementById("form-submit");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Sending form...");
    const message = document.getElementById("form-message");

    //Check if fields aren't empty!
    if (name.value != "" && email.value != "" && message.value != "") {
      submitButton.classList.add("is-loading");
      const request = fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          from: email.innerText,
          to: "j.ale08.am@gmail.com",
          message: `${name.value}: ` + message.value,
        }),
      })
        .then((res) => {
          return res;
        })
        .finally(() => {
          submitButton.classList.remove("is-loading");
          //Remove fields
          name.value = "";
          email.value = "";
          message.value = "";
          setTimeout(() => {
            window.alert("Mensaje enviado!");
          }, 500);
        });

      //Case empty
    } else {
      window.alert("Completa los campos requeridos!");
    }
  });
}

function main() {
  const route = document.location.pathname;

  //Check routes, instantiate components.
  switch (route) {
    case "/":
      createComponent("mobileHeader");
      createComponent("desktopHeader");
      createComponent("form");
      createComponent("footer");
      formHandler();
      break;
    case "/index.html":
      createComponent("mobileHeader");
      createComponent("desktopHeader");
      createComponent("form");
      createComponent("footer");
      formHandler();
      break;
    case "/portfolio.html":
      createComponent("mobileHeader");
      createComponent("desktopHeader");
      createComponent("footer");
      break;
    case "/services.html":
      createComponent("mobileHeader");
      createComponent("desktopHeader");
      createComponent("footer");
      break;
    case "/contact.html":
      createComponent("mobileHeader");
      createComponent("desktopHeader");
      createComponent("form");
      createComponent("footer");
      formHandler();
      break;

    default:
      break;
  }
}

main();
