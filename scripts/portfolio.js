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
  const projectsContainer = document.querySelector(".projects-container");
  for (const c of cards) {
    if (
      c.fields.title.includes("Buscador de productos") ||
      c.fields.title.includes("Web scrapper") ||
      c.fields.title.includes("Trading asistant")
    ) {
      const cardClone = document.importNode(cardComponent, true);
      cardClone.querySelector(".image-card").src = c.fields.url;
      cardClone.querySelector(".card-title").textContent = c.fields.title;
      cardClone.querySelector(".card-description").textContent = c.fields.description;
      projectsContainer.append(cardClone);
    }
  }
}

function main() {
  //Get projects data
  const projectsContentData = retrieveServicesContent();
  //Fill cards
  projectsContentData.then((res) => {
    fillServiceCards(res);
  });
}

main();
