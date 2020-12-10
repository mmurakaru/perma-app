import SpacesOverview from './SpacesOverview'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SpacesOverview', () => {
    it('renders correctly', () => {
        const { container } = render(
            <SpacesOverview
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

    const onClickMock = jest.fn()

    it('calls onClick', () => {
        const { getByTestId } = render(
            <SpacesOverview
                switchToPlantFields={onClickMock}
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
        userEvent.click(getByTestId('ArrowDown'), 'Coconut')
        expect(onClickMock).toHaveBeenCalled()
    })
})
