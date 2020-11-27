import styled from 'styled-components/macro'

export default function PageHeader() {
    return (
        <HeaderWrapper>
            <h1>Overview</h1>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 20px;
    margin-bottom: 20px;
`
