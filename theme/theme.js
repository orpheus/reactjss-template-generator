import chroma from 'chroma-js'

const saturate = (color, shades = 5) => {
	let arr = []
	for (let i = 0; i < shades; i++) {
		arr.push(chroma(color).saturate(i).hex())
	}
	return arr
}

const desaturate = (color, shades = 5) => {
	let arr = []
	for (let i = 0; i < shades; i++) {
		arr.push(chroma(color).desaturate(i).hex())
	}
	return arr
}

const darken = (color, shades = 5) => {
	let arr = []
	for (let i = 0; i < shades; i++) {
		arr.push(chroma(color).darken(i).hex())
	}
	return arr
}

const brighten = (color, shades = 5) => {
	let arr = []
	for (let i = 0; i < shades; i++) {
		arr.push(chroma(color).brighten(i).hex())
	}
	return arr
}
const lightTheme = {
	primary: 'teal',
	secondary: 'darkblue',
	tertiary: 'green',
	background: 'white',
	text: 'black',
	success: 'green',
	warning: 'orange',
	danger: 'red',
	info: 'blue',
}

const darkTheme = {
	primary: 'blue',
	secondary: 'yellow',
	tertiary: 'purple',
	background: 'black',
	text: 'white',
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

const commonPalette = {
	colorTypes: Object.keys(lightTheme),
	greyscale: (v) => {
		let f = chroma.scale()
		return f(v).hex()
	},
	brighten: chroma.brighten,
	darken: chroma.darken,
	saturate: chroma.saturate,
	desaturate: chroma.desaturate,
}
let theme = {
	light: {
		name: 'light',
		palette: {
			...generatePalette(lightTheme),
			...commonPalette
		},
	},
	dark: {
		name: 'dark',
		palette: {
			...generatePalette(darkTheme),
			...commonPalette
		},
	},
}

export default theme
