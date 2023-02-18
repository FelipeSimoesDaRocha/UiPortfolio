// Next
import type { AppProps } from 'next/app'

// Styles
import '../styles/globals.css'

// Vercel-Analytics
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
