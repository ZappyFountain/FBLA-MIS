# FBLA MIS Study Tool

Static GitHub Pages quiz app for the 705-question FBLA MIS bank.

## Files

- `index.html` — single-page quiz app
- `questions.js` — generated from `Final_FBLA_MIS_Master_Question_Bank_705_CLEAN.json`

## Features

- 705-question bank
- Profiles for Zain, Ethan, and Yohann
- Browser-local progress saving with `localStorage`
- Category and difficulty filters
- Session sizes: full bank, 25, 50, or 100 questions
- Search by ID, topic, reference, keyword, or answer text
- Review queue
- Lifetime stats by profile and category
- Question tracker
- No backend and no AI/API key required

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload `index.html` and `questions.js` to the root of the repo.
3. Go to **Settings → Pages**.
4. Set source to **Deploy from a branch**.
5. Select `main` and `/root`.
6. Open the generated GitHub Pages URL.

## Data note

Progress is saved only in the user's current browser/device. It does not sync between computers.

Generated: 2026-06-27
