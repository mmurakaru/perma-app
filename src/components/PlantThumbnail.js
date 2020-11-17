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
        height: 100px;
        width: 146px;
        border-radius: 5px;
    }
    h2 {
        font-weight: 500;
        font-size: 0.8rem;
    }
`
