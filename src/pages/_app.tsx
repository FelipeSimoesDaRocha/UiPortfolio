// Next
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

// Styles
import '../styles/globals.css'

// Translate
import '../i18nextInit';

// Vercel-Analytics
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "pt-BR");
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="1Vi5CDNpLH7dXyXdcGFFVBRNG5g7Rdk9_m7y9s0PszE" />
        <meta name='description' content='Portfólio de Felipe Simões Da Rocha' />
        <meta property="og:title" content="Felipe Rocha - Developer Front-End" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta property='og:Github' content='https://github.com/FelipeSimoesDaRocha' />
        <meta property='og:Linkedin' content='https://www.linkedin.com/in/felipe-sim%C3%B5es-da-rocha/' />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
