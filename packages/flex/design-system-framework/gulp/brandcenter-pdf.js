'use strict';

const puppeteer = require('puppeteer')
const path = require('path')

module.exports = async function(options) {
  if (!options) {
    options = {}
  }

  if (!options.viewport) {
    options.viewport = {
      width: 1440,
      height: 900
    }
  }

  const pdfConfig = {
    path: path.resolve(__dirname, "../") + "/docs/brandcenter.pdf", // Saves pdf to disk.
    format: 'A4',
    printBackground: true,
    landscape: true,
    margin: { // Word's default A4 margins
      top: '1.54cm',
      bottom: '1.54cm',
      left: '1.54cm',
      right: '1.54cm'
    }
  };

  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
  const page = await browser.newPage()
  await page.setViewport(options.viewport)

  await page.goto("file://" +path.resolve(__dirname, "../")+ "/docs/brandcenter.html")

  await page.pdf(pdfConfig)
  //let filename = path.parse(file.path).base;
  //await page.screenshot({path: options.dest + filename + '.png'});

  //collectedFiles.push(filename + '.png')
  await browser.close()
}
