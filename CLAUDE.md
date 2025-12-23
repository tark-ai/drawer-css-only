# CLAUDE.md

This file provides guidance for Claude Code when working with this repository.

## Project Overview

css-drawer is a Vaul-quality drawer/bottom-sheet component using native `<dialog>` element and pure CSS animations. The only JavaScript required is `dialog.showModal()` and `dialog.close()`.

## Repository Structure

```
css-drawer-monorepo/
├── packages/
│   └── css-drawer/          # Main library package
│       ├── src/
│       │   ├── index.ts     # Vanilla JS API
│       │   ├── react.tsx    # React compound components
│       │   └── drawer.css   # Core CSS with auto-nesting
│       └── tsdown.config.ts # Build configuration
├── demo/                    # React demo application
├── scripts/
│   └── create-github-releases.js  # Release automation
└── .changeset/              # Changesets for versioning
```

## Build Commands

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Development mode (demo with hot reload)
pnpm dev

# Library development with watch mode
pnpm dev:lib

# Create a changeset for versioning
pnpm changeset

# Version packages based on changesets
pnpm version

# Publish to npm and create GitHub releases
pnpm release
```

## Key Technical Concepts

### CSS-Only Animations
- Uses `@starting-style` for entry animations from `display: none`
- Uses `allow-discrete` for transitioning `display` and `overlay`
- Uses `dvh` units for mobile keyboard handling

### Auto-Nesting Detection
Uses CSS `:has()` selector to detect open sibling drawers without JavaScript:
```css
.drawer[open]:has(~ .drawer[open]) {
  scale: 0.94;
  translate: 0 -20px;
}
```

### Direction Support
Supports bottom (default), top, left, right via `data-direction` attribute.
Uses CSS custom property `--_translate-closed` to handle specificity.

### Accessibility
MutationObserver automatically manages `inert` attribute on stacked drawers.
Runs on module import - no manual setup required.

## Package Exports

- `css-drawer` - Vanilla JS API
- `css-drawer/react` - React compound components (auto-injects CSS)
- `css-drawer/styles` - CSS file (for manual import if needed)

## Development Workflow

1. Make changes to `packages/css-drawer/src/`
2. Test with `pnpm dev` (runs demo)
3. Create changeset: `pnpm changeset`
4. Commit changes
5. Release: `pnpm release`

## Build Tools

- **tsdown**: TypeScript bundler (outputs ESM + CJS)
- **@bosh-code/tsdown-plugin-inject-css**: Auto-injects CSS on import
- **changesets**: Version management and changelog generation
