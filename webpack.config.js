const {join, resolve} = require('path');

const sourcesPath = resolve(__dirname, './source');
console.log('Sources:', sourcesPath);

const entryFile = join(sourcesPath, 'index.jsx');
console.log('Entry file:', entryFile);

const target = resolve('./target');
console.log('Destination:', target);

const react = {
    test: /\.js[x]?$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/env', '@babel/react']
        }
    }
};

const style = {
    test: /\.[s]?css$/,
    exclude: /node_modules/,
    use: [
        { loader: 'style-loader' },
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        },
        { loader: 'sass-loader' }
    ]
};

module.exports = (env, argv) => ({
    mode: "development",
    entry: entryFile,
    devtool: getDevTool(argv),
    devServer: {
        contentBase: target
    },
    resolve: {
        extensions: [ '.js', '.jsx' ]
    },
    module: {
        rules: [
            react, style
        ]
    },
    output: {
        filename: 'bundle.js',
        path: target
    }
});

function getDevTool(argv) {
    if (argv.mode === 'production') {
        return false;
    }

    return 'source-map';
}
