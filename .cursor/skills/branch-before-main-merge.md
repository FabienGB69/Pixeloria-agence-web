# Skill — Branch before merge to main

## Rule
Always create or switch to a dedicated feature branch before merging updates from `main`.

## Process
1. Ensure clean working tree:
   - `git status --short`
2. Create/switch branch:
   - `git checkout -b "cursor/<topic>-4fc6"` (or `git checkout <existing-branch>`)
3. Fetch latest main:
   - `git fetch origin main`
4. Merge main into feature branch:
   - `git merge origin/main`
5. Resolve conflicts on the feature branch only.

## Why
- avoids breaking `main`,
- keeps conflict resolution isolated,
- makes rollback easier.
