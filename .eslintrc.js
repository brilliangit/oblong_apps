module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "prettier",
        "prettier/react"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: true,
                FunctionExpression: true
            }
        }],
        'valid-jsdoc': 'error',
        'no-underscore-dangle': 'off',
        'object-curly-newline': ['error', { minProperties: 4, consistent: true }],

        // react specific
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }]
    }
}
