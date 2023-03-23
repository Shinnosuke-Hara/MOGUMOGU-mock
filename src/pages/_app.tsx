import { CommonProvider } from '@/contexts/Common.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'ress'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommonProvider>
      <Component {...pageProps} />
    </CommonProvider>
  )
}
