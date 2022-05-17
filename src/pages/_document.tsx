import NextDocument, { Html, Head, Main, NextScript, DocumentInitialProps } from "next/document";
import type { DocumentContext } from "next/document";
import type { ReactElement } from "react";
import { UMAMI_WEBSITE_ID, UMAMI_SRC } from "~/utils/umami";

class Document extends NextDocument {
  static getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(context);
  }

  // eslint-disable-next-line class-methods-use-this
  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <script async defer data-website-id={UMAMI_WEBSITE_ID} src={UMAMI_SRC} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
