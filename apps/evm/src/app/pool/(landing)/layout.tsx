'use client'

import { Container, LinkInternal } from '@sushiswap/ui'
import { useSearchParams } from 'next/navigation'

import { PathnameButton, PoolsFiltersProvider } from '../../../ui/pool'
import { Hero } from '../hero'

export default function TabsLayout({
  children,
}: { children: React.ReactNode }) {
  const searchParams = useSearchParams()

  return (
    <>
      <Container maxWidth="7xl" className="pt-4">
        <Hero />
      </Container>
      <Container
        maxWidth="7xl"
        className="gap-4 p-4 rounded-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(35px)',
        }}
      >
        <section className="flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <LinkInternal
              shallow={true}
              scroll={false}
              href={`/pool?${searchParams.toString()}`}
            >
              <PathnameButton
                id="all-pools"
                pathname={'/pool'}
                asChild
                size="sm"
              >
                All Pools
              </PathnameButton>
            </LinkInternal>
            {/* <LinkInternal
              shallow={true}
              scroll={false}
              href={`/pool/smart-pool?${searchParams.toString()}`}
            >
              <PathnameButton
                id="smart-pools"
                pathname={'/pool/smart-pool'}
                asChild
                size="sm"
              >
                Smart Pools
              </PathnameButton>
            </LinkInternal> */}
            <LinkInternal
              shallow={true}
              scroll={false}
              href={`/pool/my-positions?${searchParams.toString()}`}
            >
              <PathnameButton
                id="my-positions"
                pathname={'/pool/my-positions'}
                asChild
                size="sm"
              >
                My Positions
              </PathnameButton>
            </LinkInternal>
            {/* <LinkInternal
              shallow={true}
              scroll={false}
              href={`/pool/my-rewards?${searchParams.toString()}`}
            >
              <PathnameButton
                id="my-rewards"
                pathname={'/pool/my-rewards'}
                asChild
                size="sm"
              >
                My Rewards
              </PathnameButton>
            </LinkInternal> */}
            {/* <LinkInternal
              shallow={true}
              scroll={false}
              href={`/pool/migrate?${searchParams.toString()}`}
            >
              <PathnameButton
                id="migrate"
                pathname={'/pool/migrate'}
                asChild
                size="sm"
              >
                Migrate
              </PathnameButton>
            </LinkInternal> */}
          </div>
        </section>

        <div className="pb-20 border-t border-accent">
          <PoolsFiltersProvider>{children}</PoolsFiltersProvider>
        </div>
      </Container>
    </>
  )
}
