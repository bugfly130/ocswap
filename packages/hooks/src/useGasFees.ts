import { useLocalStorage } from './useLocalStorage'

export const useGasFees = (
  key?: string,
  defaultValue?: {
    title: string
    gwei: number
  },
) =>
  useLocalStorage(
    key || 'gasFees',
    defaultValue || {
      title: 'Fast',
      gwei: 24.2,
    },
  )
