/* eslint-disable @next/next/no-css-tags */
import "../styles/globals.css";
// Default theme
import "@splidejs/react-splide/css";
import "@sweetalert2/theme-material-ui";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Konsultasiku</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" href="/img/logo.png" />
        <link rel="stylesheet" href="@sweetalert2/theme-material-ui/material-ui.css"></link>
      </Head>
      <div className="flex flex-col">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
