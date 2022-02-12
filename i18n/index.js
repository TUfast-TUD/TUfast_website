var en = require("./translations.en.json");
var de = require("./translations.de.json");

const i18n = {
  translations: {
    en,
    de,
  },
  defaultLang: "de",
  useBrowserDefault: true,
};

module.exports = i18n;
