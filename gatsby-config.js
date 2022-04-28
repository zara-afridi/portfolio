module.exports = {
  siteMetadata: {
    title: `Zara Afridi`,
    description: 'Zara Afridi - Software Developer',
    siteUrl: `https://zaraafridi.netlify.app/`,
    image: '/images/headshot.jpg'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss', 
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ZaraAfridi',
        short_name: 'ZaraAfridi',
        start_url: '/',
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/jobs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
};