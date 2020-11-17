import PlantThumbnail from './PlantThumbnail'
import { render } from '@testing-library/react'

describe('PlantThumbnail', () => {
    it('renders correctly', () => {
        const { container } = render(
            <PlantThumbnail
                name="Strawberyy"
                imgUrl="https://source.unsplash.com/random"
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
