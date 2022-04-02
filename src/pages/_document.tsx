import NextDocument, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'
import type { DocumentContext } from 'next/document'
import type { ReactElement } from 'react'

class Document extends NextDocument {
  static getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(context)
  }

  // eslint-disable-next-line class-methods-use-this
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
