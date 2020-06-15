import React from "react"
import Main from "../App"
import SEO from '../components/seo/Seo'
import './index.css';
import 'weathericons/css/weather-icons.min.css';

const IndexPage = () => {
    return (
        <>
            <SEO />
            <Main />        
        </>
    )
}

export default IndexPage
