# Project Guidelines

## Stack

React 19, TypeScript ~5.9, Vite 7, Zustand 5, Motion 12, @xyflow/react 12,
embla-carousel-react 8.6, react-responsive 10, react-router-hash-link 2.4,
react-icons 5, usehooks-ts 3, ESLint 9, typescript-eslint 8.

Always note the version of any library being discussed or used.

## Critical Thinking

- Ask clarifying questions before implementing if the requirement is ambiguous.
- If unsure about an API, behavior, or library version — say so. Don't invent.
- Look up or confirm details before stating them as facts.

## Response Style

- Be concise. No trailing summaries of what was just done.

## Code Principles

**YAGNI / KISS / DRY**
- Only implement what is explicitly needed now.
- Prefer the simplest solution. No speculative abstractions.
- Don't repeat logic — extract only when there are 3+ real callsites.

**State management**
- Avoid adding state that can be derived from existing state.
- When a value depends on other state, derive it as a constant at render time
  unless there is a concrete performance reason to memoize or store it.
- Never duplicate state that already exists elsewhere (props, store, URL, etc.).

**Avoiding prop drilling — decision rule:**

1. **Props** — 1–2 levels deep. Default choice; no overhead.
2. **React Context** — 3–5 levels deep, or when several siblings in a
   subtree need the same value. Keep each context narrow (one concern per
   context). Memoize the value with `useMemo` to prevent unnecessary
   re-renders of all consumers.
3. **Zustand** — state shared across distant, unrelated parts of the tree
   (e.g. header + sidebar + modal), or state that persists across
   unmounts/navigation. Do not use Zustand just because drilling feels
   inconvenient for a local subtree.

Never pass props through components that don't use them just to reach a
grandchild — that's the signal to move to Context or Zustand per the rule
above.

**Memoization**
- Use `useMemo` / `useCallback` only when there is a measurable or obvious
  performance benefit (expensive computation, referential stability for deps).
- Don't wrap primitives or trivially cheap expressions in `useMemo`.
- Prefer deriving values directly over memoizing them when the computation is cheap.

**Race conditions**
- Always cancel or ignore stale async operations (AbortController, cleanup
  flags, or `useEffect` cleanup functions).
- Never update state after a component has unmounted.

**Layout shifts**
- Reserve space for async-loaded content (images, fonts, dynamic data) with
  explicit dimensions, `aspect-ratio`, or skeleton placeholders.
- Avoid inserting or removing elements that shift surrounding content after
  first paint.

## Styling

- Use CSS Modules (`.module.css`) for all component styles.
- No inline styles except for truly dynamic values (e.g. computed widths).
- No global class names that could collide.

## Tooling

- After editing `.ts` / `.tsx` / `.js` / `.jsx` / `.css` files, run Prettier then ESLint:
  ```
  npx prettier --write <file> && npx eslint --fix <file>
  ```
- Prettier 3.8 is installed with default config (no `.prettierrc`).
- This is automated via a PostToolUse hook in `.claude/settings.json`.
