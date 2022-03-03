/* eslint-disable prefer-const */
import { FACTORY_ADDRESS, ZERO_BI, ONE_BI, ZERO_BD, ADDRESS_ZERO } from './../utils/constants'
import { Factory } from '../../generated/schema'
import { PoolCreated } from '../../generated/Factory/Factory'
import { Pool} from '../../generated/schema'
import { Pool as PoolTemplate } from '../../generated/templates'
import { log, BigInt, Address } from '@graphprotocol/graph-ts'

export function handlePoolCreated(event: PoolCreated): void {
  // temp fix
  if (event.params.pool == Address.fromHexString('0x8fe8d9bb8eeba3ed688069c3d6b556c9ca258248')) {
    return
  }

  // load factory
  let factory = Factory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS)
    factory.poolCount = ZERO_BI
  }

  factory.poolCount = factory.poolCount.plus(ONE_BI)

  let pool = new Pool(event.params.pool.toHexString()) as Pool

  pool.save()
  // create the tracked contract based on the template
  PoolTemplate.create(event.params.pool)
  factory.save()
}
