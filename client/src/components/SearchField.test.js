import SearchField from './SearchField'
import user from '@testing-library/user-event'
import { render } from '@testing-library/react'

describe('SearchField', () => {
    const onTypeMock = jest.fn()

    it('calls onType with correct data', () => {
        const { getByLabelText } = render(
            <SearchField onType={onTypeMock} searchTerm={''} />
        )
        user.type(getByLabelText('Search'), 'Coconut')
        expect(onTypeMock).toHaveBeenCalled()
    })
})
