import { ImageProps } from 'next/image'
import { FC } from 'react'
import { Chain, ChainId } from 'sushi/chain'
import { Currency } from 'sushi/currency'

import { Avatar, AvatarImage } from '../avatar'
import { LinkExternal } from '../link'

const BnbLogo = 'bnb.svg'
const EthereumLogo = 'ethereum.svg'
const LOGO: Record<number, string> = {
  [ChainId.ETHEREUM]: EthereumLogo,
  [ChainId.BSC]: BnbLogo,
  [ChainId.BASE]: EthereumLogo,
}
export interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
  currency: Currency
  disableLink?: boolean
}

export const Icon: FC<IconProps> = ({
  currency,
  disableLink = true,
  ...rest
}) => {
  const src = currency.isNative
    ? `native-currency/${LOGO[currency.chainId]}`
    : `tokens/${currency.chainId}/${currency.wrapped.address}.jpg`
  const avatar = (
    <Avatar style={{ width: rest.width, height: rest.height }}>
      <AvatarImage width={Number(rest.width) ?? 20} src={src} />
    </Avatar>
  )

  if (disableLink) {
    return avatar
  }

  return (
    <LinkExternal
      href={Chain.tokenUrl(currency.chainId, currency.wrapped.address)}
    >
      {avatar}
    </LinkExternal>
  )
}
