'use client'

import { Button, ButtonProps } from '@sushiswap/ui/components/button'
import { FC } from 'react'
import { useAccount } from 'wagmi'

import { Dots } from '@sushiswap/ui'

import { ConnectButton } from '../../components'

const Connect: FC<ButtonProps> = ({
  children,
  fullWidth = true,
  size = 'xl',
  ...props
}) => {
  const { isDisconnected, isConnecting, isReconnecting } = useAccount()

  if (isConnecting || isReconnecting) {
    return (
      <Button
        style={{
          padding: '12px 16px',
          background:
            'linear-gradient(94.04deg, #1991F5 2.32%, #19A6B8 105.98%)',
        }}
        fullWidth={fullWidth}
        size={size}
        disabled
        {...props}
      >
        <Dots>Checking Wallet</Dots>
      </Button>
    )
  }

  if (isDisconnected)
    return (
      <ConnectButton
        style={{
          padding: '12px 16px',
          background:
            'linear-gradient(94.04deg, #1991F5 2.32%, #19A6B8 105.98%)',
        }}
        fullWidth={fullWidth}
        size={size}
        {...props}
      >
        Connect Wallet
      </ConnectButton>
    )

  return <>{children}</>
}

export { Connect }
