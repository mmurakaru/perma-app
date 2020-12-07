import React from 'react'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'

export default function StyleWrapper({ children }) {
    return (
        <Router>
            <div>
                <GlobalStyle />
                {children}
            </div>
        </Router>
    )
}
