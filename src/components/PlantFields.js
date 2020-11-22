import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import logo from '../assets/perma_logo.svg'

PlantFields.propTypes = {
    plants: PropTypes.array,
}

export default function PlantFields({ plant }) {
    document.body.style.backgroundColor = '#AABB97'
    return (
        <PlantFieldsContainer>
            {console.log(plant)}
            <PlantThumbnail key={plant.id}>
                <img src={plant.image_url} alt="" />
                <h2>{plant.common_name}</h2>
            </PlantThumbnail>
            <FieldsStyled>
                <Field>Family</Field>
                <Data>{plant.family}</Data>
                <Field>Zone</Field>
                <Data>{(plant.native = '-')}</Data>
                <Field>Maximum-height</Field>
                <Data>{(plant.maximum_height = '-')}</Data>
                <Field>Minimum-temperature</Field>
                <Data>{(plant.minimum_temperature = '-')}</Data>
                <Field>Soil texture</Field>
                <Data>{(plant.soil_texture = '-')}</Data>
                <Field>Edible</Field>
                <Data>{(plant.edible = true ? 'Yes' : 'No')}</Data>
                <Field>Growth months</Field>
                <Data>{(plant.growth_months = '-')}</Data>
                <Field>Days to harvest</Field>
                <Data>{(plant.days_to_harvest = '-')}</Data>
                <Text>{plant.description}</Text>
            </FieldsStyled>
        </PlantFieldsContainer>
    )
}

const PlantFieldsContainer = styled.section`
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    background-color: #f5f5f5;
    width: 100%;
    overflow: none;
    margin-top: 70px;
`

const PlantThumbnail = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    img {
        background-image: url(${logo});
        height: 100px;
        width: 156px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 5px;
    }
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
    opacity: 50%;
    line-height: 1.333;
    font-size: 75%;
    margin-top: 20px;
    margin-bottom: 10px;
`
