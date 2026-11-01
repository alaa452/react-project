# React Query — Part 1: Three GET Operations

Independent **Part 1 only** React + Vite frontend extracted and reorganized from
[alaa452/React at commit 6d34626](https://github.com/alaa452/React/commit/6d346262d771cfae892f69a3207f61a34c456b5a).

**Important:** This is a **new, independent Git repository** with a clean and complete
five-commit history. The source project's existing commit SHA is a *reference*, not
an ancestor of these five commits. We have not changed the original repository.
All these new commits were created during this extraction, not retroactively on
past dates. They separate the implementation into meaningful reviewable steps.

## Required functions

| Feature | Endpoint | React Query Hook | Item component |
| --- | --- | --- | --- |
| Get categories | `GET /Categories` | `src/hook/useCategories.jsx` | `CategoryItem.jsx` |
| Get products | `GET /Products` | `src/hook/useProducts.jsx` | `ProductItem.jsx` |
| Get product details | `GET /Products/:id` | `src/hook/useProduct.jsx` | `ProductDetailsItem.jsx` |

Only these three API GET operations are present; no cart, checkout, login,
registration, filters, or other application features.

## Run locally

1. Use Node.js 22.16.0 or later in the Node 22 series.
2. Copy `.env.example` to `.env` and set `VITE_BURL` to the **real API base URL**.
3. Install and run:

```bash
npm install
npm run dev
```

A functioning API and suitable CORS / public endpoint permissions are required.
The original project's `.env` was not tracked in Git, so the actual API URL could
not be recovered. No mock API has been substituted and no working public API
is claimed. Never put API secrets in Vite `VITE_` variables, which are public in
the generated browser bundle.

## Publish to new GitHub repository

1. Create a new empty GitHub repository (no initial README or `.gitignore`).
2. Extract this ZIP, including its hidden `.git` directory.
3. In a terminal inside the extracted folder:

```bash
git status
git log --oneline
git remote add origin https://github.com/YOUR_USERNAME/React-Query-Part1.git
git push -u origin main
```

The new repository will display **five separately scoped commits**.
A *single push* transports all five historical commits. If the assignment
requires evidence of pushes at separate times or deployment at each stage, that
cannot be honestly reconstructed from a project already finished; discuss this
with the instructor or develop future stages in new incremental pushes.

## Render setup

Option A: **New > Static Site**, connect your new repo and choose `main`:

- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Environment variable: `VITE_BURL` = real API base URL (**set before build**)
- Under Redirects/Rewrites: `/*` -> `/index.html` with action `Rewrite`

Option B: Use **New > Blueprint** with the included `render.yaml`; enter
`VITE_BURL` when prompted, then verify the chosen branch and settings.

Render deploys the HEAD of the selected branch on pushes. It does **not**
publish all earlier committed versions at once. The `/products/:id` deep-link
is covered by the SPA rewrite.

## Audit and origins

- The original project included placeholder item files; the `*Item.jsx`
  components in this extraction were created specifically to meet the Part 1
  item-component separation requirement.
- Original three GET URL patterns and `useQuery` semantics were retained.
- The original Axios `token` property did not set a normal Authorization header;
  this isolated version has no auth flow. If API endpoints require tokens, a
  compliant public API/auth mechanism must be configured before production use.
- Source response contract assumed: `data.response.data` for the two lists and
  `data.response` for one product.

## Git history

```text
chore: initialize React Vite app with React Query provider
feat(categories): fetch categories with useQuery and CategoryItem
feat(products): fetch products with useQuery and ProductItem
feat(product-details): retrieve GET Products by id and show details
chore(render): add static site configuration and deployment guide
```
