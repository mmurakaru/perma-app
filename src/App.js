import styled from 'styled-components/macro'
import PageHeader from './components/PageHeader'
import PlantsOverview from './components/PlantsOverview'
import SearchField from './components/SearchField'
import PlantFields from './components/PlantFields'
import usePlants from './hooks/usePlants'
import { Switch, Route, useHistory } from 'react-router-dom'

function App() {
    const {
        plants,
        searchTerm,
        updateSearchTerm,
        showPlantDetails,
        plant,
        isLoaded,
    } = usePlants()

    const history = useHistory()

    function updateUrl() {
        history.push('/')
    }

    return (
        <AppStyled>
            <Switch>
                <Route exact path="/">
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
                <Route path="/plant">
                    <PlantFields
                        plant={plant}
                        isLoaded={isLoaded}
                        backToHome={updateUrl}
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
