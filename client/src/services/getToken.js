export default function getToken() {
    return fetch('/api/token')
        .then((res) => res.json())
        .then((data) => data.token)
}
