import { FC, useEffect } from 'react'

import { useOcSwapV2Pool } from '../../hooks'
import { OcSwapV2PoolFinderProps, PoolFinderType } from './types'

export const OcSwapV2Pool: FC<OcSwapV2PoolFinderProps> = ({
  chainId,
  dispatch,
  token0,
  token1,
  index,
}) => {
  const { data: state } = useOcSwapV2Pool(chainId, token0, token1)

  useEffect(() => {
    if (!dispatch || index === undefined) return

    dispatch({
      type: 'update',
      payload: {
        state,
        index,
        poolType: PoolFinderType.Classic,
      },
    })
  }, [dispatch, index, state])

  return <></>
}
