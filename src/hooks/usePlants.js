import { useEffect, useState } from 'react'
import getData from '../services/getData'

export default function usePlants() {
    const [plants, setPlants] = useState([])
    const [filteredPlants, setFilteredPlants] = useState([])

    useEffect(() => {
        getData()
            .then((data) => {
                setPlants(data.data)
                setFilteredPlants(data.data)
            })
            .catch((error) => console.log(error.message))
    }, [])

    return { filterPlants, plants, filteredPlants }

    function filterPlants(searchTerm) {
        setFilteredPlants([
            ...new Set([
                ...plants.filter(({ common_name }) =>
                    common_name
                        .toLowerCase()
                        .startsWith(searchTerm.toLowerCase())
                ),
                ...plants.filter(({ common_name }) =>
                    common_name
                        .toLowerCase()
                        .includes(' ' + searchTerm.toLowerCase())
                ),
                ...plants.filter(({ common_name }) =>
                    common_name.toLowerCase().includes(searchTerm.toLowerCase())
                ),
            ]),
        ])
    }
}
