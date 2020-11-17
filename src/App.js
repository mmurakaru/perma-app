import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import ThumbnailWrapper from './components/ThumbnailWrapper'
import PlantThumbnail from './components/PlantThumbnail'
import getData from './services/getData'

function App() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        getData().then((data) => {
            console.log(data.data)
            setPlants(data.data)
        })
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
    overflow: hidden;
`
