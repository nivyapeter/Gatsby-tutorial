/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects1`,
        path: `${__dirname}/src/projects1/`,
      },
    },
  ],
  siteMetadata: {
    title:'hai all',
    description:'web dev portfolio',
    copyright:'This website is copyright 2021 web warrior'
  }
}
