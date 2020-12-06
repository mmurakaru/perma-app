export default function searchPlants(query, token) {
    const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/search?token=${token}&q=${query}`
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
