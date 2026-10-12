// Calculate the final total for a shopping cart.
export function cartTotal(items, options) {
  if (items.length === 0) {
    return 0
  }

  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('price must not be negative')
    }

    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('qty must be a positive integer')
    }
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  const shipping =
    subtotal >= options.freeShipFrom ? 0 : options.shipFee

  const total =
    subtotal +
    subtotal * options.vatRate +
    shipping

  return Math.round(total)
}