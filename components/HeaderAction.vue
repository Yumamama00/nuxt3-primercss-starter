<template>
  <div class="d-flex">
    <!-- FullTextSearch -->
    <div class="Header-item">
      <i-ic-round-search class="Header-icon" />
    </div>

    <!-- Theme Switcher -->
    <details class="details-reset details-overlay">
      <summary class="Header-item" style="cursor: pointer" aria-haspopup="true">
        <i-mdi-theme-light-dark class="Header-icon" />
        <i-ic-sharp-arrow-drop-down />
      </summary>

      <div class="SelectMenu right-0">
        <div class="SelectMenu-modal">
          <div class="SelectMenu-list">
            <button
              class="SelectMenu-item"
              role="theme-menu-item"
              :class="{ 'color-bg-accent': themeStore.theme === 'light' }"
              @click="changeTheme('light')"
            >
              <i-ic-round-light-mode
                class="mr-2"
                style="width: 15px; height: 15px"
              />
              Light
            </button>
            <button
              class="SelectMenu-item"
              role="theme-menu-item"
              :class="{ 'color-bg-accent': themeStore.theme === 'dark' }"
              @click="changeTheme('dark')"
            >
              <i-ic-round-dark-mode
                class="mr-2"
                style="width: 15px; height: 15px"
              />
              Dark
            </button>
            <button
              class="SelectMenu-item"
              role="theme-menu-item"
              :class="{ 'color-bg-accent': themeStore.theme === 'auto' }"
              @click="changeTheme('auto')"
            >
              <i-ic-baseline-desktop-mac
                class="mr-2"
                style="width: 15px; height: 15px"
              />
              System
            </button>
          </div>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import { Theme, useThemeStore } from '~~/stores/theme'

const themeStore = useThemeStore()

const changeTheme = (theme: Theme): void => {
  themeStore.setTheme(theme)
}
</script>

<style lang="scss" scoped>
.Header-icon {
  color: white;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
