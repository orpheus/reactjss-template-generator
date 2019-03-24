import chroma from 'chroma-js'
// let arr = []
// for (let i=3; i>=0; i--) {
// 	arr.push(chroma('teal').saturate(i))
// }
const theme = {
	palette: {
		primary: {
			main: 'teal',
		},
		secondary: {
			main: 'darkblue',
		},
		tertiary: {
			main: 'green'
		},
		success: {
			main: 'green',
		},
		warning: {
			main: 'orange'
		},
		danger: {
			main: 'red'
		},
		info: {
			main: 'blue',
		},
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
