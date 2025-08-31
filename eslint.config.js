import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import config from "eslint-config-xo"
import pluginReact from "eslint-plugin-react"
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"

export default defineConfig([
  {
    ignores: ["package-lock.json"],
  },
  config,
  eslintConfigPrettier,
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
      react: pluginReact,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "react/jsx-sort-props": "warn",
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
      "no-new": "off",
    },
  },
])
