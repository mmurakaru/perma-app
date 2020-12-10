import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import logo from '../assets/perma_logo.svg'
import { ReactComponent as Color } from '../assets/colorelement_2.svg'

PlantsOverview.propTypes = {
    plants: PropTypes.array,
}

export default function PlantsOverview({ plants, handleClick }) {
    return (
        <>
            <ColorElement />
            <ThumbnailWrapper>
                {plants.length > 0 ? (
                    plants?.map(({ id, common_name, image_url }) => (
                        <PlantThumbnail
                            onClick={() => handleClick(id)}
                            key={id}
                        >
                            <img src={image_url} alt="" />
                            <h2>{common_name}</h2>
                        </PlantThumbnail>
                    ))
                ) : (
                    <ErrorMsgStyled>
                        Whoops! We couldn't find the plant you were looking for.
                    </ErrorMsgStyled>
                )}
            </ThumbnailWrapper>
        </>
    )
}

const ColorElement = styled(Color)`
    width: 180px;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -1;
`

const PlantThumbnail = styled.section`
    img {
        height: 100px;
        width: 156px;
        object-fit: cover;
        border-radius: 5px;
        background: var(--dark-grey);
        background-image: url(${logo});
        background-repeat: no-repeat;
    }
`

const ThumbnailWrapper = styled.div`
    margin-top: 20px;
    height: 71vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    place-items: center;
    gap: 20px;
    overflow: auto;
`

const ErrorMsgStyled = styled.h2`
    position: absolute;
    color: var(--medium-green);
`
