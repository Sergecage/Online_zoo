import  type { Pet } from "./components/types";
import { getPets } from "./services/api.service";
import { createPetCard } from "./components/pets";

async function loadPets(): Promise<void> {

  const container = document.querySelector<HTMLElement>(".animals-slide");

  if (!container) return;

  try {

    const response = await getPets();
    const pets = response.data;

    pets.slice(0, 8).forEach(pet: Pet => {
      const card = createPetCard(pet);
      container.appendChild(card);
    });

  }
  catch {

    container.innerText = "Something went wrong. Please, refresh the page";

  }

}

loadPets();