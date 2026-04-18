import type {Pet} from '../components/types';

const API_BASE = 'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod';


export async function getPets(): Promise<Pet[]> {
    const response = await fetch(`${API_BASE}/pets`);
    

    if(!response.ok) {
        throw new Error("failed to fetch pets");
    }
    const result = await response.json();
    console.log(result);
    
    return result.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        commonName: item.common_name,
        description: item.description,
    }));
}

export async function getReviews(){
    const response = await fetch(`${API_BASE}/feedback`);

    if(!response.ok) {
        throw new Error("failed to fetch reviews");
    }

    const result = await response.json();
    
    return result.data;
}