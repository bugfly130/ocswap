import { HotJar } from '@sushiswap/ui/components/scripts'

import { Header } from './header'
import { Providers } from './providers'

export const metadata = {
  title: 'Pool 💦',
}

export default function PoolLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <Header />
        <div className="flex flex-col bg-black">{children}</div>
      </Providers>
      <HotJar />
    </>
  )
}
