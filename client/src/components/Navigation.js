import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as Home } from '../assets/home.svg'
import { ReactComponent as Overview } from '../assets/overview.svg'
import { ReactComponent as Spaces } from '../assets/spaces.svg'

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavLink
                className="link"
                exact
                to="/"
                style={{ fill: '#F5F5F5' }}
                activeStyle={{
                    fill: 'var(--dark-green)',
                    color: 'var(--dark-green)',
                }}
            >
                <LinkWrapper>
                    <HomeIcon />
                    <LinkText>Home</LinkText>
                </LinkWrapper>
            </NavLink>
            <NavLink
                className="link"
                style={{ fill: '#F5F5F5' }}
                activeStyle={{
                    fill: 'var(--dark-green)',
                    color: 'var(--dark-green)',
                }}
                to="/Overview"
            >
                <LinkWrapper>
                    <OverviewIcon />
                    <LinkText>Add plant</LinkText>
                </LinkWrapper>
            </NavLink>
            <NavLink
                className="link"
                to="/Spaces"
                style={{ fill: '#F5F5F5' }}
                activeStyle={{
                    fill: 'var(--dark-green)',
                    color: 'var(--dark-green)',
                }}
            >
                <LinkWrapper>
                    <SpacesIcon />
                    <LinkText>Spaces</LinkText>
                </LinkWrapper>
            </NavLink>
        </NavigationContainer>
    )
}

const NavigationContainer = styled.nav`
    background-color: var(--medium-green);
    bottom: 0;
    display: flex;
    fill: var(--white);
    justify-content: space-around;
    height: 8%;
    position: fixed;
    padding: 10px 20px;
    width: 100%;
    max-width: 450px;

    .link {
        text-decoration: none;
        color: var(--white);
    }
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

const LinkText = styled.span`
    font-size: 8px;
`
const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
