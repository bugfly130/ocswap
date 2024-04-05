import { NetworkSelector } from '@sushiswap/ui'
import { Button } from '@sushiswap/ui/components/button'
import { NetworkIcon } from '@sushiswap/ui/components/icons'
import { SelectIcon } from '@sushiswap/ui/components/select'
import React, { FC, memo } from 'react'
import { ChainId, chainName } from 'sushi/chain'

interface SelectNetworkWidgetProps {
  networks: ChainId[]
  selectedNetwork: ChainId
  onSelect(chainId: ChainId): void
  title?: string
}

export const SelectNetworkWidget: FC<SelectNetworkWidgetProps> = memo(
  function SelectNetworkWidget({
    selectedNetwork,
    onSelect,
    networks,
    title: _title,
  }) {
    return (
      <div className="flex flex-col">
        <h3 className="py-2 text-gray-400 text-md">
          Which network would you like to provide liquidity on?
        </h3>
        <div>
          <NetworkSelector
            networks={networks}
            selected={selectedNetwork}
            onSelect={onSelect}
          >
            <Button variant="secondary" className="!font-medium">
              <NetworkIcon chainId={selectedNetwork} width={16} height={16} />
              {chainName?.[selectedNetwork]}
              <SelectIcon />
            </Button>
          </NetworkSelector>
        </div>
      </div>
    )
  },
)
