/* eslint-disable react/prop-types */
import { Toaster } from 'react-hot-toast'
import '@/styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
