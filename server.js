const config = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


const PORT = 8080;


const clientRoutes = [
    'work',
    'work/lifestyle',
    'work/adventures',
    'work/music',
    'work/people',
    'contact'
].reduce((accum, i) => Object.assign(accum, { [i]: `http://localhost:${PORT}/` }), {});

config.entry.unshift(`webpack-dev-server/client?http://localhost:${PORT}/`, 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
const bundler = new WebpackDevServer(webpack(config), {
    hot: true,
    quiet: false,
    noInfo: true,
    inline: true,
    compress: true,
    stats: {
        colors: true
    },
    contentBase: './dist',
    historyApiFallback: true,
    proxy: clientRoutes
});

bundler.listen(PORT, 'localhost', () => console.log(`Serving app at http://localhost:${PORT}`) );
