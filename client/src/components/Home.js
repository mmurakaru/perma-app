import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { ReactComponent as Illustration } from '../assets/illustration.svg'

Home.propTypes = {
    space: PropTypes.object,
}

export default function Home({ space }) {
    return (
        <>
            <IllustrationStyled />
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

const IllustrationStyled = styled(Illustration)`
    width: 180px;
    position: absolute;
    top: 0px;
    right: 0px;
`

const PlantsWrapper = styled.div`
    margin-top: 70%;
    overflow: auto;
    height: 50vh;
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
