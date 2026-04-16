const API_BASE = 'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod';

export async function getPets() {
    const response = await fetch(`${API_BASE}/pets`);

    console.log('status:', response.status);

    if(!response.ok) {
        throw new Error("failed to fetch pets");
    }
    const result = await response.json();
    

    return result.data;
}

export async function getReviews(){
    const response = await fetch(`${API_BASE}/feedback`);

    if(!response.ok) {
        throw new Error("failed to fetch reviews");
    }

    const result = await response.json();
    

    return result.data;
}