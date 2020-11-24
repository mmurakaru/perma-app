import styled from 'styled-components/macro'
import PageHeader from './components/PageHeader'
import PlantsOverview from './components/PlantsOverview'
import SearchField from './components/SearchField'
import PlantFields from './components/PlantFields'
import usePlants from './hooks/usePlants'
import { Switch, Route } from 'react-router-dom'

function App() {
    const {
        plants,
        searchTerm,
        updateSearchTerm,
        showPlantDetails,
        plant,
        isLoaded,
    } = usePlants()

    return (
        <AppStyled>
            <Switch>
                <Route path="/plant">
                    <PlantFields plant={plant} isLoaded={isLoaded} />
                </Route>
                <Route path="/" exact>
                    <PageHeader />
                    <SearchField
                        searchTerm={searchTerm}
                        onType={updateSearchTerm}
                    />
                    <PlantsOverview
                        plants={plants}
                        handleClick={showPlantDetails}
                    />
                </Route>
            </Switch>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`
