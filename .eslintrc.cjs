module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    camelcase: 0,
    "import/prefer-default-export": 0,
    "max-len": ["error", { code: 200 }],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-bitwise": 0,
    "@typescript-eslint/no-explicit-any": ["off"],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"],
      },
    ],
    "vue/require-v-for-key": 0,
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
