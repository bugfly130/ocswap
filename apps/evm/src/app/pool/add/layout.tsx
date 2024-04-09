import { Container, typographyVariants } from '@sushiswap/ui'

import { BackButton } from '../../../ui/pool/BackButton'

export const metadata = {
  title: 'Pool 💦',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container maxWidth="5xl" className="z-10 px-4 pt-10 pb-20">
        <div className="flex flex-col items-center gap-2 text-slate-50">
          <div className="flex items-center gap-3">
            <BackButton
              variant="ghost"
              name="back"
              className="xl:absolute xl:ml-[-56px]"
            />
            <h1 className={typographyVariants({ variant: 'h3' })}>
              Add Liquidity
            </h1>
          </div>
          <p className={typographyVariants({ variant: 'muted' })}>
            Create a new pool or create a liquidity position on an existing
            pool.
          </p>
        </div>
      </Container>
      <section className="flex flex-col flex-1">
        <div className="h-full pt-4 pb-20 bg-black border-t border-accent">
          <Container maxWidth="5xl" className="px-4">
            {children}
          </Container>
        </div>
      </section>
    </>
  )
}
