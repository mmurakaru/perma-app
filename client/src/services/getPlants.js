export default function getPlants() {
    const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species?token=5slwOv-vNendNI-A4LtwJJiM0KHc_t-nTx4zxp88yMI&page=6`
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error.message))
}

// Pagination: endwith: &page=7