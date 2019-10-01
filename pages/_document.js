import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // pageProps contains SSR HTML and other bits, see:
    // https://github.com/zeit/next.js#custom-document
    return renderPage();
  }

  render() {
    const { locale, currentCountry } = this.props;

    return (
      <html lang={locale}>
        <Head>
          {/*
            This script must be loaded before any other for the time to interactive polyfill to work.
            https://github.com/GoogleChromeLabs/tti-polyfill
          */}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html:
                "!function(){if('PerformanceLongTaskTiming' in window){var g=window.__tti={e:[]};g.o=new PerformanceObserver(function(l){g.e=g.e.concat(l.getEntries())});g.o.observe({entryTypes:['longtask']})}}();"
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
