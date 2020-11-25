import { useEffect, useState } from 'react'
import getPlants from '../services/getPlants'
import searchPlants from '../services/searchPlants'
import getFields from '../services/getFields'
import { useHistory } from 'react-router-dom'

export default function usePlants() {
    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [plant, setPlant] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const filteredPlants = filterPlants(searchTerm)
    const history = useHistory()

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
        showPlantDetails,
        plant,
        isLoaded,
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

    function showPlantDetails(id) {
        history.push('/plant')
        setIsLoaded(false)
        setPlant(plants.find((plant) => plant.id === id))
        getFields(id)
            .then((results) => {
                setPlant(results.data)
                setIsLoaded(true)
            })
            .catch((error) => console.log(error.message))
    }
}
