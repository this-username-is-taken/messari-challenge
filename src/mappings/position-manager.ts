/* eslint-disable prefer-const */
import {
  Collect,
  DecreaseLiquidity,
  IncreaseLiquidity,
  Transfer
} from '../../generated/NonfungiblePositionManager/NonfungiblePositionManager'
import { Factory } from '../../generated/schema'
import { FACTORY_ADDRESS, ZERO_BI, ONE_BI, ZERO_BD, ADDRESS_ZERO } from './../utils/constants'

export function handleIncreaseLiquidity(event: IncreaseLiquidity): void {
}

export function handleDecreaseLiquidity(event: DecreaseLiquidity): void {
}

export function handleCollect(event: Collect): void {
}

export function handleTransfer(event: Transfer): void {
}
