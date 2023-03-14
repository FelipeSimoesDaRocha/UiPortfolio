// Next
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

// Styles
import "../styles/globals.css";
import { theme } from 'styles/theme'

// Fonts
import "../../public/fonts/SpaceGrotesk.css";

// Translate
import "../i18nextInit";

// Context
import ContextMenu from "Components/ContextMenu";

// Services
import clientApollo from "services/apollo-client";

// Utils
import { queryClient } from "utils/querryClient";
import { initLogRocket } from "utils/logrocket";

// Analytics
import { Analytics } from "@vercel/analytics/react";

// Auth
import type { Session } from "next-auth";

// Providers
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {

  useEffect(() => {
    initLogRocket();

    if (localStorage.i18nextLng) {
      localStorage.setItem("i18nextLng", "pt");
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Felipe Rocha</title>
        <meta name="robots" content="follow,index" />
        <meta name="google-site-verification" content="1Vi5CDNpLH7dXyXdcGFFVBRNG5g7Rdk9_m7y9s0PszE" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
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
      <SessionProvider session={session}>
        <ApolloProvider client={clientApollo}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <ContextMenu>
                <Script
                  id="my-script"
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
              </ContextMenu>
            </ThemeProvider>
          </QueryClientProvider>
        </ApolloProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp;
