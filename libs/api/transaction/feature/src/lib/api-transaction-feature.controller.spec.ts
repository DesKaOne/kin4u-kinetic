import { Test } from '@nestjs/testing'
import { ApiTransactionFeatureController } from './api-transaction-feature.controller'

describe('ApiTransactionFeatureController', () => {
  let controller: ApiTransactionFeatureController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiTransactionFeatureController],
    }).compile()

    controller = module.get(ApiTransactionFeatureController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })
})
