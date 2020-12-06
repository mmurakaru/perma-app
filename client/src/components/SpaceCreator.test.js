import SpaceCreator from './SpaceCreator'
import { render } from '@testing-library/react'

describe('SpaceCreator', () => {
    const testFunction = () => true
    it('renders correctly', () => {
        const { container } = render(
            <SpaceCreator
                submitDisabled={true}
                updateTitle={testFunction}
                submitHandler={testFunction}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
