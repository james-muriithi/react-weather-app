import React from "react"
import Main from "../App"
import SEO from '../components/seo/Seo'
import { injectGlobal } from 'styled-components';
import 'weathericons/css/weather-icons.min.css';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const IndexPage = () => {
    return (
        <>
            <SEO />
            <Main />        
        </>
    )
}

export default IndexPage
