import '../styles/globals.css'
import { Barlow } from '@next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={barlow.className}>
      <Component {...pageProps} />
    </main>
  )
}
