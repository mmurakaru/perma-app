import styled from 'styled-components/macro'

export default function PlantThumbnail({ imgUrl, name }) {
    return (
        <Thumbnail>
            <img src={imgUrl} alt="" />
            <h2>{name}</h2>
        </Thumbnail>
    )
}

const Thumbnail = styled.div`
    img {
        max-width: 100%;
        border-radius: 5px;
    }

    h2 {
        font-weight: 500;
    }
`
