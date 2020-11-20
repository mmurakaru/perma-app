import PlantsOverview from './PlantsOverview'
import { render } from '@testing-library/react'

describe('Overview', () => {
    it('renders correctly', () => {
        const { container } = render(
            <PlantsOverview
                plants={[
                    {
                        id: 1,
                        common_name: 'Coconut palm',
                        image_url: 'https://source.unsplash.com/random/life',
                    },
                    {
                        id: 2,
                        common_name: 'Strawberry',
                        image_url: 'https://source.unsplash.com/random/plant',
                    },
                ]}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
