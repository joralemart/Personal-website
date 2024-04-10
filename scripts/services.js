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
  console.log(data);

  //Create card
  const cardComponent = document.createElement("div");
  cardComponent.innerHTML = `
      <div class="project-card content">
        <img src="./images/logo.png" class="image-card" />
        <h1 class="card-title">asdasdas</h1>
        <p class="card-description">asdasd</p>
      </div>
      `;

  //FillCards
  /*Contentful free plan does not allow to have multiple spaces.
      In that case, every entry is filtered by its title to be shown
      In its respective place.*/
  const servicesContainer = document.querySelector(".projects-container");
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

function main() {
  //Get services data
  const servicesContentData = retrieveServicesContent();
  //Fill cards
  servicesContentData.then((res) => {
    fillServiceCards(res);
  });
}

main();
