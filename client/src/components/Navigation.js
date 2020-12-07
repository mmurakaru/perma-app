import styled from 'styled-components/macro'
import { ReactComponent as Spaces } from '../assets/spaces.svg'
import { ReactComponent as Overview } from '../assets/overview.svg'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavLink activeStyle={{ fill: 'var(--dark-green)' }} exact to="/">
                <OverviewIcon />
            </NavLink>
            <NavLink
                to="/Spaces"
                activeStyle={{
                    fill: 'var(--dark-green)',
                }}
            >
                <SpacesIcon />
            </NavLink>
        </NavigationContainer>
    )
}

const NavigationContainer = styled.section`
    background-color: #cfd8c6;
    bottom: 0;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    display: flex;
    fill: var(--white);
    justify-content: space-evenly;
    height: 7%;
    position: fixed;
    padding: 10px 20px;
    width: 100%;
    max-width: 450px;
`
const SpacesIcon = styled(Spaces)`
    width: 30px;
`
const OverviewIcon = styled(Overview)`
    width: 30px;
`
