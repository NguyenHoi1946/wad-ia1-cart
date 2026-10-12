# AI-LOG.md

## 2026-10-06 — IA#1 cartTotal

### Tool
ChatGPT (web)

### Asked for
- Help understand the IA#1 specification and rubric.
- Help create the project rules and implementation brief.
- Suggest an implementation for `cartTotal(items, options)`.
- Suggest test cases for required behaviour and edge cases.
- Help configure a simple lint gate and GitHub Actions CI.

### Produced
ChatGPT suggested:
- `PROJECT_RULE.md`
- `BRIEF.md`
- implementation for `src/cart.js`
- additional tests in `test/cart.test.js`
- `npm run lint`
- `.github/workflows/ci.yml`

### Reviewed / changed by me
- I reviewed the Git diff before running the implementation.
- I kept the solution dependency-free.
- I used `Math.round()` so the result remains a number.
- I ran `npm run lint` and `npm test` locally.
- I created my own GitHub repository and verified that CI passed.

### Rejected
- No external dependency was added.
- No unrelated project file was modified for the implementation.

### Written / performed by me
- Repository setup and Git commands.
- Reviewing generated code.
- Running tests and lint.
- Checking GitHub Actions.
- Integrating the accepted changes into the repository.