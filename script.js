let cardContainer = document.getElementById("cardContainer");
let url = "https://thronesapi.com/api/v2/Characters";
let response = fetch(url);
response
  .then((value) => value.json())
  .then((series) => {
    console.log(series);
    ihtml = "";
    for (item in series) {
      console.log(series[item]);
      ihtml += `
      <div class="card" style="width: 12rem">
      <img src="${series[item].imageUrl}" class="card-img-top" alt="${series[item].firstName}" />
      <div class="card-body">
        <h5 class="card-title">${series[item].fullName}</h5>
        <p class="card-text">
          Family: ${series[item].family}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Title: ${series[item].title}</li>
        <li class="list-group-item">First Name: ${series[item].firstName}</li>
        <li class="list-group-item">Last Name: ${series[item].lastName}</li>
      </ul>
      <div class="card-body">
        <a href="${series[item].imageUrl}" class="card-link">link to the image</a>
      </div>
    </div>
    `;
    }
    cardContainer.innerHTML = ihtml;
  });
