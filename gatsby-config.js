module.exports = {
  siteMetadata: {
    title: `Scavettapps Homepage`,
    description: `The official homepage of Scavettapps. Owned and created by Vincent Scavetta.`,
    author: `Vincent Scavetta`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `scavettapps-homepage`,
        short_name: `scavettapps`,
        start_url: `/`,
        background_color: `#5f4d93`,
        theme_color: `#5f4d93`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
