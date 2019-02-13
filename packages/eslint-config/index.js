module.exports = {
  extends: [
    "@masonite/eslint-config-base",
    "@masonite/eslint-config-base/rules/strict",
    "./rules/react",
    "./rules/react-a11y"
  ].map(require.resolve),
  rules: {}
};
