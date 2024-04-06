//const cc = require("./componentCreator");
//import { createComponent } from "./componentCreator";

function retrieveContentData() {
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

function fillContent(data) {
  const cards = data;
  console.log(cards);

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
  const servicesContainer = document.querySelector(".services-container");
  for (const c of cards) {
    const cardClone = document.importNode(cardComponent, true);
    cardClone.querySelector(".image-card").src = c.fields.imageUrl;
    cardClone.querySelector(".card-title").textContent = c.fields.title;
    cardClone.querySelector(".card-description").textContent = c.fields.description;
    servicesContainer.append(cardClone);
  }
}

function main() {
  //Fillcards
  const contentData = retrieveContentData();

  contentData.then((res) => {
    fillContent(res);
  });
}

main();
