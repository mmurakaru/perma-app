import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

export default function SearchField({ filterPlants }) {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        filterPlants(searchTerm)
    }, [searchTerm])

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }
    return (
        <SearchFieldWrapper>
            <label htmlFor="searchInput">Search</label>
            <input
                id="searchInput"
                placeholder="type in a scientific, common or synonym name"
                type="text"
                value={searchTerm}
                onChange={handleChange}
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
