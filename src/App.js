import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import PlantOverview from './components/PlantOverview'
import SearchField from './components/SearchField'
import getData from './services/getData'

function App() {
    const [plants, setPlants] = useState([])
    const [filteredPlants, setFilteredPlants] = useState([])

    useEffect(() => {
        getData()
            .then((data) => {
                setPlants(data.data)
            })
            .catch((error) => console.log(error.message))
    }, [])

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

    return (
        <AppStyled>
            <SearchField filterPlants={filterPlants} />
            <PlantOverview plants={plants} filteredPlants={filteredPlants} />
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`
