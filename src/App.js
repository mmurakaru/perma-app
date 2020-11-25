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
                    <OverviewWrapper>
                        <PageHeader />
                        <SearchField
                            searchTerm={searchTerm}
                            onType={updateSearchTerm}
                        />
                        <PlantsOverview
                            plants={plants}
                            handleClick={showPlantDetails}
                        />
                    </OverviewWrapper>
                </Route>
                <Route path="/plant">
                    <PlantFields
                        plant={plant}
                        isLoaded={isLoaded}
                        backToOverview={updateUrl}
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
const OverviewWrapper = styled.div`
    padding: 20px;
`
