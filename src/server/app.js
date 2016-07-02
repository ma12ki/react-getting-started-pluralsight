import webpack from 'webpack';
import express from 'express';
import path from 'path';
import webpackHotMiddelware from 'webpack-hot-middleware';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config.babel';

const app = express();
const port = 1337;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddelware(compiler, {
  hot: true,
  noInfo: false,
  quiet: false,
  lazy: false,
  watchOptions: { aggregateTimeout: 300 },
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
    modules: false
  }
}));

app.use(webpackHotMiddelware(compiler));

app.get('*', (req, res) => {
  const memoryFs = compiler.outputFileSystem;
  const index = path.join(webpackConfig.output.path, 'index.html');
  const html = memoryFs.readFileSync(index);

  res.end(html);
});

app.listen(port, () => {
  console.log(`express server listening on port ${port}`);
});
