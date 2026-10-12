# SELF_ASSESSMENT_REPORT

| Criterion | Claimed | Evidence |
|---|---:|---|
| Behaviour | 30/30 | `src/cart.js`: worked example returns 467400 as a number; empty cart returns 0; free shipping works at the threshold; invalid price and quantity throw `RangeError`. |
| Tests | 20/20 | `test/cart.test.js`: 6 tests covering the worked example, empty cart, free-shipping threshold, negative price, non-integer quantity, and zero quantity. `npm test` passes 6/6. |
| Harness | 15/20 | `PROJECT_RULE.md`; `npm test`; `npm run lint`; `.github/workflows/ci.yml`; GitHub Actions CI passes on push. |
| Brief | 15/15 | `BRIEF.md`: specifies allowed files, contract, error cases, validation, and no external dependencies. |
| AI-LOG.md | 15/15 | `AI-LOG.md`: records ChatGPT usage, generated suggestions, review decisions, rejected changes, and work performed manually. |
| **Total** | **95/100** | |

## What I did not manage

The project has passing tests and CI. I did not use a dedicated formatter or
third-party linter; the current `lint` command uses Node's built-in syntax
checking.