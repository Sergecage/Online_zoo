import type {Pet} from './types';

const animalImages: Record<string, string> = {
  "Giant Panda": "/assets/images/Panda_card.svg",
  "Madagascarian Lemur": "/assets/images/Lemur_card.svg",
  "Gorilla in Congo": "/assets/images/Gorrila_card.svg",
  "Chinese Alligator": "/assets/images/Alligator_card.svg",
  "West End Bald Eagles": "/assets/images/Eagle_card.svg",
  "Australian Koala": "/assets/images/Koala_card.svg",
  "African Lion": "/assets/images/Lion_card.svg",
  "Sumatran Tiger": "/assets/images/Tiger_card.svg",
};

export function createPetCard(pet: Pet): HTMLElement {
    const card = document.createElement("div");
    card.className = "animal-card";


    const image = document.createElement("img");
    image.className = "animal-image";
    image.src = animalImages[pet.commonName];
    image.alt = pet.commonName;

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
    card.append(image, content);

    return card;
}