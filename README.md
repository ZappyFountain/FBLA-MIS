# FBLA MIS Study Tool

A static GitHub Pages quiz app for the FBLA Management Information Systems question bank.

## What is included

- `index.html` — single-page study app
- `questions.js` — 705-question bank
- Separate profiles for **Zain**, **Ethan**, and **Yohann**
- Local browser progress tracking
- Review queue for missed questions
- Topic and difficulty filters
- 50-question and 100-question study sessions
- Stats by topic

## How to use locally

Open `index.html` in a browser.

## How to publish on GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `questions.js`, and `README.md` to the root of the repo.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.

GitHub will give you a public URL you can share with teammates.

## Important note about progress

Progress is stored in each browser using `localStorage`. That means:

- Zain, Ethan, and Yohann have separate progress on the same device.
- Progress does not automatically sync across different devices.
- Clearing browser data may erase saved progress.
- Use **Export Progress** before switching devices.
