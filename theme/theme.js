import chroma from 'chroma-js'

const saturate = (color, shades = 3) => {
	let arr = []
	for (let i = shades; i > 0; i--) {
		arr.push(chroma(color).saturate(i).hex())
	}
	return arr
}

const desaturate = (color, shades = 3) => {
	let arr = []
	for (let i = 0; i < shades; i++) {
		arr.push(chroma(color).desaturate(i).hex())
	}
	return arr
}

const darken = (color, shades = 3) => {
	let arr = []
	for (let i = 0; i < shades; i++) {
		arr.push(chroma(color).darken(i).hex())
	}
	return arr
}

const brighten = (color, shades = 3) => {
	let arr = []
	for (let i = shades; i > 0; i--) {
		arr.push(chroma(color).brighten(i).hex())
	}
	return arr
}
const paletteLight = {
	primary: 'teal',
	secondary: 'darkblue',
	tertiary: 'green',
	success: 'green',
	warning: 'orange',
	danger: 'red',
	info: 'blue',
}

const generatePalette = (palette, shades = 5) => {
	let tmpObj = {}
	for (let type in palette) {
		if (palette.hasOwnProperty(type)) {
			const color = palette[type]
			tmpObj[type] = {
				main: color,
				sat: saturate(color, shades),
				desat: desaturate(color, shades),
				bright: brighten(color, shades),
				dark: darken(color, shades)
			}
		}
	}
	return tmpObj
}
const theme = {
	palette: {
		colorTypes: Object.keys(paletteLight),
		...generatePalette(paletteLight),
		light: 'white',
		greyscale: chroma.scale()
	},
	breakpoints: {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920,
	},
	headerHeight: '70px',
	borderRadius: {
		xs: '2%',
		sm: '4%',
		md: '8%',
		lg: '16%',
		xl: '32%',
	}
}

export default theme
