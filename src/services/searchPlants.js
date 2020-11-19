export default function searchPlants(query) {
    const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=5slwOv-vNendNI-A4LtwJJiM0KHc_t-nTx4zxp88yMI&q=${query}`
    return fetch(url)
        .then((res) => {
            const statusPrefix = res.status.toString()[0]
            if (statusPrefix === '5' || statusPrefix === '4') {
                return {}
            }
            return res.json()
        })
        .catch((error) => console.log(error.message))
}

// Search API: plants/search?... endwith: &q=blueberry
