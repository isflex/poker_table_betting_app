/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

// const tracer = require('dd-trace').init()

// const ddOptions = {
//   // eslint-disable-next-line camelcase
//   response_code: true,
//   tags: [
//     `app:${process.env.FLEX_POKER_CLIENT_NAME}`
//   ]
// }
// const connectDatadog = require('connect-datadog')(ddOptions)

const { optionsHTTPS } = require('@flexiness/certs')
const http = require('http')
const https = require('https')
const express = require('express')
// const connect = require('connect')
const path = require('path')
// const fs = require('fs')
const serveStatic = require('serve-static')
const serveIndex = require('serve-index')
// const vhost = require('vhost')
const cors = require('cors')
const regexEscape = require('regex-escape')
// const nocache = require('nocache')
const detect = require('detect-port')

const FLEX_SERVER_RUNNING = process.env.FLEX_SERVER_RUNNING
const PORT = process.env.FLEX_POKER_CLIENT_PORT
const HOST = `${process.env.FLEX_PROTOCOL}${process.env.FLEX_POKER_CLIENT_HOSTNAME}:${PORT}`

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

const corsOptions = {
  ...(process.env.FLEX_MODE === 'development'
    ? { origin: '*' }
    : { origin: [
      new RegExp(`${regexEscape(process.env.FLEX_DOMAIN_NAME)}`),
      new RegExp(`${regexEscape(`.${process.env.FLEX_BASE_DOMAIN}`)}$`),
      new RegExp(`${regexEscape(process.env.FLEX_HOST_IP)}$`)
    ] }
  ),
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'X-Requested-With', 'Authorization'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////

detect(PORT)
  .then(_port => {
    if (Number(PORT) === Number(_port)) {
      const app = express()

      app.use(cors(corsOptions))

      // app.use(connectDatadog)

      // app.use('/node', express.static(path.join(__dirname, 'build/node'), {
      //   // maxAge: '1d',
      //   // setHeaders: setCustomCacheControl
      // }))

      // app.use('/web', express.static(path.join(__dirname, 'build/web'), {
      //   index: ['index.html'],
      //   // index: process.env.FLEX_MODE === 'development' ? ['index.html'] : [],
      //   // maxAge: '1d',
      //   // setHeaders: setCustomCacheControl
      // }))

      // shows you the directory/file list at app root
      // app.use('/', serveIndex(path.join(__dirname, 'build'), {
      //   icons: true
      // }))

      app.use('/', express.static(path.join(__dirname, 'build/web'), {
        index: ['index.html'],
      }))

      // app.use(nocache());

      const server = `${process.env.FLEX_PROTOCOL}` === 'http://'
        ? http.createServer(app)
        : https.createServer(optionsHTTPS(), app)

      server.listen(PORT, `${process.env.FLEX_POKER_CLIENT_HOSTNAME}`, 34, (err) => {
        if (err) throw err
        console.log(`[${process.env.FLEX_PROTOCOL.slice(0, -3).toUpperCase()}] : ${HOST} :`, server.address())
        console.log(`${FLEX_SERVER_RUNNING} ${HOST}`)
      })

      // const server = app.listen(PORT, `${process.env.FLEX_POKER_CLIENT_HOSTNAME}`, 34, (err) => {
      //   if (err) throw err
      //   console.log(`[${process.env.FLEX_PROTOCOL.slice(0, -3).toUpperCase()}] : ${HOST} :`, server.address())
      //   console.log(`${FLEX_SERVER_RUNNING} ${HOST}`)
      // })

    } else {
      console.log(`ALREADY RUNNING ${HOST}`)
      console.log(`${FLEX_SERVER_RUNNING} ${HOST}`)
      // process.exit(0);
      process.kill(process.pid, 0)
    }
  })
  .catch(err => {
    console.log(err)
  })
