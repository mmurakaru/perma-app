export default function getToken() {
    return fetch('http://localhost:3001/api/token')
        .then((res) => res.json())
        .then((data) => data.token)
}
