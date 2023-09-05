'use strict';

const through = require('through2')
const puppeteer = require('puppeteer')
const path = require('path')
const _ = require('underscore')
const handlebars = require('handlebars')
const gulp = require('gulp')
const fs = require('fs')


var renderTemplate = function (options) {
  var ctx = makeCtx(options)
  var source = fs.readFileSync(options.htmlTemplate, 'utf8')
  var template = handlebars.compile(source)
  return template(ctx)
}

var screenshotPipe = function (options, collectedFiles) {
  if (!options) {
    options = {}
  }

  if (!options.dest) {
    options.dest = 'tmp/'
  }

  if (!options.viewport) {
    options.viewport = {
      width: 1440,
      height: 900
    }
  }

  return through.obj(async function (file, enc, cb) {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport(options.viewport)

    await page.goto("file://" + file.path);

    if (!fs.existsSync(options.dest)){
      await fs.mkdirSync(options.dest);
    }

    let filename = path.parse(file.path).base;
    await page.screenshot({path: options.dest + filename + '.png'});

    collectedFiles.push(filename + '.png')
    await browser.close()
    await cb(null, file)
  })
}

module.exports = function (options) {
  var collectedFiles = [];

  return gulp.src(['./dist/templates/**.html'])
    .pipe(screenshotPipe(options, collectedFiles))
    .on("data", function() {
      if(options.htmlTemplate) {
        const template = handlebars.compile(
          fs.readFileSync(options.htmlTemplate, 'utf8')
        );
        console.log(template({
          previews: collectedFiles
        }))
      }
    });
}
