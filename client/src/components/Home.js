import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { ReactComponent as Add } from '../assets/add.svg'
import { ReactComponent as Illustration } from '../assets/illustration.svg'
import { Link } from 'react-router-dom'

Home.propTypes = {
    space: PropTypes.object,
}

export default function Home({ space }) {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()
    today = dd + '.' + mm + '.' + yyyy

    return (
        <>
            <HomeContainer>
                <Link className="link" to="/Overview">
                    <AddWrapper>
                        <AddIcon />
                        <h2>Add plant</h2>
                    </AddWrapper>
                </Link>
                <IllustrationStyled />
            </HomeContainer>
            <PlantsWrapper>
                <h2>Recently planted</h2>
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
        </>
    )
}

const HomeContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    .link {
        text-decoration: none;
        color: inherit;
    }
`

const IllustrationStyled = styled(Illustration)`
    width: 150px;
`

const AddIcon = styled(Add)`
    width: 100px;
    margin-bottom: 5px;
`
const AddWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PlantsWrapper = styled.div`
    margin-top: 50px;
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
