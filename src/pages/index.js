import React, {useReducer} from "react"
import Main from "../App"
import SEO from '../components/seo/Seo'
import './index.css';
import 'weathericons/css/weather-icons.min.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/Theme';
import { GlobalStyles } from '../theme/Gobal';
import Context from "../theme/Context";
import reducer from "../theme/Reducer";
import preferences from "../theme/Preferences";
import Helmet from 'react-helmet';

const IndexPage = () => {
    const isDark = preferences.Get()
    const [ state, dispatch ] = useReducer(reducer, { isDark });

    console.log(state);

    return (
        <>
            <SEO />
            <Context.Provider value={{ state, dispatch }}>
                <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
                    {state.isDark && <Helmet>
                        <meta name="theme-color" content="#090c11" data-react-helmet="true" />
                        </Helmet>}
                    <>
                        <GlobalStyles />
                        <Main />
                    </>
                </ThemeProvider>
            </Context.Provider>
        </>
    )
}

export default IndexPage
