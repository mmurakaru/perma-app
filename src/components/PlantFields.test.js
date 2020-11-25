import PlantFields from './PlantFields'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('PlantFields', () => {
    it('renders correctly', () => {
        const { container } = render(
            <PlantFields
                plant={{
                    id: 183086,
                    common_name: 'European mountain ash',
                    image_url:
                        'https://bs.floristic.org/image/o/63073d2fbf45b90701279405ecc2eec0272906ed',
                    family: 'Rosaceae',
                    specifications: {
                        average_height: {
                            cm: 300,
                        },
                    },
                    growth: {
                        description: 'Lorem ipsum',
                        sowing: 'Lorem ipsum',
                        days_to_harvest: 60,
                        row_spacing: {
                            cm: 30,
                        },
                        light: 7,
                        atmospheric_humidity: 5,
                        minimum_temperature: {
                            deg_c: -36,
                        },
                        soil_texture: 4,
                    },
                }}
                isLoaded={true}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    const onClickMock = jest.fn()

    it('calls onClick', () => {
        const { getByTestId } = render(
            <PlantFields backToOverview={onClickMock} />
        )
        userEvent.click(getByTestId('ArrowDown'), 'Coconut')
        expect(onClickMock).toHaveBeenCalled()
    })
})
