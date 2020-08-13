module.exports = {
  root: true,
  extends: [
    "@react-native-community", // https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme

    "eslint:recommended", // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "plugin:prettier/recommended", // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "prettier/react",
    "prettier/standard",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: ".",
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-empty-pattern": "off",
  },
};
