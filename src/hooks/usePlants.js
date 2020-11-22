import { useEffect, useState } from 'react'
import getPlants from '../services/getPlants'
import searchPlants from '../services/searchPlants'

export default function usePlants() {
    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const filteredPlants = filterPlants(searchTerm)

    useEffect(() => {
        filteredPlants.length === 0 &&
            searchTerm.length > 0 &&
            searchPlants(searchTerm)
                .then((results) => {
                    setPlants(results.data)
                })
                .catch((error) => console.log(error.message))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    useEffect(() => {
        getPlants()
            .then((data) => {
                setPlants(data.data)
            })
            .catch((error) => console.log(error.message))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        plants: filteredPlants,
        searchTerm,
        updateSearchTerm: setSearchTerm,
    }

    function filterPlants(searchTerm) {
        return [
            ...new Set([
                ...plants?.filter(({ common_name }) =>
                    common_name
                        ?.toLowerCase()
                        .startsWith(searchTerm.toLowerCase())
                ),
                ...plants?.filter(({ common_name }) =>
                    common_name
                        ?.toLowerCase()
                        .includes(' ' + searchTerm.toLowerCase())
                ),
                ...plants?.filter(({ common_name }) =>
                    common_name
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase())
                ),
            ]),
        ]
    }
}
