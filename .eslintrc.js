module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "react-app",
    "plugin:react-perf/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    include: [
      "src/**/*.tsx",
      "src/**/*.ts"
    ],
    exclude: [
      "public/*",
      "src/**/*.d.tsx"
    ],
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    "import/extensions": [
      ".js",
      ".ts",
      ".tsx"
    ],
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [
          ".tsx",
        ]
      }
    ],
    "@typescript-eslint/no-unused-vars" : [
      "warn"
    ],
    "@typescript-eslint/camelcase": [
      "error",
      { properties: "never" }
    ],
    "@typescript-eslint/no-var-requires": [
      "warn"
    ],
    "key-spacing": [
      "error",
      { align: "value"
      }
    ],
    "react/prop-types": [
      "off"
    ],
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "max-classes-per-file": [
      "off"
    ]
  }
};
