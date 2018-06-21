const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "This is the Title of the page", // <title>
  shortSiteTitle: "This is Title again, maybe end one", // <title> ending for posts and pages
  siteDescription: "Here is the description of what I'm doing",
  siteUrl: "https://www.regionalkinetics.com",
  pathPrefix: "",
  siteImage: "preview.jpg", // Where is this image located?
  siteLanguage: "en",
  // author
  authorName: "David Davidian",
  authorTwitterAccount: "example",
  // info
  infoTitle: "Regional Kinetics",
  infoTitleNote: "",
  // manifest.json
  manifestName: "Serving Regional Policy Makers",
  manifestShortName: "Blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "info@regionalkinetics.com",
  // social
  authorSocialLinks: [
    { name: "twitter", url: "https://twitter.com/example" },
    { name: "facebook", url: "http://facebook.com/example" }
  ]
};
