export default function getData() {
    const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=5slwOv-vNendNI-A4LtwJJiM0KHc_t-nTx4zxp88yMI&page=29`
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error.message))
}

// plants/search?... endwith: &q=blueberry