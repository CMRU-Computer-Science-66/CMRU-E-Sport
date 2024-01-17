// Components
import { NextUIProvider } from '@nextui-org/react'
import Layout from '@/components/layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}
