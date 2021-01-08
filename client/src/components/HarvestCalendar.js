import { useState } from 'react'
import styled from 'styled-components/macro'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

HarvestCalendar.propTypes = {
    space: PropTypes.object,
}

export default function HarvestCalendar({ space }) {
    const [value, onChange] = useState(new Date())
    return (
        <>
            <CalendarContainer>
                <CalendarStyled onChange={onChange} value={value} />
            </CalendarContainer>
            <PlantsWrapper>
                {space !== undefined && <h2>Recently planted</h2>}
                {space !== undefined &&
                    space.plants.map((plant) => (
                        <Plant key={uuidv4()}>
                            <PlantImage src={plant.image_url} alt="" />
                            <PlantInfo>
                                <h2>{plant.common_name}</h2>
                                <span>{space.date}</span>
                            </PlantInfo>
                        </Plant>
                    ))}
            </PlantsWrapper>
        </>
    )
}

const CalendarContainer = styled.div`
    margin-top: 50px;
`
const CalendarStyled = styled(Calendar)`
    background: var(--light-grey);
    padding: 5px;
    border-radius: 6px;
    border: none;

    .react-calendar__tile--active {
        background: var(--dark-green);
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: var(--medium-green);
    }
`

const PlantsWrapper = styled.div`
    margin-top: 10%;
    overflow: auto;
    height: 30vh;
`

const Plant = styled.div`
    border: 0.2px solid var(--medium-grey);
    border-radius: 6px;
    padding: 5px 0 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;
`

const PlantInfo = styled.div`
    margin-left: 20px;
    display: grid;
    grid-template: column;
    gap: 5px;

    h2 {
        font-weight: 400;
        font-size: 0.8rem;
    }

    span {
        font-size: 0.6rem;
        font-weight: 200;
    }
`

const PlantImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
`
