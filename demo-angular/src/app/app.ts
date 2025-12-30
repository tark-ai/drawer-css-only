import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <main class="demo">
      <h1>CSS Drawer - Angular</h1>
      <p>Using the vanilla JS API with Angular</p>

      <div class="demo-buttons">
        <button class="btn btn--primary" (click)="openDrawer(bottomDrawer)">
          Bottom Drawer
        </button>
        <button class="btn btn--secondary" (click)="openDrawer(modalDrawer)">
          Modal
        </button>
        <button class="btn btn--secondary" (click)="openDrawer(rightDrawer)">
          Right Drawer
        </button>
      </div>
    </main>

    <!-- Bottom Drawer -->
    <dialog #bottomDrawer class="drawer">
      <div class="drawer-handle"></div>
      <div class="drawer-content">
        <h2>Bottom Drawer</h2>
        <p>This drawer opens from the bottom (default direction).</p>
        <button class="btn btn--secondary btn--full" (click)="closeDrawer(bottomDrawer)">
          Close
        </button>
      </div>
    </dialog>

    <!-- Modal -->
    <dialog #modalDrawer class="drawer" data-direction="modal">
      <div class="drawer-content">
        <h2>Centered Modal</h2>
        <p>Uses direction="modal" to open as a centered dialog with scale animation.</p>
        <div class="actions">
          <button class="btn btn--primary btn--full" (click)="openDrawer(nestedModal)">
            Open Nested Modal
          </button>
          <button class="btn btn--secondary btn--full" (click)="closeDrawer(modalDrawer)">
            Close
          </button>
        </div>
      </div>
    </dialog>

    <!-- Nested Modal -->
    <dialog #nestedModal class="drawer" data-direction="modal">
      <div class="drawer-content">
        <h2>Nested Modal</h2>
        <p>Modals can stack just like drawers.</p>
        <button class="btn btn--primary btn--full" (click)="closeDrawer(nestedModal)">
          Close
        </button>
      </div>
    </dialog>

    <!-- Right Drawer -->
    <dialog #rightDrawer class="drawer" data-direction="right">
      <div class="drawer-content">
        <h2>Right Drawer</h2>
        <p>This drawer opens from the right.</p>
        <button class="btn btn--secondary btn--full" (click)="closeDrawer(rightDrawer)">
          Close
        </button>
      </div>
    </dialog>
  `,
  styles: [`
    .demo {
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      margin-bottom: 2rem;
    }

    .demo-buttons {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      border: none;
      transition: all 0.15s ease;
    }

    .btn--primary {
      background: #0066ff;
      color: white;
    }

    .btn--primary:hover {
      background: #0052cc;
    }

    .btn--secondary {
      background: #f0f0f0;
      color: #333;
    }

    .btn--secondary:hover {
      background: #e0e0e0;
    }

    .btn--full {
      width: 100%;
    }

    .drawer-content {
      padding: 1.5rem;
    }

    .drawer-content h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .drawer-content p {
      color: #666;
      margin-bottom: 1.5rem;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `],
})
export class App {
  openDrawer(dialog: HTMLDialogElement) {
    dialog.showModal();
  }

  closeDrawer(dialog: HTMLDialogElement) {
    dialog.close();
  }
}
