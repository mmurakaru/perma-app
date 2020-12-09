import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as Plus } from '../assets/plus.svg'
import { ReactComponent as Sunflower } from '../assets/sunflower.svg'

SpaceOverview.propTypes = {
    spaces: PropTypes.array,
    updateSpaceDetails: PropTypes.func,
    switchToSpaceCreator: PropTypes.func,
}

export default function SpaceOverview({
    spaces,
    updateSpaceDetails,
    switchToSpaceCreator,
}) {
    return (
        <>
            <SpacesContainer>
                {spaces.map(({ spaceTitle, id }) => (
                    <SpaceWrapper
                        key={id}
                        onClick={() => updateSpaceDetails(id)}
                    >
                        <SpaceIcon>
                            <LogoStyled />
                        </SpaceIcon>
                        <h2>{spaceTitle}</h2>
                    </SpaceWrapper>
                ))}

                <SpaceWrapper onClick={switchToSpaceCreator}>
                    <NewSpaceIcon>
                        <PlusIcon />
                    </NewSpaceIcon>
                    <h2>Create a new space</h2>
                </SpaceWrapper>
            </SpacesContainer>
        </>
    )
}

const SpacesContainer = styled.div`
    margin-top: 50px;
    height: 78.5vh;
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: min-content;
    place-items: center;
    overflow: auto;

    h2 {
        margin-left: 20px;
        font-weight: 400;
        font-size: 0.6rem;
        opacity: 50%;
    }
`

const NewSpaceIcon = styled.div`
    border: 1px solid var(--medium-grey);
    height: 100px;
    width: 100px;
    border-radius: 5px;
    display: grid;
    place-items: center;
`

const PlusIcon = styled(Plus)`
    width: 50%;
    display: block;
    fill: var(--dark-grey);
`

const SpaceIcon = styled(NewSpaceIcon)`
    border: none;
    background-color: var(--light-green);
`
const LogoStyled = styled(Sunflower)`
    width: 80%;
`

const SpaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: start;

    h2 {
        margin: 3px 0;
        opacity: 100%;
    }
`
