import { extendTheme } from "@chakra-ui/react"

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
    heading: `'Arial', sans-serif`,
    body: `'Arial', sans-serif`,
  },
});
  
  export default theme;