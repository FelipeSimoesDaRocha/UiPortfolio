// Next
import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// Styles
import "../styles/globals.css"

// Translate
import "../i18nextInit";

// Vercel-Analytics
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.i18nextLng) {
      localStorage.setItem("i18nextLng", "pt");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Felipe Rocha</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio de Felipe Simões Da Rocha" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Felipe Rocha - Developer Front-End" />
        <meta property="og:image" content="" />
        <meta property="og:Github" content="https://github.com/FelipeSimoesDaRocha" />
        <meta property="og:Linkedin" content="https://www.linkedin.com/in/felipe-sim%C3%B5es-da-rocha/" />

        X-XSS-Protection: 1; mode=block
        <meta name="robots" content="follow,index" />
        <meta name="google-site-verification" content="1Vi5CDNpLH7dXyXdcGFFVBRNG5g7Rdk9_m7y9s0PszE" />

        <meta name="browserconfig" content="browserconfig.xml" />
        <link rel="manifest" href="manifest.json" />
        <link rel="canonical" href="https://felipe-rocha.vercel.app/" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="./icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./icons/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
      <Script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="feliperocha"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#bdf523"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18">
      </Script>
      <Analytics />
    </>
  )
}

export default MyApp
