import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../assets/perma_logo.svg'

export default function NewSpace({
    activateButton,
    submitDisabled,
    submitHandler,
}) {
    return (
        <BackgroundStyled>
            <NewSpaceContainer>
                <SpaceImageWrapper>
                    <LogoIcon />
                </SpaceImageWrapper>
                <SpaceNameInput>
                    <input
                        onChange={(event) => activateButton(event.target.value)}
                        id="spacename"
                        type="text"
                    />
                </SpaceNameInput>
                <label htmlFor="spacename">
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
    background: var(--lightGrey);
    width: 100%;
    height: 100%;
    padding: 20px;
`
const LogoIcon = styled(Logo)`
    fill: var(--darkGreen);
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
    background: var(--lightGreen);
    width: 50%;
    height: auto;
    border-radius: 6px;
`

const SpaceNameInput = styled.div`
    border-bottom: 1px solid var(--mediumGrey);
    width: 80%;
    margin-bottom: 5px;

    input {
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        height: 50px;
        margin-top: 5px;
        padding-left: 10px;
        background: var(--lightGrey);
        color: var(--darkGrey);
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
    background-color: var(--darkGreen);
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
`
