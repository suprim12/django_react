import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const AboutPage = () => {
    return (
        <div>
            <Helmet>
                <title>AboutPage - Test React App</title>
            </Helmet>
            AboutPage
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default AboutPage
