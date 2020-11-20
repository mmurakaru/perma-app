import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
    box-sizing: border-box;
}

:root {
    font-size: 112.5%;
}

body {
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
