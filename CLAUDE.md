# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

React 18 + Vite + Tailwind 3 single-page app: the user types a Football Manager player's attributes (1–20) and gets the player traits that best suit them. No backend, no router.

## Commands

- `npm start` — Vite dev server on port 3000 (set in `vite.config.mjs` to match the old CRA port)
- `npm test` — Vitest, single run
- Single test: `npx vitest run src/assets/getRecomendations.test.js -t "weights key"`
- `npm run build` — production build into `dist/`; `npm run preview` serves it
- No linter is configured.
- Deploy: every push to `main` runs `.github/workflows/deploy.yml` (test, build, publish `dist/` to GitHub Pages). `base: "./"` in `vite.config.mjs` keeps asset paths relative so the site works under `/fm-helper/`; don't add a router without revisiting that.

## Architecture

- **State**: `PlayerTraitHelper` holds `playerAttributes` (`{ [attributeKey]: number }`) in `useState` and shares it through `PlayerContext`. Each `Attribute` input writes to it; `RecomendationsTable` reads it and recomputes on every render.
- **Attribute keys**: `src/assets/attributes.js` (`attributeGroups`) is the single source of attribute names, grouped technical/mental/physical; each key equals its value (camelCase). The form is generated from it, and `Attribute.jsx` derives display labels from the camelCase key (`offTheBall` → "Off The Ball"). Values go through `parseAttribute` (clamped to 0–20).
- **Trait data**: `src/assets/playerTraits.js` (`allTraits`) is keyed by the trait's display name; each trait has up to three tiers, `key` / `secondary` / `other`, taken from https://www.passion4fm.com/football-manager-player-traits/. The user chose this source over the earlier hand-made list, so do not re-add attributes from the old list. Traits with no listed attributes, or that depend on attributes the form lacks (goalkeeper Throwing, weaker foot), are deliberately left out.
- **Scoring**: `getRecomendations` computes a weighted average per trait using `tierWeights` (quadratic 9/4/1, our choice, since passion4fm gives no numbers). Missing attributes count as 0. The rating stays on the 0–20 scale; the table shows the top 12 with rating > 0.
- The test in `getRecomendations.test.js` checks that every trait attribute exists in `attributeGroups`, so a typo in `playerTraits.js` fails `npm test`.

## Gotchas

- Files and identifiers spell it "Recomendation" (one "m"). Keep that when adding or grepping.
- JSX must live in `.jsx` files; Vite doesn't parse JSX in `.js`.
- `package.json` has no `"type": "module"`: `tailwind.config.js` and `postcss.config.js` are CommonJS, which is why the Vite config is `.mjs`.
- Tailwind is v3 (PostCSS plugin). Don't upgrade to v4 casually; its setup is different.
- `core.autocrlf=true` and some files (e.g. `.gitignore`) have CRLF line endings, so line-anchored `sed` patterns like `^foo$` may not match.
- UI text is in English to match FM's in-game attribute and trait names.
