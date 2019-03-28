import React, {useState, useEffect} from 'react'

import {ThemeProvider, ThemeGenerator} from '../theme'
import Home from '../components/Home'

const Index = () => {
	const ThemeGen = new ThemeGenerator()
	
	const [mode, setMode] = useState('light')
	const [theme, setTheme] = useState(() => ThemeGen.getTheme(mode))
	
	function handleThemeToggle(state) {
		setMode(state ? 'light' : 'dark')
	}

	function updateTheme(type, color) {
		ThemeGen.updatePalette(mode, type, color)
		setTheme(ThemeGen.getTheme(mode))
	}
	
	useEffect(() => {
		setTheme(ThemeGen.getTheme(mode))
	}, [mode])
	
	return <ThemeProvider theme={theme}>
		<Home
			toggleTheme={handleThemeToggle}
			updateTheme={updateTheme}
		/>
	</ThemeProvider>
}

export default Index

