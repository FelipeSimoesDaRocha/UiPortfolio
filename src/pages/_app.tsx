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
        <meta charSet="utf-8" />
        <title>Felipe Rocha</title>
        <meta name="theme-color" content="#646464" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        X-XSS-Protection: 1; mode=block
        <meta name="robots" content="follow,index" />
        <meta name="google-site-verification" content="1Vi5CDNpLH7dXyXdcGFFVBRNG5g7Rdk9_m7y9s0PszE" />

        <link rel="apple-touch-icon" sizes="180x180" href="../../public/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../../public/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../../public/icons/favicon-16x16.png" />
        <link rel="canonical" href="https://felipe-rocha.vercel.app/" />

        <meta name="description" content="Portfólio de Felipe Simões Da Rocha" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Felipe Rocha - Developer Front-End" />
        <meta property="og:image" content="" />
        <meta property="og:Github" content="https://github.com/FelipeSimoesDaRocha" />
        <meta property="og:Linkedin" content="https://www.linkedin.com/in/felipe-sim%C3%B5es-da-rocha/" />
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
