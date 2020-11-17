module.exports = {
    ignore: ['**/App.js', '*/*/[A-Z]*.test.js'],
    defaultExample: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    components: 'src/components/[A-Z]*.js',
    styles: {
        StyleGuide: {
            '@global *': {
                'box-sizing': 'border-box',
                margin: 0,
            },
            '@global body': {
                'font-family': 'Roboto',
                'font-size': '112.5%',
                color: '#4a4a4a',
            },
        },
    },
}
