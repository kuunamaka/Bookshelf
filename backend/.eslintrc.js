module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    extends: [ 
        "standard-with-typescript", 
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "prettier/prettier": ["error"]
    }
}
  