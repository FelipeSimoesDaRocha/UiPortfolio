// Next
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// Styles
import "../styles/globals.css";
import "../../public/fonts/SpaceGrotesk.css?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";

// Translate
import "../i18nextInit";

// Vercel-Analytics
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.i18nextLng) {
      localStorage.setItem("i18nextLng", "pt");
    }
  }, []);

  return (
    <>
      <Head>
        X-XSS-Protection: 1; mode=block
        <meta charSet="utf-8" />
        <title>Felipe Rocha</title>
        <meta name="robots" content="follow,index" />
        <meta name="google-site-verification" content="1Vi5CDNpLH7dXyXdcGFFVBRNG5g7Rdk9_m7y9s0PszE" />
        <meta name='viewport' content="width=device-width, minimum-scale=1.0, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Portfólio de Felipe Simões Da Rocha" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#fff" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />

        <link rel="canonical" href="https://felipe-rocha.vercel.app/" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:creator" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Felipe Rocha - Developer Front-End" />
        <meta property="og:description" content="Best App" />
        <meta property="og:site_name" content="App" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
      </Head>
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
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
