import { createStyles, getSharedColorScheme, MantineColor } from '@mantine/core'
import { useColorGradient } from '~client/hooks'

export default createStyles((theme, _params, getRef) => {
  const highlightedName = getRef('highlightedName')
  const typewriter = getRef('typewriter')

  return {
    root: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
})
