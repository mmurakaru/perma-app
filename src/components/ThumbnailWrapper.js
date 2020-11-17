import styled from 'styled-components/macro'

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

export default ThumbnailWrapper
