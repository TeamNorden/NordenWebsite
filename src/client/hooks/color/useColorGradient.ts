import { getSharedColorScheme, MantineColor, MantineTheme } from '@mantine/core'
/**
 * Generates a color gradient for emotion use
 * Default: Cyan to Blue with a -45 degree angle.
 * @param { MantineTheme } theme
 * @param {MantineColor | 'cyan'} from
 * @param {MantineColor | 'blue'} to
 * @param {number | -45} deg
 */
export const useColorGradient = (theme: MantineTheme, from?: MantineColor | 'cyan', to?: MantineColor | 'blue', deg?: number | -45) =>
  getSharedColorScheme({
    theme,
    variant: 'gradient',
    gradient: { from, to, deg },
  })
