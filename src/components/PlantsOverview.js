import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import logo from '../assets/perma_logo.svg'
import { Link } from 'react-router-dom'

PlantsOverview.propTypes = {
    plants: PropTypes.array,
}

export default function PlantsOverview({ plants, handleClick }) {
    document.body.style.backgroundColor = '#F5F5F5'
    return (
        <ThumbnailWrapper>
            {plants.length > 0 ? (
                plants?.map(({ id, common_name, image_url }) => (
                    <Link to="/plant" className="link">
                        <PlantThumbnail
                            onClick={() => handleClick(id)}
                            key={id}
                        >
                            <img src={image_url} alt="" />
                            <h2>{common_name}</h2>
                        </PlantThumbnail>
                    </Link>
                ))
            ) : (
                <ErrorMsgStyled>
                    Whoops! We couldn't find the plant you were looking for.
                </ErrorMsgStyled>
            )}
        </ThumbnailWrapper>
    )
}

const PlantThumbnail = styled.section`
    img {
        height: 100px;
        width: 156px;
        object-fit: cover;
        border-radius: 5px;
        background: #4a4a4a;
        background-image: url(${logo});
        background-repeat: no-repeat;
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

    .link {
        color: #4a4a4a;
        text-decoration: none;
    }
`

const ErrorMsgStyled = styled.h2`
    position: absolute;
    color: #aabb97;
`
