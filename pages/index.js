import React, {useState} from 'react'

import {ThemeProvider, theme} from '../theme'
import Home from '../components/Home'

const Index = () => {
	const [mode, setMode] = useState('light')
	
	function toggleTheme(state) {
		setMode(state ? 'light':'dark')
	}
	
	return <ThemeProvider theme={theme[mode]}>
		<Home toggleTheme={toggleTheme}/>
	</ThemeProvider>
}

export default Index
