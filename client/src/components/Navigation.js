import styled from 'styled-components/macro'
import { ReactComponent as Spaces } from '../assets/spaces.svg'
import { ReactComponent as Overview } from '../assets/overview.svg'
import { ReactComponent as Home } from '../assets/home.svg'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavLink
                exact
                to="/"
                activeStyle={{
                    fill: 'var(--dark-green)',
                }}
            >
                <HomeIcon />
            </NavLink>
            <NavLink activeStyle={{ fill: 'var(--dark-green)' }} to="/Overview">
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
    justify-content: space-around;
    height: 7%;
    position: fixed;
    padding: 10px 20px;
    width: 100%;
    max-width: 450px;
`
const SpacesIcon = styled(Spaces)`
    width: 25px;
`
const OverviewIcon = styled(Overview)`
    width: 25px;
`
const HomeIcon = styled(Home)`
    width: 25px;
`
