import { Breakpoint, BREAK_POINT } from '~~/constants/breakpoint'

export const useDisplay = () => {
  const { width } = useWindowSize()

  const mobile = computed<boolean>(() => width.value < BREAK_POINT.md)

  const currentBreakpoint = computed<Breakpoint>(() => {
    console.log(width.value)

    if (width.value < BREAK_POINT.sm) {
      return 'sm'
    } else if (width.value < BREAK_POINT.md) {
      return 'md'
    } else if (width.value < BREAK_POINT.lg) {
      return 'lg'
    } else {
      return 'xl'
    }
  })

  return {
    mobile,
    currentBreakpoint,
  }
}
