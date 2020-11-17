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
}

input, textarea, button, select {
    font-size: 1em;
}


h1 {
    color: #fff;
}`
