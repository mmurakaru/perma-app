import styled from 'styled-components/macro'
import PageHeader from './components/PageHeader'
import PlantsOverview from './components/PlantsOverview'
import SearchField from './components/SearchField'
import PlantFields from './components/PlantFields'
import usePlants from './hooks/usePlants'
import { Switch, Route, useHistory } from 'react-router-dom'
import SpaceCreator from './components/SpaceCreator'
import NewSpace from './components/NewSpace'
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

    const history = useHistory()

    function updateUrl() {
        history.push('/')
    }

    function backToPlantFields() {
        history.push('/plant')
    }

    //space creator logic
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [spaceName, setSpaceName] = useState([])

    function submitHandler(event) {
        event.preventDefault()
        setSubmitDisabled(true)
        history.push('/spaceCreator')
    }

    function activateButton(name) {
        const str = name
        const newSpaceName = str.split(' ')
        setSpaceName(newSpaceName)
        setSubmitDisabled(false)
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
                        spaceName={spaceName}
                    />
                </Route>
                <Route path="/newSpace">
                    <NewSpace
                        activateButton={activateButton}
                        submitDisabled={submitDisabled}
                        submitHandler={submitHandler}
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
