import chroma from 'chroma-js'

export default class ThemeGenerator {
	constructor(palettes) {
		
		if (palettes) {
			this.fromPalettes(palettes)
		}
		
		this.palettes = {
			light: {
				primary: 'teal',
				secondary: 'darkblue',
				tertiary: 'green',
				background: 'white',
				text: 'black',
				success: 'green',
				warning: 'orange',
				danger: 'red',
				info: 'blue',
			},
			dark: {
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
		}
		
		this.commonPalette = {
			colorTypes: Object.keys(this.palettes.light),
			greyscale: (v) => {
				let f = chroma.scale()
				return f(v).hex()
			},
			brighten: chroma.brighten,
			darken: chroma.darken,
			saturate: chroma.saturate,
			desaturate: chroma.desaturate,
		}
		
		this.shades = 5
	}
	
	generateTheme() {
		let theme = {}
		for (let themeName in this.palettes) {
			if (this.palettes.hasOwnProperty(themeName)) {
				theme[themeName] = {
					name: themeName,
					palette: {
						...this.generatePalette(this.palettes[themeName]),
						...this.commonPalette
					}
				}
			}
		}
		return theme
	}
	
	getTheme(name) {
		const theme = this.generateTheme()
		if (name) {
			return theme[name]
		}
		return theme
	}
	
	updatePalette(name, type, color) {
		this.palettes[name][type] = color
	}
	
	fromPalettes(palettes) {
		for (let name in palettes) {
			if (palettes.hasOwnProperty(name)) {
				// todo:: check if palette has all fields needed, if not use default color
				this.palettes[name] = palettes[name]
				
			}
		}
	}
	
	getPalette(name) {
		return this.palettes[name] || {}
	}
	
	getPalettes() {
		return this.palettes
	}
	
	generatePalette = (palette, shades = this.shades) => {
		let tmpObj = {}
		for (let type in palette) {
			if (palette.hasOwnProperty(type)) {
				const color = palette[type]
				tmpObj[type] = {
					main: color,
					sat: this.saturate(color, shades),
					desat: this.desaturate(color, shades),
					bright: this.brighten(color, shades),
					dark: this.darken(color, shades)
				}
			}
		}
		return tmpObj
	}
	
	saturate = (color, shades = this.shades) => {
		let arr = []
		for (let i = 0; i < shades; i++) {
			arr.push(chroma(color).saturate(i).hex())
		}
		return arr
	}
	
	desaturate = (color, shades = this.shades) => {
		let arr = []
		for (let i = 0; i < shades; i++) {
			arr.push(chroma(color).desaturate(i).hex())
		}
		return arr
	}
	
	darken = (color, shades = this.shades) => {
		let arr = []
		for (let i = 0; i < shades; i++) {
			arr.push(chroma(color).darken(i).hex())
		}
		return arr
	}
	
	brighten = (color, shades = this.shades) => {
		let arr = []
		for (let i = 0; i < shades; i++) {
			arr.push(chroma(color).brighten(i).hex())
		}
		return arr
	}
}
