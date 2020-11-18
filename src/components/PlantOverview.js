import styled from 'styled-components/macro'

export default function PlantOverview({ plants }) {
    return (
        <ThumbnailWrapper>
            {plants?.map(({ id, common_name, image_url }) => (
                <PlantThumbnail key={id}>
                    <img src={image_url} alt="" />
                    <h2>{common_name}</h2>
                </PlantThumbnail>
            ))}
        </ThumbnailWrapper>
    )
}

const PlantThumbnail = styled.section`
    img {
        height: 100px;
        width: 156px;
        object-fit: cover;
        border-radius: 5px;
    }
`

const ThumbnailWrapper = styled.div`
    margin-top: 20px;
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    place-items: center;
    gap: 20px;
    overflow: auto;
`
