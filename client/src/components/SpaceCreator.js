import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as ArrowIcon } from '../assets/arrow_down.svg'
import { ReactComponent as Plus } from '../assets/plus.svg'
import { ReactComponent as Logo } from '../assets/perma_logo.svg'
import { Link } from 'react-router-dom'

SpaceCreator.propTypes = {
    backToPlantFields: PropTypes.func,
}

export default function SpaceCreator({ backToPlantFields, spaceName }) {
    return (
        <BackgroundStyled>
            <SpaceCreatorContainer>
                <ArrowDown
                    data-testid="ArrowDown"
                    onClick={backToPlantFields}
                />
                <h2>Choose a space</h2>
                <>
                    <SpacesContainer>
                        {spaceName.map((name, index) => (
                            <SpaceWrapper key={index}>
                                <SpaceIcon>
                                    <LogoStyled />
                                </SpaceIcon>
                                <h2>{name}</h2>
                            </SpaceWrapper>
                        ))}
                        <Link className="link" to="/newSpace">
                            <SpaceWrapper>
                                <NewSpaceIcon>
                                    <PlusIcon />
                                </NewSpaceIcon>
                                <h2>Create a new space</h2>
                            </SpaceWrapper>
                        </Link>
                        {/* <SpaceWrapper>
                            <SpaceIcon>
                                <LogoStyled />
                            </SpaceIcon>
                            <h2>Vegetables</h2>
                        </SpaceWrapper> */}
                    </SpacesContainer>

                    <ButtonWrapper>
                        <ButtonStyled>Add</ButtonStyled>
                    </ButtonWrapper>
                </>
            </SpaceCreatorContainer>
        </BackgroundStyled>
    )
}

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
`
const ButtonStyled = styled.button`
    color: var(--white);
    background-color: var(--darkGreen);
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
`

const BackgroundStyled = styled.div`
    background: var(--mediumGrey);
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
    fill: var(--darkGreen);
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
        color: var(--darkGrey);
        text-decoration: none;
    }
`

const NewSpaceIcon = styled.div`
    border: 1px solid var(--mediumGrey);
    height: 100px;
    width: 100px;
    border-radius: 5px;
    display: grid;
    place-items: center;
`

const PlusIcon = styled(Plus)`
    width: 50%;
    display: block;
    fill: var(--darkGrey);
`

const SpaceIcon = styled(NewSpaceIcon)`
    border: none;
    background-color: var(--lightGreen);
`
const LogoStyled = styled(Logo)`
    width: 80%;
    fill: var(--darkGreen);
`

const SpaceWrapper = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin: 3px 0;
        opacity: 100%;
    }
`
