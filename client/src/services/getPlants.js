export default function getPlants(token) {
    const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species?token=${token}`
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error.message))
}

// Pagination: endwith: &page=7
