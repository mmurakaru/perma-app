import SpaceDetails from './SpaceDetails'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SpaceDetails', () => {
    it('renders correctly', () => {
        const { container } = render(
            <SpaceDetails
                plant={{
                    image_url:
                        'https://bs.floristic.org/image/o/63073d2fbf45b90701279405ecc2eec0272906ed',
                }}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('calls onClick', () => {
        const onClickMock = jest.fn()
        const { getByTestId } = render(
            <SpaceDetails
                switchToSpaceOverview={onClickMock}
                plant={{
                    image_url:
                        'https://bs.floristic.org/image/o/63073d2fbf45b90701279405ecc2eec0272906ed',
                }}
            />
        )
        userEvent.click(getByTestId('ArrowDown'), 'Coconut')
        expect(onClickMock).toHaveBeenCalled()
    })
})
