import Spaces from './Spaces'
import { render } from '@testing-library/react'

describe('SpacesOverview', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Spaces spaces={['Vegetables', 'Fruits']} />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
