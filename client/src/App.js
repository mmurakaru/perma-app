import styled from 'styled-components/macro'
import usePlants from './hooks/usePlants'
import useSpaces from './hooks/useSpaces'
import { Switch, Route, useHistory } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import PlantsOverview from './components/PlantsOverview'
import SearchField from './components/SearchField'
import PlantFields from './components/PlantFields'
import SpaceOverview from './components/SpacesOverview'
import SpaceDetails from './components/SpaceDetails'
import SpaceCreator from './components/SpaceCreator'
import Spaces from './components/Spaces'
import Navigation from './components/Navigation'
import Home from './components/Home'

function App() {
    const {
        plants,
        searchTerm,
        updateSearchTerm,
        showPlantDetails,
        currentPlant,
        isLoaded,
    } = usePlants()

    const {
        submitDisabled,
        submitHandler,
        updateTitle,
        spaces,
        setSpaces,
        currentSpace,
        setCurrentSpace,
    } = useSpaces()

    const history = useHistory()

    return (
        <AppStyled>
            <Switch>
                <Route exact path="/">
                    <PageContainer>
                        <PageHeader title={'Home'} />
                        <Home space={currentSpace} />
                    </PageContainer>
                    <Navigation />
                </Route>
                <Route path="/Overview">
                    <PageContainer>
                        <PageHeader title={'Overview'} />
                        <SearchField
                            searchTerm={searchTerm}
                            onType={updateSearchTerm}
                        />
                        <PlantsOverview
                            plants={plants}
                            handleClick={showPlantDetails}
                        />
                    </PageContainer>
                    <Navigation />
                </Route>
                <Route path="/PlantFields">
                    <PlantFields
                        plant={currentPlant}
                        isLoaded={isLoaded}
                        switchToOverview={switchToOverview}
                        switchToSpaceOverview={switchToSpaceOverview}
                    />
                </Route>
                <Route path="/SpacesOverview">
                    <SpaceOverview
                        switchToPlantFields={switchToPlantFields}
                        spaces={spaces}
                        updateSpaceDetails={addCurrentPlantToSpace}
                        switchToSpaceCreator={switchToSpaceCreator}
                    />
                </Route>
                <Route path="/SpaceCreator">
                    <SpaceCreator
                        updateTitle={updateTitle}
                        submitDisabled={submitDisabled}
                        submitHandler={submitHandler}
                    />
                </Route>
                <Route path="/SpaceDetails">
                    <SpaceDetails
                        space={currentSpace}
                        switchToPreviousPage={switchToPreviousPage}
                    />
                </Route>
                <Route path="/Spaces">
                    <PageContainer>
                        <PageHeader title={'Spaces'} />
                        <Spaces
                            spaces={spaces}
                            switchToSpaceDetails={switchToSpaceDetails}
                            switchToSpaceCreator={switchToSpaceCreator}
                        />
                    </PageContainer>
                    <Navigation />
                </Route>
            </Switch>
        </AppStyled>
    )

    function switchToPreviousPage() {
        history.goBack()
    }

    function switchToOverview() {
        history.push('/Overview')
    }

    function switchToPlantFields() {
        history.push('/PlantFields')
    }

    function switchToSpaceOverview() {
        history.push('/SpacesOverview')
    }

    function switchToSpaceCreator() {
        history.push('/SpaceCreator')
    }

    function switchToSpaceDetails(id) {
        const targetSpace = spaces.find((space) => space.id === id)
        setCurrentSpace(targetSpace)
        history.push('/spaceDetails')
    }

    function addCurrentPlantToSpace(id) {
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        const yyyy = today.getFullYear()
        today = dd + '.' + mm + '.' + yyyy

        const updatedSpaces = spaces.map((space) =>
            space.id === id
                ? {
                      ...space,
                      plants: [currentPlant, ...space.plants],
                      date: today,
                  }
                : space
        )
        setSpaces(updatedSpaces)
        const targetSpace = updatedSpaces.find((space) => space.id === id)
        setCurrentSpace(targetSpace)
        history.push('/spaceDetails')
    }
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`
const PageContainer = styled.div`
    padding: 20px;
`
