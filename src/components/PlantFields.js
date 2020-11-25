import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import logo from '../assets/perma_logo.svg'
import { ReactComponent as ArrowIcon } from '../assets/arrow_down.svg'

PlantFields.propTypes = {
    plant: PropTypes.object,
    isLoaded: PropTypes.bool,
    backToOverview: PropTypes.func,
}

export default function PlantFields({ plant, isLoaded, backToOverview }) {
    return (
        <BackgroundStyled>
            <PlantFieldsContainer>
                <ArrowDown data-testid="ArrowDown" onClick={backToOverview} />
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
                    </>
                ) : (
                    <LoadingMsgStyled />
                )}
            </PlantFieldsContainer>
        </BackgroundStyled>
    )
}

const BackgroundStyled = styled.div`
    background: var(--mediumGreen);
    width: 100%;
    height: 100%;
    padding: 20px;
`

const PlantFieldsContainer = styled.section`
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    background-color: var(--white);
    width: 100%;
    overflow: none;
    margin-top: 50px;
`
const ArrowDown = styled(ArrowIcon)`
    fill: var(--white);
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
        background: #4a4a4a;
        background-image: url(${logo});
        background-repeat: no-repeat;
    }
`

const FieldsWrapper = styled.div`
    max-height: 500px;
    overflow-y: auto;
    border-top: 0.5px solid #e8e8e8;
`

const FieldsStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`

const Field = styled.span`
    font-weight: 600;
    color: #4a4a4a;
    opacity: 50%;
    line-height: 1.333;
    font-size: 75%;
    margin-top: 20px;
    margin-bottom: 10px;
`
const Data = styled.span`
    font-weight: 600;
    color: #4a4a4a;
    line-height: 1.333;
    font-size: 75%;
    margin-top: 20px;
    margin-bottom: 10px;
`
const Text = styled.p`
    font-weight: 400;
    color: #4a4a4a;
    line-height: 1.333;
    font-size: 75%;
    margin-top: 40px;
    margin-bottom: 10px;
`
const LoadingMsgStyled = styled.img`
    width: 40px;
    height: 40px;
    background-color: #aabb97;
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
