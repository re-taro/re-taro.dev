import fs from 'node:fs'
import path from 'node:path'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as chromium from 'playwright-aws-lambda'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import { OgpImage, OgpInfo } from '~/components/templates/ogp'

const baseFullPath = path.resolve('./')
const iconPath = path.join(baseFullPath, 'public/rintaro.webp')
const icon: string = fs.readFileSync(iconPath, 'base64')
const notopath = path.join(baseFullPath, 'public/fonts/NotoSansCJKJp-Bold.woff2')
const noto = fs.readFileSync(notopath).toString('base64')
const style = `
@font-face {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: bold;
  src: url(data:font/woff2;charset=utf-8;base64,${noto}) format("woff2");
  font-display: swap;
}
* {
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
  background: #2e3440;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 125%;
  color: #d8dee9;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right bottom, #b48ead, #81a1c1);
}
#Wrapper {
  margin: 50px;
  background: white;
  grid-gap: 30px;
  border-radius: 30px;
  background: #2e3440;
  box-shadow: 10px 10px 20px #1c192166, -10px -10px 20px #1c192166;
  padding: 50px;
  display: grid;
  grid-template-rows: 280px 100px;
  grid-template-columns: 700px 250px;
  grid-template-areas: "Title Title" "Name";
}
#Wrapper #Title {
  font-size: 60px;
  grid-area: Title;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
#Wrapper #Title p {
  max-height: 100%;
  overflow-wrap: anywhere;
}
#Wrapper #Name {
  grid-area: Name;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
#Wrapper #Name img {
  margin-right: 20px;
  border-radius: 50%;
}
`

// eslint-disable-next-line max-statements
const Ogp = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const playwrightArguments = {
      development: {
        args: chromium.getChromiumArgs(false),
        executablePath: '/opt/google/chrome/google-chrome',
        headless: true
      },
      production: {
        args: chromium.getChromiumArgs(true)
      },
      test: {}
    }[process.env.NODE_ENV]
    const viewport = { height: 630, width: 1200 }
    const browser = await chromium.launchChromium(playwrightArguments)
    const context = await browser.newContext({ viewport })
    const page = await context.newPage()
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ja-JP'
    })
    const title = request.query.title ?? ''
    const ogpinfo: OgpInfo = {
      icon,
      style,
      title: title.toString()
    }
    const markup = ReactDomServer.renderToStaticMarkup(<OgpImage {...ogpinfo} />)
    const html = `<!doctype html>${markup}`
    await page.setContent(html, { waitUntil: 'networkidle' })
    const image = await page.screenshot({ type: 'png' })
    await browser.close()
    response.setHeader('Cache-Control', 's-maxage=5256000, stale-while-revalidate')
    response.setHeader('Content-Type', 'image/png')
    response.end(image)
  } catch {
    response.status(500).send('Internal Server Error')
  }
}

export default Ogp
