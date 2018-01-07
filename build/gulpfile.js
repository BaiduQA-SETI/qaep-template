const gulp = require('gulp');
const chalk = require('chalk')
const path = require('path')
const rm = require('rimraf')
const config = require('../config')
require('./build.js')
gulp.task('build', () => {
    const argv = require('yargs')
        .command('npm run build <page>', '构建页面')
        .demandCommand(
            1,
            `😂  ${chalk.bgRed('请指定页面名')}  ${chalk.green(`可选值:【${111}】\n`)}`
        ).argv._
    console.log(argv)

    // const spinner = ora('building for production...')
    // spinner.start()
    // rm.sync(path.join(config.build.assetsRoot, config.build.assetsSubDirectory));
    // argv.forEach((item) => {

    // })

    console.log(123)


})

gulp.start('build')
