import Head from 'next/head'
import Layout from '../components/layout'
import Nav from '../components/nav'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b4b4b4;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: #0088ff;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="jelly, dragon, game" />
        <meta name="author" content="Jelly Dragon Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="content-language" content="en-us" />

        <meta property="og:locale" content="en" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Nav />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
