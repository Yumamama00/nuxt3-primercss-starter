<template>
  <nav class="d-flex">
    <details v-for="i in 4" :key="i" class="details-reset details-overlay">
      <summary
        class="Header-link px-3 d-flex flex-items-center"
        aria-haspopup="true"
      >
        Menu{{ i }} <i-ic-sharp-arrow-drop-down />
      </summary>

      <div class="SelectMenu">
        <div class="SelectMenu-modal">
          <div class="SelectMenu-list">
            <button class="SelectMenu-item" role="menuitem">Text only</button>
            <button class="SelectMenu-item" role="menuitem">
              <i-ic-round-search class="mr-2" />
              With an icon
            </button>
            <button class="SelectMenu-item d-block" role="menuitem">
              With a <span class="Label">label</span>
            </button>
            <button class="SelectMenu-item" role="menuitem">
              With a counter <span class="Counter ml-1">16</span>
            </button>
            <button class="SelectMenu-item d-block" role="menuitem">
              <h5>With a heading</h5>
              <span>and some longer description</span>
            </button>
          </div>
        </div>
      </div>
    </details>
  </nav>
</template>
