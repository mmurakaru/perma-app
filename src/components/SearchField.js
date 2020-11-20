import styled from 'styled-components/macro'

export default function SearchField({ searchTerm, onType }) {
    return (
        <SearchFieldWrapper>
            <label htmlFor="Search">Search</label>
            <input
                id="Search"
                placeholder="type in a scientific, common or synonym name"
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
        font-weight: 500;
        font-size: 0.8rem;
    }

    input {
        margin-top: 5px;
        border: 1px solid #4a4a4a;
        border-radius: 5px;
        width: 100%;
        height: 40px;
        padding-left: 10px;
        background: whitesmoke;
    }

    input::placeholder {
        color: #4a4a4a;
        opacity: 1;
    }
`
