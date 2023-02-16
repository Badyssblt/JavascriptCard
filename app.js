// Variable de la description
const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo assumenda beatae animi minima tempora culpa cupiditate aliquid vero amet nemo sit est, harum enim cumque.";
//   Tableau qui stock les objets
let Sneakerslist = [];

// Objet Sneakers
function Sneakers(img, name, description, id, price) {
  (this.img = img),
    (this.name = name),
    (this.description = description),
    (this.id = id),
    (this.price = price);
}

// Objet créer grâce à function Sneakers
const sneakers1 = new Sneakers(
  // Image
  "img.png",
  // Le nom
  "Votre nom",
  // La description
  lorem,
  // ID
  0,
  // Prix
  "0€"
);

// Objet créer grâce à function Sneakers
const sneakers2 = new Sneakers(
  // Image
  "img.png",
  // Le nom
  "Votre nom",
  // La description
  lorem,
  // ID
  1,
  // Prix
  "50€"
);

// Ajouter les objets créer dans le tableau. Rajouter le nom du nouvel objet
Sneakerslist.push(sneakers1, sneakers2);

// Fonction qui créer les cartes et les ajoutes dans un grid basique
function createCard() {
  let listSneakers = "";
  const grid = document.querySelector(".list-card");

  Sneakerslist.forEach((sneak) => {
    listSneakers += `
      <div class="card">
          <img src= ${sneak.img} alt="">
          <h1 class="titre">${sneak.name}</h1>
          <p class="description">${sneak.description}</p>
          <button id="buy"><a href = "product.php?name=${sneak.name}&description=${sneak.description}&img=${sneak.img}&price=${sneak.price}"id="lien">Acheter</a></button>
          <button id="favoris">Ajouter aux favoris</button>
      </div>
      `;
    grid.innerHTML = listSneakers;
  });
}
createCard();
