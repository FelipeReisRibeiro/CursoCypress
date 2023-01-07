const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qj72x5",
  viewportHeight: 880,
  viewportWidth: 1280,

  e2e: {
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
