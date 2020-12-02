import styled from 'styled-components/macro'
import { ReactComponent as ArrowIcon } from '../assets/arrow_down.svg'
import { ReactComponent as Banana } from '../assets/banana.svg'

export default function SpaceDetails({
    spaceDetails,
    plant,
    backToSpaceCreatorPage,
}) {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()
    today = dd + '.' + mm + '.' + yyyy

    return (
        <BackgroundStyled>
            <ArrowDown onClick={backToSpaceCreatorPage} />
            <DetailsConainer>
                <SpaceWrapper>
                    <SpaceIcon>
                        <LogoStyled />
                    </SpaceIcon>
                    <h2>{spaceDetails}</h2>
                </SpaceWrapper>
                <PlantsWrapper>
                    <Plant>
                        <PlantImage src={plant.image_url} alt="" />
                        <PlantInfo>
                            <h2>{plant.common_name}</h2>
                            <span>{today}</span>
                        </PlantInfo>
                    </Plant>
                </PlantsWrapper>
            </DetailsConainer>
        </BackgroundStyled>
    )
}

const PlantsWrapper = styled.div`
    margin-top: 60px;
    height: 80px;
`

const Plant = styled.div`
    border: 0.2px solid var(--mediumGrey);
    border-radius: 6px;
    padding: 5px 0 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    background: var(--mediumGreen);
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

const DetailsConainer = styled.section`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
    background-color: var(--lightGreen);
`
const LogoStyled = styled(Banana)`
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
