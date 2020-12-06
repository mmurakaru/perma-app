import SpacesOverview from './SpacesOverview'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SpacesOverview', () => {
    it('renders correctly', () => {
        const { container } = render(
            <SpacesOverview spaces={['Vegetables', 'Fruits']} />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    const onClickMock = jest.fn()

    it('calls onClick', () => {
        const { getByTestId } = render(
            <SpacesOverview
                switchToPlantFields={onClickMock}
                spaces={['Vegetables', 'Fruits']}
            />
        )
        userEvent.click(getByTestId('ArrowDown'), 'Coconut')
        expect(onClickMock).toHaveBeenCalled()
    })
})
