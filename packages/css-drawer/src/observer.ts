/**
 * Shared drawer state observer
 * Single MutationObserver that dispatches events for all drawer state changes
 */

export const DRAWER_STATE_CHANGE = 'drawer:statechange'

let initialized = false

export function initDrawerObserver(): void {
  if (typeof window === 'undefined' || initialized) return
  initialized = true

  const updateInertState = () => {
    const openDrawers = Array.from(
      document.querySelectorAll<HTMLDialogElement>('dialog.drawer[open]')
    )
    openDrawers.forEach((drawer, index) => {
      if (index === openDrawers.length - 1) {
        drawer.removeAttribute('inert')
      } else {
        drawer.setAttribute('inert', '')
      }
    })
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'open' &&
        (mutation.target as HTMLElement).classList.contains('drawer')
      ) {
        updateInertState()
        window.dispatchEvent(new CustomEvent(DRAWER_STATE_CHANGE, {
          detail: { target: mutation.target }
        }))
        break
      }
    }
  })

  observer.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ['open'],
  })
}

// Auto-initialize on import
initDrawerObserver()
