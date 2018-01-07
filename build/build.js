'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const utils = require('./utils')
const argv = require('yargs').command('npm run build <page> <-all>', '构建页面')
    .demandCommand(
        1,
        `😂  ${chalk.bgRed('请指定页面名')}  ${chalk.green(`可选值:【${utils.getPageList()}】\n`)}`
    ).argv._
const spinner = ora('building for production...')
spinner.start()
rm.sync(path.join(config.build.assetsRoot, config.build.assetsSubDirectory))
argv.forEach((item, index) => {
    webpack(merge(webpackConfig, {
        entry: utils.getEntryList(item),
        output: {
            path: config.build.assetsRoot + '/' + item,
            filename: utils.assetsPath('[name].js'),
            chunkFilename: utils.assetsPath('[id].js')
        },
        plugins: webpackConfig.plugins.concat(new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === 'testing' ?
                'index.html' : path.resolve(process.cwd(), `dist/${item}/index.html`),
            template: `html-withimg-loader?min=false!${process.cwd()}/src/view/${item}/index.html`,
            inject: true,
            minify: false,
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }))
    }), (err, stats) => {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
