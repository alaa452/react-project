#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if ! command -v gh >/dev/null 2>&1; then
  echo 'GitHub CLI is missing. Install from https://cli.github.com/' >&2
  exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
  echo 'Please log in to GitHub:'
  gh auth login
fi
if [ "$(git branch --show-current)" != main ]; then echo 'Expected branch main' >&2; exit 1; fi
if ! git diff --quiet || ! git diff --cached --quiet; then echo 'Uncommitted changes found. Commit them first.' >&2; exit 1; fi
if git remote get-url origin >/dev/null 2>&1; then echo 'Origin already set. Verify it before pushing.' >&2; exit 1; fi
if gh repo view alaa452/react-project >/dev/null 2>&1; then echo 'Destination repository already exists. Refusing to overwrite.' >&2; exit 1; fi
gh repo create alaa452/react-project --public --source=. --remote=origin --push
echo 'Published: https://github.com/alaa452/react-project'
