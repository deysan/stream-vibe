/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  rules: {
    "color-hex-length": "long",
    "scss/dollar-variable-pattern": null,
  },
}
