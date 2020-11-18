import styled from 'styled-components/macro'
import PlantOverview from './components/PlantOverview'
import SearchField from './components/SearchField'
import usePlants from './hooks/usePlants'

function App() {
    const { filterPlants, filteredPlants } = usePlants()

    return (
        <AppStyled>
            <SearchField filterPlants={filterPlants} />
            <PlantOverview filteredPlants={filteredPlants} />
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`
