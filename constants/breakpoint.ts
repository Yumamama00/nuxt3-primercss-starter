export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'

export const BREAK_POINT: { [key in Breakpoint]: number } = Object.freeze({
  sm: 544,
  md: 768,
  lg: 1012,
  xl: 1280,
})
