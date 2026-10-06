# IA#1 Brief — cartTotal

## Task
Implement `cartTotal(items, options)` for the shopping cart assignment.

## Allowed files
- `src/cart.js`
- `test/cart.test.js`

Do not modify other project files unless explicitly approved.

## Contract
`cartTotal(items, options)` must return the final cart total as a JavaScript number.

Each item has:
- `name`
- `price`
- `qty`

Options contain:
- `vatRate`
- `freeShipFrom`
- `shipFee`

The function must:

1. Calculate subtotal as `price * qty` for all items.
2. Calculate VAT from the subtotal.
3. Apply free shipping when `subtotal >= freeShipFrom`.
4. Otherwise add `shipFee`.
5. Round the final result to the nearest whole đồng.
6. Return `0` for an empty cart.

## Error cases
Throw `RangeError` when:
- `price` is negative.
- `qty` is not a positive integer.

Examples of invalid quantity:
- `0`
- negative number
- decimal such as `1.5`

## Constraints
- Plain JavaScript only.
- No external dependencies.
- Use ES modules.
- Do not use `toFixed()` for the final result because the result must remain a number.
- Keep the implementation small and readable.

## Validation
The task is complete when:
- `npm test` passes.
- The worked example returns `467400`.
- Empty cart returns `0`.
- Free shipping works at the threshold.
- Invalid price throws `RangeError`.
- Invalid quantity throws `RangeError`.