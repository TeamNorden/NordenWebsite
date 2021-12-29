import { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles, MantineProvider, NormalizeCSS } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "../styles/global.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Norden</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        theme={{
          colorScheme: "dark",
          primaryColor: "violet"
        }}
      >

        <NormalizeCSS />
        <GlobalStyles />
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
