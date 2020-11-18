import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import PlantThumbnail from './components/PlantThumbnail'
import getData from './services/getData'

function App() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        getData()
            .then((data) => {
                setPlants(data.data)
            })
            .catch((error) => console.log(error.message))
    }, [])

    return (
        <AppStyled>
            <ThumbnailWrapper>
                {plants.map(({ id, common_name, image_url }) => (
                    <PlantThumbnail
                        key={id}
                        name={common_name}
                        imgUrl={image_url}
                    />
                ))}
            </ThumbnailWrapper>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    height: 100vh;
`

const ThumbnailWrapper = styled.div`
    margin-top: 20px;
    height: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    place-items: center;
    gap: 20px;
    overflow: auto;
`
