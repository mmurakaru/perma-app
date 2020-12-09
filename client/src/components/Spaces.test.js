import Spaces from './Spaces'
import { render } from '@testing-library/react'

describe('SpacesOverview', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Spaces
                spaces={[
                    {
                        id: 1234,
                        spaceTitle: 'spaceTitle',
                        plants: [
                            {
                                common_name: 'Pine',
                                image_url: 'https',
                                family: 'Trees',
                            },
                        ],
                        date: '20.12.2020',
                    },
                    {
                        id: 4321,
                        spaceTitle: 'spaceTitle',
                        plants: [
                            {
                                common_name: 'Strawberry',
                                image_url: 'https',
                                family: 'Fruits',
                            },
                        ],
                        date: '18.12.2020',
                    },
                ]}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
