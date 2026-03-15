import {Pet} from './types';

export function createPetCard(pet: Pet): HTMLElement {
    const card = document.createElement("div");

    card.className = "animal-card";
}