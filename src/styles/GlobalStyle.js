import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-size: 112.5%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    min-width: 375px;
    max-width: 450px;
    padding: 20px;
    background: whitesmoke;
    overflow: hidden;
    color: #4a4a4a;
}

h2 {
        font-weight: 500;
        font-size: 0.8rem;
        margin: 0;
    }
`