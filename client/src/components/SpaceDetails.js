import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { ReactComponent as ArrowIcon } from '../assets/arrow_down.svg'
import { ReactComponent as Sunflower } from '../assets/sunflower.svg'

SpaceDetails.propTypes = {
    space: PropTypes.object,
    switchToPreviousPage: PropTypes.func,
}

export default function SpaceDetails({ space, switchToPreviousPage }) {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()
    today = dd + '.' + mm + '.' + yyyy

    return (
        <BackgroundStyled>
            <ArrowDown data-testid="ArrowDown" onClick={switchToPreviousPage} />
            <DetailsContainer>
                <SpaceWrapper>
                    <SpaceIcon>
                        <LogoStyled />
                    </SpaceIcon>
                    <h2>{space.spaceTitle}</h2>
                </SpaceWrapper>
                <PlantsWrapper>
                    {space.plants.map((plant) => (
                        <Plant key={uuidv4()}>
                            <PlantImage src={plant.image_url} alt="" />
                            <PlantInfo>
                                <h2>{plant.common_name}</h2>
                                <span>{today}</span>
                            </PlantInfo>
                        </Plant>
                    ))}
                </PlantsWrapper>
            </DetailsContainer>
        </BackgroundStyled>
    )
}

const PlantsWrapper = styled.div`
    margin: 60px 0 60px;
    overflow: auto;
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

const BackgroundStyled = styled.div`
    background: var(--medium-green);
    width: 100%;
    height: 100%;
    padding-top: 150px;
`

const ArrowDown = styled(ArrowIcon)`
    fill: var(--white);
    width: 20px;
    position: absolute;
    left: 20px;
    top: 20px;
`

const DetailsContainer = styled.section`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px;
    background-color: var(--white);
    width: 100%;
    overflow: none;
    position: relative;
    height: 100%;
`

const SpaceIcon = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    border: none;
    background-color: var(--light-green);
`
const LogoStyled = styled(Sunflower)`
    width: 80%;
`

const SpaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -50px;
    h2 {
        margin: 3px 0;
        opacity: 50%;
    }
`
