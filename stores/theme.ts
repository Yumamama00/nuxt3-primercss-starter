import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark' | 'auto'

export const useThemeStore = defineStore('themeStore', {
  state: (): { theme: Theme } => ({
    theme: 'auto',
  }),
  actions: {
    setTheme(theme: Theme) {
      this.theme = theme
    },
  },
})
