import styled from 'styled-components/macro'
import PlantsOverview from './components/PlantsOverview'
import SearchField from './components/SearchField'
import usePlants from './hooks/usePlants'

function App() {
    const { plants, searchTerm, updateSearchTerm } = usePlants()

    return (
        <AppStyled>
            <SearchField searchTerm={searchTerm} onType={updateSearchTerm} />
            <PlantsOverview plants={plants} />
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`
