import { extendTheme } from "@chakra-ui/react"
import '@fontsource-variable/open-sans'
import '@fontsource-variable/raleway'
const colors = {
    brand: {
      50: '#fcfcfc', // lightest
      100: '#3DE583', // custom green
      200: '#141414', // almost black
      300: '#b3b3b3', // light gray
      // You can continue adding shades as needed
    },
  };
//change the font family to Arial

  const theme = extendTheme({
    colors,
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Raleway', sans-serif`,
      },
  });
  
  export default theme;