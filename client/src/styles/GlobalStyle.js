import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
    box-sizing: border-box;
}

:root {
    font-size: 112.5%;

    --white: #F5F5F5;
    --lightGrey: #E8E8E8;
    --mediumGrey: #D6D6D6;
    --darkGrey: #4A4A4A;
    --lightGreen: #DCEDC8;
    --mediumGreen: #AABB97;
    --darkGreen: #003300;
}

body {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    min-width: 375px;
    max-width: 450px;
    background: var(--white);
    color: var(--darkGrey);
}
h1 {
    font-weight: 600;
    font-size: 1.4rem;
    margin: 0;
}

h2 {
        font-weight: 500;
        font-size: 0.8rem;
        margin: 0;
    }
`
