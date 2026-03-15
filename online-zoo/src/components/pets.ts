import {Pet} from './types';

const animalImages: Record<string, string> = {
  "Giant Panda": "../../assets/images/Panda_card.svg",
  "Madagascarian Lemur": "../../assets/images/Lemur_card.svg",
  "Gorilla in Congo": "../../assets/images/Gorrila_card.svg",
  "Chinese Alligator": "../../assets/images/Alligator_card.svg",
  "West End Bald Eagles": "../../assets/images/Eagle_card.svg",
  "Australian Koala": "../../assets/images/Koala_card.svg",
  "African Lion": "../../assets/images/Lion_card.svg",
  "Sumatran Tiger": "../../assets/images/Tiger_card.svg",
};

export function createPetCard(pet: Pet): HTMLElement {
    const card = document.createElement("div");

    card.className = "animal-card";

    card.innerText = ``
}