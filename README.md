# react-project — Part 1

React + Vite project containing **only** the first assignment scope:

| Feature | API request | Hook | Item component |
| --- | --- | --- | --- |
| Get categories | `GET /Categories` | `src/hook/useCategories.jsx` | `CategoryItem.jsx` |
| Get products | `GET /Products` | `src/hook/useProducts.jsx` | `ProductItem.jsx` |
| Get product details | `GET /Products/:id` | `src/hook/useProduct.jsx` | `ProductDetailsItem.jsx` |

React Query is initialized once via `QueryClientProvider` in `src/App.jsx`. The app has no cart, checkout, authentication pages, or unrelated assignment features.

## API documentation

Provided reference: https://documenter.getpostman.com/view/14325224/2sB3dSP8UU

The **full API base URL could not be confirmed** through the accessible documentation, so it is deliberately **not guessed**. The paths above were confirmed against the original code. Before a working API-driven Render deployment, set `VITE_BURL` to the actual HTTPS base URL from the Postman documentation or original environment. If the endpoints are protected or block browser CORS, the API owner must enable public browser access or supply an appropriate backend; do not expose tokens as `VITE_` variables.

Local setup:

```bash
cp .env.example .env  # On Windows, copy .env.example .env
# Edit .env and set your real VITE_BURL
npm install
npm run check
npm run dev
```

Run `npm run build` to verify production compilation (requires installed dependencies).

## GitHub (new repository, without modifying the original)

This folder **already includes `.git`** and separate commits for setup, categories, products, product details, and Render, followed by a packaging/name update. These are new commits created for the extraction, not the user's historical development timeline.

**Fastest option:** Install [GitHub CLI](https://cli.github.com/), sign into the correct GitHub account (such as `alaa452`) with `gh auth login`, then from the extracted project root run:

```bash
gh repo create alaa452/react-project --public --source=. --remote=origin --push
```

Or use the included `publish-github.ps1` (Windows PowerShell) or `publish-github.sh` (macOS/Linux), which checks the prerequisites and uses this same command. **Neither uploads to or changes `alaa452/React`.**

If you prefer not to install GitHub CLI, create an empty **react-project** repository in the GitHub UI (no automatic README) and run:

```bash
git remote add origin https://github.com/alaa452/react-project.git
git push -u origin main
```

A single push sends all the existing Git commits; multiple commits do not mean they were historically pushed at separate times.

## Render

In [Render](https://dashboard.render.com/), connect `alaa452/react-project` as a **Static Site**, or create a Blueprint from `render.yaml`. Choose branch `main`.

| Setting | Value |
| --- | --- |
| Build command | `npm install && npm run build` |
| Publish directory | `dist` |
| Environment variable | `VITE_BURL` = **actual HTTPS API base URL** |
| SPA rewrite | `/*` → `/index.html` (`Rewrite`) |

`VITE_BURL` is a browser-exposed build-time value. After adding or changing it in Render, redeploy/rebuild. Access `/products/:id` via the SPA rewrite.

## Source and commit provenance

This minimal example is based on operations from [alaa452/React at `6d34626`](https://github.com/alaa452/React/commit/6d346262d771cfae892f69a3207f61a34c456b5a), **without modifying the original repository**. The original item files were placeholders; three actual `*Item.jsx` files were added here to separate presentation from the data fetching hooks. The old commit is **not** part of this new repository's Git ancestry.

## Verification

- `npm run check`: checks the three GET hooks, item components, provider and repo name; no network required.
- `npm run build`: compilation validation with installed npm dependencies.
- Live requests on Render cannot be verified without the actual API origin and CORS/access behavior.
