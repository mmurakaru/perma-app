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
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    position: fixed;
    bottom: 0;
    height: 7%;
    width: 100%;
    max-width: 450px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-evenly;
    fill: var(--white);
`
const SpacesIcon = styled(Spaces)`
    width: 30px;
`
const OverviewIcon = styled(Overview)`
    width: 30px;
`
