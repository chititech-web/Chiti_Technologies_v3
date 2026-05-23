# Chiti Technologies — File Governance

> Rules for what goes where, how files are named, and how they are deleted.

---

## File Purpose Map

| File | Purpose | Who edits |
|---|---|---|
| `AGENTS.md` | Dev guide — build commands, project structure, animation reference, conventions | Lead developer |
| `README.md` | Public-facing project overview — links to all guides | Lead developer |
| `NOVA_SETUP.md` | Nova AI concierge setup guide | Nova engineer |
| `docs/BRAND_PLAYBOOK.md` | Brand positioning, vocabulary, engagement tiers, pricing, competitors, visual hierarchy | Strategy lead |
| `docs/OPERATIONS_PLAYBOOK.md` | CMS framework, tech stacks, onboarding, handoff, checklists, AI prompts | Delivery lead |
| `docs/JOURNAL.md` | Technical & design journal — architecture decisions, component notes, Nova system | All team members |
| `docs/FILE_GOVERNANCE.md` | This file — file organization rules | Lead developer |

---

## Naming Conventions

| Pattern | Used for | Example |
|---|---|---|
| `UPPER_SNAKE_CASE.md` | Core reference docs at repo root | `AGENTS.md`, `README.md`, `NOVA_SETUP.md` |
| `UPPER_SNAKE_CASE.md` | Core docs in `docs/` | `BRAND_PLAYBOOK.md`, `OPERATIONS_PLAYBOOK.md`, `FILE_GOVERNANCE.md`, `JOURNAL.md` |
| `PascalCase.md` | Standalone setup / reference guides | `NOVA_SETUP.md` |

---

## Deletion Protocol

**No file is deleted until all of the following are true:**

1. The file has been **read in full** (all lines)
2. Any content worth preserving has been **merged into an existing or new file** within the same git-tracked directory
3. The deletion has been **explicitly approved** by the project lead

### Why this rule exists

A 566-line file containing engagement models, CMS decision frameworks, onboarding workflows, and AI prompts was permanently deleted because the deletion was executed before the file was fully read. The content was not migrated anywhere. This protocol prevents that from recurring.

### Exception (safe to delete without approval)

- Files inside `node_modules/`, `.next/`, or build artifacts
- Lock files when the corresponding manifest changes (`package-lock.json` when `package.json` changes — handled by npm)

---

## Content Lifecycle

```
File created → actively edited → stable → only updated when workflows change → archived (if superseded)
```

**Archived files** are moved to a `docs/archive/` directory, never deleted outright.

```
docs/archive/
└── superseded-file.md
```
