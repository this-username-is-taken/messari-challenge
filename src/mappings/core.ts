/* eslint-disable prefer-const */
import { Pool as PoolABI } from '../../generated/Factory/Pool'
import { BigDecimal, BigInt, ethereum } from '@graphprotocol/graph-ts'
import { Factory } from '../../generated/schema'
import { FACTORY_ADDRESS, ZERO_BI, ONE_BI, ZERO_BD, ADDRESS_ZERO } from './../utils/constants'
import {
  Burn as BurnEvent,
  Flash as FlashEvent,
  Initialize,
  Mint as MintEvent,
  Swap as SwapEvent
} from '../../generated/templates/Pool/Pool'

export function handleInitialize(event: Initialize): void {
}

export function handleMint(event: MintEvent): void {
}

export function handleBurn(event: BurnEvent): void {
}

export function handleSwap(event: SwapEvent): void {
}

export function handleFlash(event: FlashEvent): void {
}
