import styled from 'styled-components/macro'
import usePlants from './hooks/usePlants'
import useSpaces from './hooks/useSpaces'
import { Switch, Route, useHistory } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import PlantsOverview from './components/PlantsOverview'
import SearchField from './components/SearchField'
import PlantFields from './components/PlantFields'
import SpaceCreator from './components/SpaceCreator'
import SpaceDetails from './components/SpaceDetails'
import NewSpace from './components/NewSpace'

function App() {
    const {
        plants,
        searchTerm,
        updateSearchTerm,
        showPlantDetails,
        plant,
        isLoaded,
    } = usePlants()

    const {
        submitDisabled,
        submitHandler,
        updateTitle,
        spaceTitles,
        handleClick,
        spaceDetails,
    } = useSpaces()

    const history = useHistory()

    function updateUrl() {
        history.push('/')
    }

    function backToPlantFields() {
        history.push('/plant')
    }

    function backToSpaceCreatorPage() {
        history.push('/spaceCreator')
    }

    return (
        <AppStyled>
            <Switch>
                <Route exact path="/">
                    <OverviewPage>
                        <PageHeader />
                        <SearchField
                            searchTerm={searchTerm}
                            onType={updateSearchTerm}
                        />
                        <PlantsOverview
                            plants={plants}
                            handleClick={showPlantDetails}
                        />
                    </OverviewPage>
                </Route>
                <Route path="/plant">
                    <PlantFields
                        plant={plant}
                        isLoaded={isLoaded}
                        backToOverview={updateUrl}
                    />
                </Route>
                <Route path="/spaceCreator">
                    <SpaceCreator
                        backToPlantFields={backToPlantFields}
                        spaceTitles={spaceTitles}
                        handleClick={handleClick}
                    />
                </Route>
                <Route path="/newSpace">
                    <NewSpace
                        updateTitle={updateTitle}
                        submitDisabled={submitDisabled}
                        submitHandler={submitHandler}
                    />
                </Route>
                <Route path="/spaceDetails">
                    <SpaceDetails
                        spaceDetails={spaceDetails}
                        plant={plant}
                        backToSpaceCreatorPage={backToSpaceCreatorPage}
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
const OverviewPage = styled.div`
    padding: 20px;
`
