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
        plant,
        isLoaded,
    } = usePlants()

    const {
        submitDisabled,
        submitHandler,
        updateTitle,
        spaces,
        spacePlants,
        setSpacePlants,
        space,
        setSpace,
    } = useSpaces()

    const history = useHistory()

    // const space = {plantIds: [id1, id2]}

    // const spaces= {[space.name]: space}

    // const addPlantsToSpace(spaceName, plantIds) {
    //     const space = spaces[spaceName]
    //     const newSpaces = {...spaces, [spaceName]: {...space, plantIds: space.plantIds.contact(plantIds)}}
    //     setSpacePlants(newSpaces)
    // }

    // const addNewSpace(space) {
    //     if (spaces[space.name]) {
    //         setError('Space with this name already exists')
    //         return
    //     }
    //     const newSpaces = {
    //         ...spaces, [space.name]: space
    //     }
    //     setSpaces(newSpaces)
    // }

    function updateSpaceDetails(spaceIndex) {
        const currentSpace = spaces
            .find((_, index) => index === spaceIndex)
            .toString()
        setSpace({ id: spaceIndex, title: currentSpace, plants: spacePlants })
        setSpacePlants([plant, ...spacePlants])
        history.push('/spaceDetails')
    }

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

    return (
        <AppStyled>
            <Switch>
                <Route exact path="/">
                    <PageContainer>
                        <PageHeader title={'Home'} />
                        <Home space={space} />
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
                        plant={plant}
                        isLoaded={isLoaded}
                        switchToOverview={switchToOverview}
                        switchToSpaceOverview={switchToSpaceOverview}
                    />
                </Route>
                <Route path="/SpacesOverview">
                    <SpaceOverview
                        switchToPlantFields={switchToPlantFields}
                        spaces={spaces}
                        updateSpaceDetails={updateSpaceDetails}
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
                        space={space}
                        switchToPreviousPage={switchToPreviousPage}
                    />
                </Route>
                <Route path="/Spaces">
                    <PageContainer>
                        <PageHeader title={'Spaces'} />
                        <Spaces
                            spaces={spaces}
                            updateSpaceDetails={updateSpaceDetails}
                            switchToSpaceCreator={switchToSpaceCreator}
                        />
                    </PageContainer>
                    <Navigation />
                </Route>
            </Switch>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`
const PageContainer = styled.div`
    padding: 20px;
`
