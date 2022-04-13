const colors = {
  teal: '#009688',
  softBlue: '#5a95ff',
  white: '#ffffff',
  dustyOrange: '#f99231',
  darkSkyBlue: '#4a90e2',
  greenishCyan: '#50e3c2',
  darkBlueGrey: '#25265e',
  paleLilac: '#dfdfe4',
  darkSlateBlue: '#243b6b',
  black: '#050505',
  robinsEgg: '#59dcff',
  denimBlue: '#3b5798',
  darkSkyBlueTwo: '#51b2e0',
  darkSlateBlueTwo: '#283b68',
  lightbox: 'rgba(6, 26, 60, 0.6)',
  grapefruit: '#ff5c5c',
  chiGong: '#d63031',
  cornflower: '#6670ff',
  slate31: '#444d674f',
  greenishTeal: '#39c4a5',
  warmGrey: '#979797',
  blueGrey60: '#7c87a599',
  gunmetal: '#4b5a61',
  paleGrey47: '#eff5f877',
  paleGrey: '#f8fbfc',
  paleGrey83: '#eff5f8d3',
  nasturcianFlower: '#e84118',
  harleyDavidsonFlower: '#c23616',
  riseNShine: '#fbc531',
  nanohanachaGold: '#e1b12c',
}

export const arrayColors = Object.keys(colors).map((item, index) => ({
  key: index,
  color: colors[item],
}))

export default colors
