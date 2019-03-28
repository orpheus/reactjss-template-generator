import React, {useState} from 'react'

import {ThemeProvider, theme} from '../theme'
import Home from '../components/Home'

const Index = () => {
	const [mode, setMode] = useState('light')
	
	function handleThemeToggle(state) {
		setMode(state ? 'light':'dark')
	}
	
	return <ThemeProvider theme={theme[mode]}>
		<Home toggleTheme={handleThemeToggle}/>
	</ThemeProvider>
}

export default Index
