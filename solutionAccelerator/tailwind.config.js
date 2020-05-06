module.exports = {
  theme: {
    fontFamily: {
      body: ['Graphik', 'sans-serif'],
    },
    colors: {
      primary: {
        lighter: '#A5A4BF',
        default: '#43425D',
        dark: '#3B3A53',
      },
      secondary: '#3B86FF',
      danger: "#F56565",
      info: "#ed8936",
      warning: "#ecc94b",

      transparent: 'transparent',
      current: 'currentColor',

      dark: {
        lighter: '#f7fafc',
        default: '#707070',
        dark: "#000000",
      },
      light: '#fff',

      gray: {
        100: '#edf2f7',
        200: '#e2e8f0',
        300: '#cbd5e0'
      },
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    float: false,
    scale: false,
    rotate: false,
    translate: false,
    skew: false,
    transformOrigin: false,
    transitionDelay: false,
    transitionTimingFunction: false,
    transitionDuration: false,
    transitionProperty: false,
    backgroundSize: false,
    backgroundRepeat: false,
  }
}
