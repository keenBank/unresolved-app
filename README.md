# قضية لم تحل — Unresolved Cases (merged app)

Single Vite + React + React Router project, merged from the old set of
separate Create-React-App deployments (one case = one repo) into one app,
with the same design, colors, fonts, images and puzzle logic.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

Works on current Node.js LTS, deploys to Vercel/GitHub Pages/any static host
(it's a client-side SPA — if you deploy somewhere that doesn't rewrite all
paths to index.html, add a rewrite rule for `/*  ->  /index.html`).

## Routes

- `/` — home page, lists all cases
- `/case/wedding`, `/case/wedding/puzzle1|2|3`
- `/case/final-show`, `/case/final-show/puzzle1|2|3`
- `/case/death-in-the-darkness`, `/case/death-in-the-darkness/puzzle1|2|3`
- `/minigames/puzzle4` — standalone "لا أحد يعلم" minigame

"سطو من الداخل" (Internal Burglary) stays an external link on the home page
— its source wasn't part of the provided project bundle. The old PDF/document
upload backend (Node/Express + MongoDB, unrelated theme) was intentionally
left out, per your request.

## Structure

```
src/
  assets/          images/fonts, organized per case + a shared/ folder for
                   assets reused across every page (nav icons, fonts, etc.)
  components/
    layout/        Header/Nav/Footer used by Home + each case's own landing page
    puzzle/         Nav/Footer used by the puzzle pages (parametrized by case+step)
  pages/
    Home/
    Cases/
      Wedding/        index.jsx (case landing) + Puzzle1/2/3.jsx
      FinalShow/      same pattern
      DeathInTheDarkness/  same pattern
    MiniGames/
      Puzzle4/
  styles/          shared stylesheets (app.css, puzzle-app.css, response.css)
  App.jsx
  main.jsx
```

## Notes on the migration

- All game logic, answers, hints, and win/lose behavior were preserved
  exactly from the original source — only imports, file locations and the
  Nav/Footer components were adapted to work as one merged app.
- Duplicate Nav/Footer/Header/App.css/response.css that were byte-identical
  across the old per-case repos were consolidated into single shared files.
- Old dead links to the separate github.io-hosted pages were rewritten to
  React Router routes so in-app navigation actually works.
- No network access was available while building this, so `npm install` /
  `npm run build` could not be executed here to verify — please run them on
  your machine to confirm before deploying.
