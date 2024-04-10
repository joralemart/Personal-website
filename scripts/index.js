function retrieveServicesContent() {
  let request = fetch(
    "https://cdn.contentful.com/spaces/xpwu28k8osyr/environments/master/entries/?access_token=wKA1A45lAAcW-d62dXXlQUwAU2O4j5VEEwqOI2BAu0I"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.items;
    });
  return request;
}

function fillServiceCards(data) {
  const cards = data;

  //Create card
  const cardComponent = document.createElement("div");
  cardComponent.innerHTML = `
  <div class="service-card content">
      <img src="" class="image-card" />
      <h1 class="card-title">asdasdas</h1>
      <p class="card-description">asdasd</p>
    </div>
  `;

  //FillCards
  /*Contentful free plan does not allow to have multiple spaces.
  In that case, every entry is filtered by its title to be shown
  In its respective place.*/
  const servicesContainer = document.querySelector(".services-container");
  for (const c of cards) {
    if (
      c.fields.title.includes("Backend") ||
      c.fields.title.includes("Frontend") ||
      c.fields.title.includes("Diseño personalizado") ||
      c.fields.title.includes("Mantenimiento")
    ) {
      const cardClone = document.importNode(cardComponent, true);
      cardClone.querySelector(".image-card").src = c.fields.imageUrl;
      cardClone.querySelector(".card-title").textContent = c.fields.title;
      cardClone.querySelector(".card-description").textContent = c.fields.description;
      servicesContainer.append(cardClone);
    }
  }
}

function retrieveWelcomeContent() {
  let request = fetch(
    "https://cdn.contentful.com/spaces/xpwu28k8osyr/environments/master/entries/IIiMit59URoOzOO3Sd51K/?access_token=wKA1A45lAAcW-d62dXXlQUwAU2O4j5VEEwqOI2BAu0I"
  ).then((res) => {
    return res.json();
  });
  return request;
}

function fillWelcomeContent(data) {
  document.querySelector(".presentation-title").innerHTML = data.fields.title;
  document.querySelector(".presentation-text").innerHTML = data.fields.description;
}

function retrieveStartContent() {
  let request = fetch(
    "https://cdn.contentful.com/spaces/xpwu28k8osyr/environments/master/entries/7kBPFMkmfJXAreRA1XMEcE/?access_token=wKA1A45lAAcW-d62dXXlQUwAU2O4j5VEEwqOI2BAu0I"
  ).then((res) => {
    return res.json();
  });
  return request;
}

function fillStartContent(data) {
  console.log(data);
  document.getElementById("greet1").innerHTML = data.fields.title;
  document.getElementById("greet2").innerHTML = data.fields.text;
}

function main() {
  //Get start data
  const startContentData = retrieveStartContent();
  //Fill start
  startContentData.then((res) => {
    fillStartContent(res);
  });

  //Get presentation data
  const presentationContentData = retrieveWelcomeContent();
  //Fill presentation
  presentationContentData.then((res) => {
    fillWelcomeContent(res);
  });

  //Get services data
  const servicesContentData = retrieveServicesContent();
  //Fill cards
  servicesContentData.then((res) => {
    fillServiceCards(res);
  });
}

main();
