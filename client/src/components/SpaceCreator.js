import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as ArrowIcon } from '../assets/arrow_down.svg'
import { ReactComponent as Plus } from '../assets/plus.svg'
import { ReactComponent as Banana } from '../assets/banana.svg'
import { Link } from 'react-router-dom'

SpaceCreator.propTypes = {
    backToPlantFields: PropTypes.func,
}

export default function SpaceCreator({
    backToPlantFields,
    spaceTitles,
    handleClick,
}) {
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
                        {spaceTitles.map((name, index) => (
                            <SpaceWrapper
                                key={index}
                                onClick={() => handleClick(index)}
                            >
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
                    </SpacesContainer>
                </>
            </SpaceCreatorContainer>
        </BackgroundStyled>
    )
}

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
const LogoStyled = styled(Banana)`
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
