import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: '#F0F0F5',
    primary: '#5B4FDB'
  },
  text: {
    common: {
      base: '#665F5C',
      inButton: '#FFF',
      inPrimary: '#FFF'
    },
    title: {
      base: '#403940',
      inPrimary: '#FFF'
    }
  },
  card: {
    background: '#d6d6d6',
    backgroundSelected: '#BDA2E9',
    border: '#ababab',
    borderSelected: '#5B4FDB'
  },
  time: {
    transitionButton: '0.3s'
  }
}

export default theme
