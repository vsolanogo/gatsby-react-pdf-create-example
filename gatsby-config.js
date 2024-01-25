require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `The Software`,
    description: `The Software`,
    author: `The Software`,
    siteUrl: `https://mulhollandbot.site`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pdf Creator`,
        short_name: `Pdf Creator`,
        description: `Pdf Creator`,
        lang: `en`,
        background_color: `#95b6d0`,
        theme_color: `#95b6d0`,
        display: `standalone`,
        icon: `./src/images/favicon.png`,
        start_url: `/`,
        cache_busting_mode: 'none',

        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: `Montserrat`,
    //           subsets: [`latin`],
    //           variants: [`300`, `400`, `500`, `600`, `700`],
    //           strategy: 'selfHosted',
    //         },
    //         {
    //           family: `Montserrat`,
    //           subsets: [`Cyrillic`],
    //           variants: [`400`, `500`],
    //           strategy: 'selfHosted',
    //         },
    //         {
    //           family: `Roboto`,
    //           subsets: [`Cyrillic`],
    //           variants: [`400`, `500`, `700`],
    //           strategy: 'selfHosted',
    //         },

    //         {
    //           family: `Heebo`,
    //           subsets: [`Cyrillic`],
    //           variants: [`400`, `500`],
    //           strategy: 'selfHosted',
    //         },
    //         {
    //           family: `Heebo`,
    //           subsets: [`latin`],
    //           variants: [`300`, `400`, `500`, `600`, `700`, `800`],
    //           strategy: 'selfHosted',
    //         },
    //       ],
    //     },
    //     useMinify: true,
    //     usePreload: false,
    //   },
    // },

    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: false,
        autoLabel: 'never',
        cssPropOptimization: true,
      },
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
