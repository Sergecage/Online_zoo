import type {Pet} from './types';

const animalImages: Record<string, string> = {
  "Giant Panda": "assets/images/Panda_card.svg",
  "Madagascarian Lemur": "assets/images/Lemur_card.svg",
  "Gorilla in Congo": "./assets/images/Gorrila_card.svg",
  "Chinese Alligator": "./assets/images/Alligator_card.svg",
  "West End Bald Eagles": "./assets/images/Eagle_card.svg",
  "Australian Koala": "./assets/images/Koala_card.svg",
  "African Lion": "./assets/images/Lion_card.svg",
  "Sumatran Tiger": "./assets/images/Tiger_card.svg",
};

export function createPetCard(pet: Pet): HTMLElement {
    const card = document.createElement("div");
    card.className = "animal-card";

    const top = document.createElement("div");
    top.className = "top-animal";

    const image = animalImages[pet.commonName];

    if (image) {
        top.style.backgroundImage = `url(${image})`;
        top.style.backgroundSize = "cover";
        top.style.backgroundPosition = "center";
    }

    const name = document.createElement("h4");
    name.className = "left-h4";
    name.innerText = pet.name;

    const content = document.createElement("div");
    content.className = "card-content";

    const title = document.createElement("h4");
    title.innerText = pet.commonName;

    const desc = document.createElement("p");
    desc.innerText = pet.description;

    card.innerHTML = `
    <h4 class="left-h4">${pet.name}</h4>
    <div class="card-content">
        <h4>${pet.commonName}</h4>
        <p>${pet.description}</p>
        <button class="animal-button">
            View Live Cam
        </button>
    </div>`;

    card.appendChild(top);

    return card;
}