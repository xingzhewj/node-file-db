module.exports = {
    presets: [
        [
            '@babel/preset-env', {
                "modules": "umd",
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    "plugins": [
        "add-module-exports"
    ]
};