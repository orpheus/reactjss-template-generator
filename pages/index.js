import React from 'react'

import {ThemeProvider, useTheme} from '../theme'
import Home from '../components/Home'

const Index = () => {
	const {theme, updateTheme, changeTheme, generator} = useTheme()
	
	function handleChangeTheme(bool) {
		changeTheme(bool ? 'light' : 'dark')
	}

	return <ThemeProvider theme={theme}>
		<Home
			toggleTheme={handleChangeTheme}
			updateTheme={updateTheme}
			palettes={generator.getPalettes()}
		/>
	</ThemeProvider>
}

export default Index

