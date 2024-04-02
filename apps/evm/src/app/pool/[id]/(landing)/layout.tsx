import { getPool } from '@sushiswap/client'
import { Breadcrumb, Container } from '@sushiswap/ui'
import { unstable_cache } from 'next/cache'
import { headers } from 'next/headers'
import { unsanitize } from 'sushi'
import { PoolHeader } from '../../../../ui/pool/PoolHeader'
import notFound from '../../not-found'

export const metadata = {
  title: 'Pool 💦',
}

export default async function Layout({
  children,
  params,
}: { children: React.ReactNode; params: { id: string } }) {
  const poolId = unsanitize(params.id)
  const pool = await unstable_cache(
    async () => getPool(poolId),
    ['pool', poolId],
    {
      revalidate: 60 * 15,
    },
  )()

  if (!pool) {
    notFound()
  }

  const headersList = headers()
  const referer = headersList.get('referer')
  return (
    <>
      {/* <Container maxWidth="5xl" className="px-4">
        <Breadcrumb />
      </Container> */}
      <Container maxWidth="5xl" className="z-10 pt-10 text-gray-300">
        <PoolHeader
          backUrl={referer?.includes('/pool?') ? referer?.toString() : '/pool'}
          address={pool.address}
          pool={pool}
          apy={{ rewards: pool?.incentiveApr, fees: pool?.feeApr1d }}
        />
      </Container>
      <section className="flex flex-col flex-1 mt-4">
        <div className="bg-black dark:bg-white/[0.02] border-t border-accent h-full">
          {children}
        </div>
      </section>
    </>
  )
}
