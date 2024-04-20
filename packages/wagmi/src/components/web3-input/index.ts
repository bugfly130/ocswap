import { CurrencyInput, CurrencyInput1 } from './Currency'
import { EnsInput } from './Ens'

export interface Web3Input {
  Currency: typeof CurrencyInput
  Ens: typeof EnsInput
}

export const Web3Input: Web3Input = {
  Currency: CurrencyInput,
  Ens: EnsInput,
}

export interface Web3Input1 {
  Currency: typeof CurrencyInput1
  Ens: typeof EnsInput
}

export const Web3Input1: Web3Input1 = {
  Currency: CurrencyInput1,
  Ens: EnsInput,
}
