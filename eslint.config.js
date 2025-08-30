import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import config from "eslint-config-xo"
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort"

export default defineConfig([
  {
    ignores: ["package-lock.json"],
  },
  config,
  eslintConfigPrettier,
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^[A-Z]",
        },
      ],
      camelcase: [
        "error",
        {
          properties: "never",
        },
      ],
    },
  },
])
