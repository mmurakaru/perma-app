import { useState } from 'react'
import styled from 'styled-components/macro'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function HarvestCalendar() {
    const [value, onChange] = useState(new Date())
    return (
        <CalendarContainer>
            <Calendar onChange={onChange} value={value} />
        </CalendarContainer>
    )
}

const CalendarContainer = styled.div`
    margin-top: 50px;
`
