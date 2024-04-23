import { getPool } from '@sushiswap/client'
import { unstable_cache } from 'next/cache'
import { unsanitize } from 'sushi'
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

  return (
    <>
      {/* <Container maxWidth="5xl" className="z-10 px-2 pt-4 text-gray-300">
        <PoolHeader
          address={pool.address}
          pool={pool}
          apy={{ rewards: pool?.incentiveApr, fees: pool?.feeApr1d }}
        />
      </Container> */}
      <section className="flex flex-col flex-1 w-full mt-4">
        <div className="bg-black border-t border-accent h-full">{children}</div>
      </section>
    </>
  )
}
