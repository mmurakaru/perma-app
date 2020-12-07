import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navigation from './Navigation'
import 'jest-styled-components'

describe('Navigation', () => {
    it('has links to all pages', () => {
        const urls = ['/', '/Overview', '/Spaces']

        const { getAllByRole } = render(
            <Router>
                <Navigation />
            </Router>
        )

        getAllByRole('link').forEach((link) => {
            expect(urls).toContain(link.getAttribute('href'))
        })
    })

    it('renders correctly', () => {
        const { container } = render(
            <Router>
                <Navigation />
            </Router>
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
