import { LinkInternal } from '@sushiswap/ui'
import { Button } from '@sushiswap/ui/components/button'
import { Container } from '@sushiswap/ui/components/container'
import { FC } from 'react'

import { MoveImage } from './MoveImage'

export const Move: FC = () => {
  return (
    <section className="py-20 sm:py-40">
      <Container maxWidth="5xl" className="px-4 mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_auto] justify-center gap-x-[100px] gap-y-[20px]">
          <div className="flex flex-col justify-center order-2 gap-3 lg:order-1">
            <div className="flex flex-col items-center prose text-gray-400 lg:items-start dark:prose-invert">
              <h1 className="text-center lg:text-left text-slate-50">
                Move assets across networks in seconds.
              </h1>
              <h5 className="mb-8 text-center lg:text-left">
                We will always find you the best rate, no matter what network
                you’re on, with no extra fees.
              </h5>
              <div className="flex gap-6">
                <LinkInternal href="/swap/cross-chain">
                  <Button asChild variant="secondary">
                    Visit xSwap
                  </Button>
                </LinkInternal>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <MoveImage />
          </div>
        </div>
      </Container>
    </section>
  )
}
