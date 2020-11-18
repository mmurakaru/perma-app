import PlantOverview from './PlantOverview'
import { render } from '@testing-library/react'

describe('Overview', () => {
    it('renders correctly', () => {
        const { container } = render(
            <PlantOverview
                id={1}
                common_name="Strawberry"
                image_url="https://source.unsplash.com/random"
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
