module.exports = {
  locales: ["en", "ar"], // Array with the languages that you want to use
  defaultLocale: "ar", // Default language of your website
  localeDetection: false,
  pages: {
    "*": ["common", "navbar", "footer"],
    "/": ["home-page"],
    "/advance-search": ["advance-search"],
    "/courses": ["courses", "advance-search"],
    "/instructors": ["instructors", "advance-search"],
    "/login": ["login", "registration"],
    "/registration": ["registration", "otp", "login"],
  },
};
