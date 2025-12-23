# Contributing to css-drawer

Thanks for your interest in contributing! This guide will help you get started.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tark-ai/css-drawer.git
   cd css-drawer
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development**
   ```bash
   # Run demo with hot reload
   pnpm dev

   # Or watch library changes only
   pnpm dev:lib
   ```

## Project Structure

- `packages/css-drawer/` - Main library
  - `src/index.ts` - Vanilla JS API
  - `src/react.tsx` - React components
  - `src/drawer.css` - Core styles
- `demo/` - Demo application for testing

## Making Changes

### Code Style

- Keep JavaScript minimal - the goal is CSS-only animations
- Use native browser APIs where possible
- Avoid adding dependencies

### CSS Guidelines

- Use CSS custom properties for theming
- Support `prefers-reduced-motion`
- Support `prefers-color-scheme` for dark mode
- Use `dvh` units for mobile keyboard handling

### Testing Changes

1. Run the demo: `pnpm dev`
2. Test all directions: bottom, top, left, right
3. Test nested drawers
4. Test on mobile (or device emulation)
5. Test with keyboard navigation

## Submitting Changes

### Creating a Pull Request

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Add a changeset: `pnpm changeset`
5. Commit your changes
6. Push and open a pull request

### Changesets

We use [changesets](https://github.com/changesets/changesets) for versioning. When you make changes that should be released:

```bash
pnpm changeset
```

Select the package (`css-drawer`) and describe your changes. Choose the appropriate version bump:

- **patch**: Bug fixes, documentation
- **minor**: New features (backwards compatible)
- **major**: Breaking changes

### Commit Messages

Use clear, descriptive commit messages:

- `fix: resolve translate issue with right drawer`
- `feat: add top direction support`
- `docs: update API documentation`

## Reporting Issues

When reporting bugs, please include:

- Browser and version
- Device (desktop/mobile)
- Steps to reproduce
- Expected vs actual behavior

## Questions?

Open an issue for questions or discussions about potential features.
