$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) { throw 'Install GitHub CLI from https://cli.github.com/' }
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Git is missing' }
& gh auth status
if ($LASTEXITCODE -ne 0) { throw 'Please run gh auth login and then rerun this script' }
$branch = & git branch --show-current
if ($branch -ne 'main') { throw 'Expected branch main' }
& git diff --quiet
if ($LASTEXITCODE -ne 0) { throw 'Uncommitted changes found' }
& git diff --cached --quiet
if ($LASTEXITCODE -ne 0) { throw 'Uncommitted staged changes found' }
$remotes = @(& git remote)
if ($remotes -contains 'origin') { throw 'Origin already set. Refusing to change existing remote' }
# GitHub CLI fails safely if this repository name is already taken.
& gh repo create alaa452/react-project --public --source=. --remote=origin --push
if ($LASTEXITCODE -ne 0) { throw 'GitHub repo creation/push failed. No changes were made to the original repo' }
Write-Host 'Published: https://github.com/alaa452/react-project'
