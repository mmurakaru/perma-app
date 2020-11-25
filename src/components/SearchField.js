import styled from 'styled-components/macro'

export default function SearchField({ searchTerm, onType }) {
    return (
        <SearchFieldWrapper>
            <label htmlFor="Search">Search</label>
            <input
                id="Search"
                placeholder="Common plant name"
                type="text"
                value={searchTerm}
                onChange={(event) => onType(event.target.value)}
            />
        </SearchFieldWrapper>
    )
}

const SearchFieldWrapper = styled.div`
    position: relative;

    label {
        font-weight: 400;
        font-size: 0.6rem;
        opacity: 50%;
    }

    input {
        margin-top: 5px;
        border: 1px solid var(--mediumGrey);
        border-radius: 5px;
        width: 100%;
        height: 40px;
        padding-left: 10px;
        background: var(--white);
    }

    input:focus {
        outline: none;
        border-color: var(--mediumGreen);
    }

    input::placeholder {
        color: var(--darkGrey);
    }
`
