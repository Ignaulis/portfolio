'use client'

import Nav from "@/components/navigation/nav";
import { MobileContextProvider } from "@/context/mobileContext";
import "@/styles/globals.css";
import StarSkyBackground from "@/three/background";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <MobileContextProvider>
      <div className={`relative w-screen h-screen overflow-hidden ${montserrat.className}`}>
        <StarSkyBackground />
        <div className='absolute inset-0 z-10 h-screen overflow-y-auto'>
          <Nav />
          <div className='w-full flex flex-col'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>

    </MobileContextProvider>
  )
}
