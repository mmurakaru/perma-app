import SpaceOverview from './SpaceOverview'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SpaceOverview', () => {
    it('renders correctly', () => {
        const { container } = render(
            <SpaceOverview spaceTitles={['Vegetables', 'Fruits']} />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    const onClickMock = jest.fn()

    it('calls onClick', () => {
        const { getByTestId } = render(
            <SpaceOverview
                switchToPlantFields={onClickMock}
                spaceTitles={['Vegetables', 'Fruits']}
            />
        )
        userEvent.click(getByTestId('ArrowDown'), 'Coconut')
        expect(onClickMock).toHaveBeenCalled()
    })
})
