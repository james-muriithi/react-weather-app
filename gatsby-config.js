require('dotenv').config()

module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        title: `React Wather App`,
        description: `PWA Weather Application made with React/Material Ui/Gatsby.This is a personal project built in my spare time for learning purposes.`,
        author: `James Muriithi <muriithijames556@gmail.com>`,
        siteUrl: `https://james-muriithi.github.io/react-weather-app/`,
        siteLanguage: `en`,
        ogLanguage: `en`,
        headline: `React Wather App`,
        twitter: `@jam_es_muriithi`,
        facebook: `james-muriithi`,
        banner: `/me-icon.jpg`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `React Weather App`,
                short_name: `Weather App`,
                start_url: `/`,
                background_color: `#4c04a6`,
                theme_color: `#3e0080`,
                display: `standalone`,
                icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-advanced-sitemap`,
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [ `/` ],
            },
        }
    ],
}