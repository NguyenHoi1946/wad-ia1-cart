# Project Rules

## Project
IA#1 — cartTotal with a harness.

## Stack
- Node.js 24+
- Plain JavaScript with ES modules
- Built-in `node:test`
- No external dependencies

## Commands
- Run tests: `npm test`

## Project structure
- Implementation: `src/cart.js`
- Tests: `test/cart.test.js`

## Rules
- Keep the implementation small and readable.
- Use named exports.
- `cartTotal()` must return a number.
- Round the final result to the whole đồng.
- Invalid negative price must throw `RangeError`.
- Invalid quantity must throw `RangeError`.
- Empty cart must return `0`.

## Never
- Never add a dependency without explicit approval.
- Never modify the specification just to make a test pass.
- Never use `toFixed()` for the final result because it returns a string.
- Never commit `node_modules`, `.env`, or secrets.