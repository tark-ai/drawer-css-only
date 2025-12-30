# CSS Drawer

A near drop-in replacement for [Vaul](https://vaul.emilkowal.ski) using native `<dialog>` and pure CSS animations.

**Zero JavaScript animations.** The only JS: `dialog.showModal()` and `dialog.close()`.

## Why CSS Drawer?

| Feature | Vaul | CSS Drawer |
|---------|------|------------|
| Bundle size | ~12KB | **~3KB** gzip (CSS auto-injected) |
| Animation engine | JavaScript | Pure CSS |
| Nesting | Manual setup | Automatic (CSS `:has()`) |
| Accessibility | Built-in | Automatic (native `<dialog>` + `inert`) |

## Installation

```bash
npm install css-drawer
```

## Quick Start

### React

```tsx
import { useRef } from 'react'
import { Drawer } from 'css-drawer/react'

function App() {
  const ref = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button onClick={() => ref.current?.showModal()}>Open</button>

      <Drawer.Root>
        <Drawer.Content ref={ref}>
          <Drawer.Handle />
          <div className="drawer-content">
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
            <button onClick={() => ref.current?.close()}>Close</button>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}
```

### Vanilla JS

```ts
import { open, close } from 'css-drawer'

document.querySelector('#open-btn').onclick = () => open('my-drawer')
```

```html
<button id="open-btn">Open</button>

<dialog class="drawer" id="my-drawer">
  <div class="drawer-handle"></div>
  <div class="drawer-content">
    <h2>Title</h2>
    <button onclick="this.closest('dialog').close()">Close</button>
  </div>
</dialog>
```

## Documentation

See [packages/css-drawer/README.md](./packages/css-drawer/README.md) for full API documentation including:

- React compound components API
- Vanilla JS API
- Directions (bottom, top, left, right, modal)
- Auto-nesting
- Theming & CSS custom properties
- TypeScript types

## Monorepo Structure

```
css-drawer-monorepo/
├── packages/
│   └── css-drawer/       # Main library (npm: css-drawer)
├── demo/                 # React demo app
├── demo-angular/         # Angular demo app
└── scripts/              # Release automation
```

## Development

```bash
# Install dependencies
pnpm install

# Run React demo with hot reload
pnpm dev

# Run Angular demo
pnpm dev:angular

# Build library
pnpm build

# Library development with watch mode
pnpm dev:lib
```

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 117+ |
| Safari | 17.5+ |
| Firefox | 129+ |

## License

MIT
