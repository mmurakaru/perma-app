import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import logo from '../assets/perma_logo.svg'
import { ReactComponent as ArrowIcon } from '../assets/arrow_down.svg'

PlantFields.propTypes = {
    plant: PropTypes.object,
    isLoaded: PropTypes.bool,
    switchToOverview: PropTypes.func.isRequired,
    switchToSpaceOverview: PropTypes.func.isRequired,
}

export default function PlantFields({
    plant,
    isLoaded,
    switchToOverview,
    switchToSpaceOverview,
}) {
    return (
        <BackgroundStyled>
            <PlantFieldsContainer>
                <ArrowDown data-testid="ArrowDown" onClick={switchToOverview} />
                {isLoaded ? (
                    <>
                        <PlantThumbnail key={plant.id}>
                            <img src={plant.image_url} alt="" />
                            <h2>{plant.common_name}</h2>
                        </PlantThumbnail>
                        <FieldsWrapper>
                            <FieldsStyled>
                                <Field>Family</Field>
                                <Data>{plant.family}</Data>
                                <Field>Average-height (cm)</Field>
                                <Data>
                                    {plant.specifications.average_height.cm}
                                </Data>
                                <Field>Minimum-temperature (deg-c)</Field>
                                <Data>
                                    {plant.growth.minimum_temperature.deg_c}
                                </Data>
                                <Field>
                                    Soil texture <br /> (0)clay) - (10)rock
                                </Field>
                                <Data>{plant.growth.soil_texture}</Data>
                                <Field>Edible</Field>
                                <Data>{plant.edible ? 'yes' : 'no'}</Data>
                                <Field>Light (1-10)</Field>
                                <Data>{plant.growth.light}</Data>
                                <Field>Sowing</Field>
                                <Data>{plant.growth.sowing}</Data>
                                <Field>Row spacing</Field>
                                <Data>{plant.growth.row_spacing.cm}</Data>
                                <Field>Days to harvest</Field>
                                <Data>{plant.growth.days_to_harvest}</Data>
                            </FieldsStyled>
                            <Text>{plant.growth.description}</Text>
                        </FieldsWrapper>
                        <ButtonWrapper onClick={switchToSpaceOverview}>
                            <ButtonStyled>Add to space</ButtonStyled>
                        </ButtonWrapper>
                    </>
                ) : (
                    <LoadingMsgStyled />
                )}
            </PlantFieldsContainer>
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
    background-color: var(--dark-green);
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
`

const BackgroundStyled = styled.div`
    background: var(--medium-grey);
    height: 100%;
    padding: 20px;
`

const PlantFieldsContainer = styled.section`
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    background-color: var(--white);
    overflow: none;
    margin-top: 50px;

    .link {
        color: var(--dark-grey);
        text-decoration: none;
    }
`
const ArrowDown = styled(ArrowIcon)`
    fill: var(--dark-green);
    width: 20px;
    position: absolute;
    left: 20px;
    top: 20px;
`

const PlantThumbnail = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    img {
        height: 100px;
        width: 156px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 5px;
        background: var(--dark-grey);
        background-image: url(${logo});
        background-repeat: no-repeat;
    }
`

const FieldsWrapper = styled.div`
    max-height: 50vh;
    overflow-y: auto;
    border-top: 0.5px solid var(--light-grey);
`

const FieldsStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`
const Data = styled.span`
    font-weight: 600;
    color: var(--dark-grey);
    line-height: 1.333;
    font-size: 75%;
    margin-top: 20px;
    margin-bottom: 10px;
`
const Field = styled(Data)`
    opacity: 50%;
`
const Text = styled.p`
    font-weight: 400;
    color: var(--dark-grey);
    line-height: 1.333;
    font-size: 75%;
    margin-top: 40px;
    margin-bottom: 10px;
`
const LoadingMsgStyled = styled.img`
    width: 40px;
    height: 40px;
    background-color: var(--medium-green);
    border-radius: 100%;
    animation: scaleout 1s infinite ease-in-out;

    @keyframes scaleout {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`
