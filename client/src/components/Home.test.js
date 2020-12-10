import Home from './Home'
import { render } from '@testing-library/react'

describe('Home', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Home
                space={{
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
                }}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
