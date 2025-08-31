/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  rules: {
    "color-hex-length": "long",
    "scss/dollar-variable-pattern": null,
    "custom-property-pattern": null,
    "selector-class-pattern": [
      "^[a-z0-9]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--[a-z0-9]+)?$",
      {
        message:
          "Expected class selector to be BEM-style (block__element--modifier)",
      },
    ],
  },
}
