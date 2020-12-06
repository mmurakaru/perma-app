import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as ArrowIcon } from '../assets/arrow_down.svg'
import { ReactComponent as Plus } from '../assets/plus.svg'
import { ReactComponent as Sunflower } from '../assets/sunflower.svg'

SpaceOverview.propTypes = {
    switchToPlantFields: PropTypes.func,
    spaces: PropTypes.array,
    updateSpaceDetails: PropTypes.func,
    switchToSpaceCreator: PropTypes.func,
}

export default function SpaceOverview({
    switchToPlantFields,
    spaces,
    updateSpaceDetails,
    switchToSpaceCreator,
}) {
    return (
        <BackgroundStyled>
            <SpaceCreatorContainer>
                <ArrowDown
                    data-testid="ArrowDown"
                    onClick={switchToPlantFields}
                />
                <h2>Choose a space</h2>
                <>
                    <SpacesContainer>
                        {spaces.map((title, index) => (
                            <SpaceWrapper
                                key={index}
                                onClick={() => updateSpaceDetails(index)}
                            >
                                <SpaceIcon>
                                    <LogoStyled />
                                </SpaceIcon>
                                <h2>{title}</h2>
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
            </SpaceCreatorContainer>
        </BackgroundStyled>
    )
}

const BackgroundStyled = styled.div`
    background: var(--medium-grey);
    width: 100%;
    height: 100%;
    padding: 20px;
`

const SpaceCreatorContainer = styled.section`
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    background-color: var(--white);
    width: 100%;
    overflow: none;
    margin-top: 50px;

    h2 {
        margin-left: 20px;
        font-weight: 400;
        font-size: 0.6rem;
        opacity: 50%;
    }
`
const ArrowDown = styled(ArrowIcon)`
    fill: var(--dark-green);
    width: 20px;
    position: absolute;
    left: 20px;
    top: 20px;
`

const SpacesContainer = styled.div`
    margin-top: 20px;
    height: 65vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    place-items: center;
    gap: 20px;
    overflow: auto;

    .link {
        color: var(--dark-grey);
        text-decoration: none;
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

    h2 {
        margin: 3px 0;
        opacity: 100%;
    }
`
