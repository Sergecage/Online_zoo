import type {Pet} from './types';

const animalImages: Record<string, string> = {
  "Giant Panda": "src/assets/images/Panda_card.svg",
  "Madagascarian Lemur": "src/assets/images/Lemur_card.svg",
  "Gorilla in Congo": "src/assets/images/Gorrila_card.svg",
  "Chinese Alligator": "src/assets/images/Alligator_card.svg",
  "West End Bald Eagles": "src/assets/images/Eagle_card.svg",
  "Australian Koala": "src/assets/images/Koala_card.svg",
  "African Lion": "src/assets/images/Lion_card.svg",
  "Sumatran Tiger": "src/assets/images/Tiger_card.svg",
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

    const button = document.createElement("button");
    button.className = "animal-button";
    button.innerText = "View Live Cam";

    content.append(title, desc, button);
    top.append(name, content);
    card.appendChild(top);

    return card;
}