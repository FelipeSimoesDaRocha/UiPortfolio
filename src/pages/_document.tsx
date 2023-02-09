import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2" as="font" type="font/woff2" crossOrigin="true" />
        <meta name="google-site-verification" content="1Vi5CDNpLH7dXyXdcGFFVBRNG5g7Rdk9_m7y9s0PszE" />
        <title>Felipe Rocha 💻</title>
        <meta charSet="utf-8" />
        <meta name='description' content='Portfólio de Felipe Simões Da Rocha' />
        <meta property="og:title" content="Felipe Rocha - Developer Front-End" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <link href="https://felipe-rocha.vercel.app/" rel="canonical" />
        <meta property='og:Github' content='https://github.com/FelipeSimoesDaRocha' />
        <meta property='og:Linkedin' content='https://www.linkedin.com/in/felipe-sim%C3%B5es-da-rocha/' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
