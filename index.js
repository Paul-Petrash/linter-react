module.exports = {
  extends: [
    'eslint-config-linter',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
