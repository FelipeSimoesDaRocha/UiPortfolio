import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet" />
        <title>Felipe Rocha 💻</title>
        <meta charSet="utf-8" />
        <meta name='description' content='Portfólio de Felipe Simões Da Rocha' />
        <meta property="og:title" content="Felipe Rocha - Developer Front-ENd" />
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
