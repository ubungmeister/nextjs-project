import '../styles/globals.css'
import * as React from 'react';
import type { AppProps } from 'next/app'
import MainNavigation from "../components/layout/MainNavigation";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
      <MainNavigation/>
      <Component {...pageProps}/>
        </>
  )
}
