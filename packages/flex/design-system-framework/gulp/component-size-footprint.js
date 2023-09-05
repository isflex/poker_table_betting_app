'use strict';

const through = require('through2')
const path = require('path')
const gulp = require('gulp')
const sass = require('node-sass')
const tildeImporter = require('node-sass-tilde-importer')
const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

let _mandatory_files = [
  "_initial-variables.scss",
  "_derived-variables.scss",
  "_mixins.scss",
  "_functions.scss",
  "_animations.scss",
  "_controls.scss"
]

let pipe = function (options, collectedFiles) {
  return through.obj(async function (file, enc, cb) {
    let filename = path.parse(file.path).base;
    let fullfilename = file.path;

    if (filename !== "_all.scss" && _mandatory_files.indexOf(filename) === -1) {
      collectedFiles.push(fullfilename)
    }

    await cb(null, file)
  })
}

async function calculateSize(files) {
  let dependencies = ""

  _mandatory_files.forEach(value => {
    dependencies += "@import 'src/utilities/" + value + "'; \n"
  })

  let scss = "";
  files.forEach(file => {
    scss += "@import '" + file + "'; \n"
  })

  let compiledSass = sass.renderSync({
    data: dependencies + scss,
    importer: tildeImporter,
    includePaths: [path.resolve(__dirname, "../"), path.resolve(__dirname, "../node_modules/")]
  });

  return postcssrc().then(({ plugins, options }) => {
    return postcss(plugins)
      .process(compiledSass.css.toString())
  })
}

module.exports = function (options) {
  var collectedFiles = [];

  return gulp.src(['./src/*/**.scss'])
    .pipe(pipe(options, collectedFiles))
    .pipe(gulp.dest("/tmp/"))
    .on("end", async function () {


      let fullSize = (await calculateSize(collectedFiles)).css.length;
      console.log("Current CSS file: " + Math.round(fullSize / 1024, 2) + "kb")
      collectedFiles.forEach(async function(dependencyToRemove) {
        let input = []

        collectedFiles.forEach(value => {
          if(dependencyToRemove !== value) {
            input.push(value)
          }
        })

        let currentCssSize = (await calculateSize(input)).css.length;

        console.log(path.parse(dependencyToRemove).base + "\t\t" + Math.round((fullSize - currentCssSize) / 1024, 2) + "kb");

      });
    })
}
