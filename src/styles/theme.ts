import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: {
      "700": "#0F0F0F",
      "500": "#191919",
      "100": "#F5F8FA"
    },
    purple: {
      "900": "rgba(25,14,34,1)",
    },
    white: {
      "500": "#FFFFFFCC",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'purple.900',
        color: 'white.500'
      }
    }
  }
})