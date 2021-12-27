import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { ColorScheme, ColorSchemeProvider, GlobalStyles, MantineProvider, NormalizeCSS, useMantineTheme } from '@mantine/core'
import '../styles/globals.css'
import { useLocalStorageValue } from '@mantine/hooks'
import { useEffect } from 'react'
import { NotificationsProvider } from '@mantine/notifications'
import SideBar from '~client/components/SideBar'
import { User } from '~client/types/global'
import { useGenerateColor } from '~client/hooks/color/useGenerateColor'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'theme',
    defaultValue: 'dark',
  })

  const theme = useMantineTheme()
  const { user }: { user?: User | undefined } = pageProps

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    colorScheme === 'dark' ? bodyClass.add(className) : bodyClass.remove(className)
  }, [colorScheme, colorScheme === 'dark'])

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <script async src="https://arc.io/widget.min.js#J7gKDjYR" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            primaryColor: 'violet',
            colors: {
              blurple: useGenerateColor('#5865F2'),
              discordRed: useGenerateColor('#ed4245'),
              discordGreen: useGenerateColor('#57f287'),
              discordYellow: useGenerateColor('#fee75c'),
              discordFuchsia: useGenerateColor('#eb459e'),
            },
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const req: any = appContext.ctx.req

  return {
    pageProps: {
      ...appProps.pageProps,
      user: req?.user,
    },
  }
}
