const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const createBundler=require("@bahmutov/cypress-esbuild-preprocessor");
const createESbuildPlugin=require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern:"cypress/features/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
     preprocessor.addCucumberPreprocessorPlugin(on,config);
      on("file:preprocessor", createBundler({
        plugins:[createESbuildPlugin(config)]
      }));
      return config;
    },
  },
  watchForFileChanges:true
});
