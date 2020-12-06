import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as Sunflower } from '../assets/sunflower.svg'

SpaceCreator.propTypes = {
    updateTitle: PropTypes.func.isRequired,
    submitDisabled: PropTypes.bool,
    submitHandler: PropTypes.func.isRequired,
}

export default function SpaceCreator({
    updateTitle,
    submitDisabled,
    submitHandler,
}) {
    return (
        <BackgroundStyled>
            <NewSpaceContainer>
                <SpaceImageWrapper>
                    <SunflowerIcon />
                </SpaceImageWrapper>
                <SpaceNameInput>
                    <input
                        onChange={(event) => updateTitle(event.target.value)}
                        id="spacetitle"
                        type="text"
                    />
                </SpaceNameInput>
                <label htmlFor="spacetitle">
                    What would you like to name your space?
                </label>
                <ButtonWrapper>
                    <ButtonStyled
                        onClick={submitHandler}
                        disabled={submitDisabled}
                    >
                        Agree and create space
                    </ButtonStyled>
                </ButtonWrapper>
            </NewSpaceContainer>
        </BackgroundStyled>
    )
}

const BackgroundStyled = styled.section`
    background: var(--light-grey);
    width: 100%;
    height: 100%;
    padding: 20px;
`

const SunflowerIcon = styled(Sunflower)`
    width: 60%;
`

const NewSpaceContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;

    label {
        font-weight: 200;
        width: 70%;
        text-align: center;
    }
`

const SpaceImageWrapper = styled.div`
    background: var(--light-green);
    width: 50vw;
    height: 50vw;
    border-radius: 6px;
    display: grid;
    place-items: center;
`

const SpaceNameInput = styled.div`
    border-bottom: 1px solid var(--medium-grey);
    width: 80%;
    margin-bottom: 5px;

    input {
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        height: 50px;
        margin-top: 5px;
        padding-left: 10px;
        background: var(--light-grey);
        color: var(--dark-grey);
        border: 0px;
    }

    input:focus {
        outline: none;
    }
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 80%;
`
const ButtonStyled = styled.button`
    color: var(--white);
    background-color: var(--dark-green);
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
`
