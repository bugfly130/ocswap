import { getAddress as _getAddress, isAddress } from '@ethersproject/address'
import { useCallback, useMemo } from 'react'
import { ChainId } from 'sushi/chain'
import { DAI, SUSHI, USDC, USDT, WBTC, WETH9, WNATIVE } from 'sushi/currency'
import { type Currency, Native, Token } from 'sushi/currency'
import { useLocalStorage } from './useLocalStorage'

export const DEFAULT_BASES = {
  [ChainId.ETHEREUM]: [
    Native.onChain(ChainId.ETHEREUM),
    WNATIVE[ChainId.ETHEREUM],
    SUSHI[ChainId.ETHEREUM],
    WBTC[ChainId.ETHEREUM],
    USDC[ChainId.ETHEREUM],
    USDT[ChainId.ETHEREUM],
    DAI[ChainId.ETHEREUM],
  ],
  [ChainId.BSC]: [
    Native.onChain(ChainId.BSC),
    WNATIVE[ChainId.BSC],
    WETH9[ChainId.BSC],
    USDC[ChainId.BSC],
    USDT[ChainId.BSC],
    DAI[ChainId.BSC],
  ],
  [ChainId.BASE]: [
    Native.onChain(ChainId.BASE),
    WNATIVE[ChainId.BASE],
    DAI[ChainId.BASE],
    new Token({
      chainId: ChainId.BASE,
      symbol: 'USDbC',
      name: 'USD Base Coin',
      decimals: 6,
      address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    }),
    USDC[ChainId.BASE],
  ],
} as const

function getAddress(address: string) {
  if (address === 'NATIVE') return 'NATIVE'
  return _getAddress(address)
}

export const usePinnedTokens = () => {
  const [pinnedTokens, setPinnedTokens] = useLocalStorage(
    'sushi.pinned-tokens',
    {} as Record<string, string[]>,
  )

  const addPinnedToken = useCallback(
    (currencyId: string) => {
      const [chainId, address] = currencyId.split(':')
      setPinnedTokens((value) => {
        value[chainId] = Array.from(
          new Set([
            ...(value[chainId] || []),
            `${chainId}:${getAddress(address)}`,
          ]),
        )
        return value
      })
    },
    [setPinnedTokens],
  )

  const removePinnedToken = useCallback(
    (currencyId: string) => {
      const [chainId, address] = currencyId.split(':')
      setPinnedTokens((value) => {
        value[chainId] = Array.from(
          new Set(
            value[chainId].filter(
              (token) => token !== `${chainId}:${getAddress(address)}`,
            ),
          ),
        )
        return value
      })
    },
    [setPinnedTokens],
  )

  const hasToken = useCallback(
    (currency: Currency | string) => {
      if (typeof currency === 'string') {
        if (!currency.includes(':')) {
          throw new Error('Address provided instead of id')
        }

        const [chainId, address] = currency.split(':')
        if (address !== 'NATIVE' && !isAddress(address)) {
          throw new Error('Address provided not a valid ERC20 address')
        }

        return pinnedTokens?.[chainId]?.includes(
          `${chainId}:${getAddress(address)}`,
        )
      }

      return !!pinnedTokens?.[currency.chainId]?.includes(currency.id)
    },
    [pinnedTokens],
  )

  const mutate = useCallback(
    (type: 'add' | 'remove', currencyId: string) => {
      if (type === 'add') addPinnedToken(currencyId)
      if (type === 'remove') removePinnedToken(currencyId)
    },
    [addPinnedToken, removePinnedToken],
  )

  return useMemo(() => {
    return {
      data: pinnedTokens,
      mutate,
      hasToken,
    }
  }, [hasToken, mutate, pinnedTokens])
}
