module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  "extends": ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    // Possible Errors
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": ["error", { "enforceForLogicalOperands": true }],
    "no-extra-parens": ["error", "functions"],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": ["error", { "skipStrings": false }],
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-unreachable-loop": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": ["error", { "enforceForOrderingRelations": true }],
    "no-unsafe-optional-chaining": ["error", { "disallowArithmeticOperators": true }],
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-typeof": ["error", { "requireStringLiterals": true }],

    // Best Practices
    "accessor-pairs": "error",
    "block-scoped-var": "warn",
    "consistent-return": "warn",
    "curly": ["error", "all"],
    "default-case-last": "error",
    "default-case": "warn",
    "default-param-last": "error",
    "grouped-accessor-pairs": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-div-regex": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-globals": ["error", { "lexicalBindings": true }],
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "warn",
    "no-nonoctal-decimal-escape": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-proto": "error",
    "no-redeclare": "warn",
    "no-return-assign": ["error", "always"],
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "warn",
    "no-unused-labels": "error",
    "no-useless-catch": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    "no-with": "error",
    "radix": ["error", "as-needed"],
    "require-await": "error",
    "wrap-iife": ["error", "any"],
    "yoda": "error",

    // Strict Mode
    "strict": ["error", "function"],

    // Variables
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": ["warn", "closed", "defaultStatus", "frames",
      "history", "innerHeight", "innerWidth", "length", "location", "menubar", "name",
      "navigator", "opener", "pageXOffset", "pageYOffset", "parent", "personalbar",
      "scrollbars", "status", "statusbar", "toolbar",
      "blur", "close", "find", "focus", "moveBy", "moveTo", "open", "print", "resizeBy",
      "resizeTo", "scroll", "scrollBy", "scrollTo", "stop",
      "onload"
    ],
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "no-use-before-define": ["warn", "nofunc"],

    // Stylistic Issues
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": "warn",
    "comma-dangle": ["error", "never"],
    "consistent-this": ["warn", "that"],
    "func-call-spacing": ["error", "never"],
    "keyword-spacing": ["error", { "after": true }],
    "linebreak-style": "error",
    "max-nested-callbacks": ["warn", 3],
    "new-cap": "warn",
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-lonely-if": "warn",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-trailing-spaces": "error",
    "quote-props": ["error", "as-needed", { "keywords": true, "unnecessary": false }],
    "semi-spacing": ["warn", { "before": false, "after": true }],
    "semi-style": ["error", "last"],
    "semi": "error",
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { "words": true, "nonwords": false }],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],

    // ECMAScript 6
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "constructor-super": "error",
    "generator-star-spacing": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    "symbol-description": "error",
    "yield-star-spacing": "error",

    // Deprecated
    "valid-jsdoc": ["warn", {      // => eslint-plugin-jsdoc
      "requireReturn": false
    }],

    // Rules that have been decided to not activate
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": "off",
    "max-classes-per-file": "off",
    "no-await-in-loop": "off",
    "no-multi-str": "off", // Enable when template literals (ES6 syntax) can be used
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-return-await": "off",
    "no-useless-constructor": "error", // JSDoc does not count as non-useless content
    "sort-imports": "off",
    "template-curly-spacing": "off"
  }
};
