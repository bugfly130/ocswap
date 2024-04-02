import '@sushiswap/ui/index.css'

import { SanctionedAddressDialog } from '@sushiswap/wagmi/components/sanctioned-address-dialog'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import React from 'react'

import { Providers } from './providers'
// import { Trackers } from './trackers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Sushi 🍣',
    template: '%s | Sushi 🍣',
  },
  description:
    'A Decentralised Finance (DeFi) app with features such as swap, cross chain swap, streaming, vesting, and permissionless market making for liquidity providers.',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    // <html lang="en" className="[color-scheme:dark]">
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} dark`}
      suppressHydrationWarning={true}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=1"
      />
      <link rel="manifest" href="/site.webmanifest?v=1" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#fa52a0" />
      <link rel="shortcut icon" href="/favicon.ico?v=1" />
      <body suppressHydrationWarning={true}>
        <div className="flex flex-col h-screen bg-black">
          <div className="absolute top-0 flex flex-row backdrop-filter backdrop-blur-[100px] h-[302px] w-full">
            <div
              className="flex-1 transform scale-75 rotate-45 opacity-50 mix-blend-lighten"
              style={{
                background: 'linear-gradient(180deg, #1991f5 0%, #3ce6fc 100%)',
                filter: 'blur(110px)',
              }}
            />
            <div
              className="flex-1 transform scale-75 rotate-45 opacity-50 mix-blend-lighten"
              style={{
                background: 'linear-gradient(180deg, #1991f5 0%, #3ce6fc 100%)',
                filter: 'blur(110px)',
              }}
            />
          </div>
          <Providers>
            <SanctionedAddressDialog />
            {children}
          </Providers>
          {/* <Trackers /> */}
        </div>
      </body>
    </html>
  )
}
