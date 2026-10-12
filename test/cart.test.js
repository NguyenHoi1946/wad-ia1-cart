import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart costs nothing', () => {
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal([], options), 0)
})

test('shipping is free at the threshold', () => {
  const items = [
    { name: 'Product', price: 500000, qty: 1 },
  ]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 540000)
})

test('negative price throws RangeError', () => {
  const items = [
    { name: 'Invalid', price: -1, qty: 1 },
  ]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})

test('non-integer quantity throws RangeError', () => {
  const items = [
    { name: 'Invalid', price: 100000, qty: 1.5 },
  ]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})

test('zero quantity throws RangeError', () => {
  const items = [
    { name: 'Invalid', price: 100000, qty: 0 },
  ]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})