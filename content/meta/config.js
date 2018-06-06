const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "This is the Title of the page", // <title>
  shortSiteTitle: "This is Title again, maybe end one", // <title> ending for posts and pages
  siteDescription: "Here is the description of what I'm doing",
  siteUrl: "https://www.sololearn.com",
  pathPrefix: "",
  siteImage: "preview.jpg", // Where is this image located?
  siteLanguage: "en",
  // author
  authorName: "Aaron Sarkissian",
  authorTwitterAccount: "aaronsarkissian",
  // info
  infoTitle: "aaron sarkissian",
  infoTitleNote: "test blog",
  // manifest.json
  manifestName: "This is the Title of the page",
  manifestShortName: "TestBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "aaronsarkissian@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/aaronsarkissian" },
    { name: "twitter", url: "https://twitter.com/aaronsarkissian" },
    { name: "facebook", url: "http://facebook.com/aaronsarkissian" }
  ]
};
