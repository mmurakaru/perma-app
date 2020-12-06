import styled from 'styled-components/macro'
import usePlants from './hooks/usePlants'
import useSpaces from './hooks/useSpaces'
import { Switch, Route, useHistory } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import PlantsOverview from './components/PlantsOverview'
import SearchField from './components/SearchField'
import PlantFields from './components/PlantFields'
import SpaceOverview from './components/SpaceOverview'
import SpaceDetails from './components/SpaceDetails'
import SpaceCreator from './components/SpaceCreator'
import { useState } from 'react'
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

    function updateSpaceDetails(spaceIndex) {
        const targetSpace = spaces
            .find((_, index) => index === spaceIndex)
            .toString()

        setSpacePlants([plant, ...spacePlants])
        setSpace({ id: spaceIndex, title: targetSpace, plants: spacePlants })
        history.push('/spaceDetails')
    }

    function switchToOverview() {
        history.push('/')
    }

    function switchToPlantFields() {
        history.push('/PlantFields')
    }

    function switchToSpaceOverview() {
        history.push('/SpaceOverview')
    }

    function switchToSpaceCreator() {
        history.push('/SpaceCreator')
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
                <Route path="/PlantFields">
                    <PlantFields
                        plant={plant}
                        isLoaded={isLoaded}
                        switchToOverview={switchToOverview}
                        switchToSpaceOverview={switchToSpaceOverview}
                    />
                </Route>
                <Route path="/SpaceOverview">
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
                        switchToSpaceOverview={switchToSpaceOverview}
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
