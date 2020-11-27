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
                        image_url:
                            'https://bs.floristic.org/image/o/63073d2fbf45b90701279405ecc2eec0272906ed',
                    },
                    {
                        id: 2,
                        common_name: 'Strawberry',
                        image_url:
                            'https://bs.floristic.org/image/o/63073d2fbf45b90701279405ecc2eec0272906ed',
                    },
                ]}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
