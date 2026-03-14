const API_BASE = 'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/docs/openapi.json';

export async function getPets() {
    const response = await fetch(`${API_BASE}/pets`);

    if(!response.ok) {
        throw new Error("failed to fetch pets");
    }

    return response.json();
}

export async function getReviews(){
    const response = await fetch(`${API_BASE}/reviews`);

    if(!response.ok) {
        throw new Error("failed to fetch reviews");
    }

    return response.json();
}