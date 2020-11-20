import PageHeader from './PageHeader'
import { render } from '@testing-library/react'

describe('PageHeader', () => {
    it('renders correctly', () => {
        const { container } = render(<PageHeader />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
