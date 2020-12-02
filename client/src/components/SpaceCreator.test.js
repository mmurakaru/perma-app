import SpaceCreator from './SpaceCreator'
import { render } from '@testing-library/react'

describe('SpaceCreator', () => {
    it('renders correctly', () => {
        const { container } = render(<SpaceCreator submitDisabled={true} />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
