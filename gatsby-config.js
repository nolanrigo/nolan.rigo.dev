module.exports = {
  siteMetadata: {
    siteUrl: "https://nolan.rigo.dev",
  },
  plugins: [
    "gatsby-plugin-cname",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-crisp-chat",
      options: {
        websiteId: process.env.CRISP_WEBSITE_ID,
        enableDuringDevelop: false,
        defer: true,
      },
    },
  ],
};
