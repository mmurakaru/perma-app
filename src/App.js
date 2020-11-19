import styled from 'styled-components/macro'
import PlantOverview from './components/PlantOverview'
import SearchField from './components/SearchField'
import usePlants from './hooks/usePlants'

function App() {
    const { plants, searchTerm, updateSearchTerm } = usePlants()

    return (
        <AppStyled>
            <SearchField searchTerm={searchTerm} onType={updateSearchTerm} />
            <PlantOverview plants={plants} />
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`
