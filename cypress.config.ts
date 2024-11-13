import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'cswqvq',
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/**/*.ts',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
    },
  },
});
