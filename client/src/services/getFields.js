export default function getFields(id, token) {
    const url = `https://trefle.io/api/v1/species/${id}?token=${token}`
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error.message))
}
