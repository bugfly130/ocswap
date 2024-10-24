import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { List } from '@sushiswap/ui/components/list'
import React, { Dispatch, FC, Fragment, SetStateAction } from 'react'

import { RadioGroup } from '@headlessui/react'
import { SunIcon } from '@heroicons/react/24/outline'
import { useLocalStorage } from '@sushiswap/hooks'
import { classNames } from '@sushiswap/ui'
import { IconButton } from '@sushiswap/ui/components/iconbutton'
import { Switch } from '@sushiswap/ui/components/switch'
import { useTheme } from 'next-themes'
import { ProfileView } from './ProfileView'

interface SettingsViewProps {
  setView: Dispatch<SetStateAction<ProfileView>>
}

const map = {
  system: <span className="text-xs font-semibold">Auto</span>,
  light: <SunIcon width={24} height={24} />,
}

export const SettingsView: FC<SettingsViewProps> = ({ setView }) => {
  const { theme, setTheme } = useTheme()
  const [showTestnets, setShowTestnets] = useLocalStorage('showTestnets', false)

  return (
    <>
      <div className="grid grid-cols-3 mb-3">
        <div className="flex justify-start">
          <IconButton
            size="sm"
            onClick={() => setView(ProfileView.Default)}
            icon={ArrowLeftIcon}
            name="Back"
            variant="secondary"
            className="!text-black"
          />
        </div>
        <span className="font-medium text-center">Settings</span>
        <div />
      </div>
      <List>
        <List.Label className="!text-black">Preferences</List.Label>
        <List.Control className="bg-gray-100">
          <List.KeyValue flex title="Show testnets">
            <Switch checked={showTestnets} onCheckedChange={setShowTestnets} />
          </List.KeyValue>
        </List.Control>
      </List>
    </>
  )
}
