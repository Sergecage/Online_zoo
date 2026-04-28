import  type { Pet } from "./components/types";
import { getPets } from "./services/api.service";
import { createPetCard } from "./components/pets";

const nextBtn = document.getElementById('pets-next');
const prevBtn = document.getElementById('pets-prev');
const container = document.querySelector<HTMLElement>('.animal-slide');

export async function loadPets(): Promise<void> {

  const container = document.querySelector<HTMLElement>(".animals-slide");
  const loader = document.getElementById("pets-loader");

  if (!container) return;

  try {

    const pets = await getPets();
    loader?.remove();

    pets.slice(0, 8).forEach((pet: Pet) => {
      const card = createPetCard(pet);
      container.appendChild(card);
    });

  }
  catch {

    container.innerText = "Something went wrong. Please, refresh the page";
    loader?.remove();

  }

}

loadPets();