import React, {useState} from 'react'
import withStyles from 'react-jss'
// import {highlight} from 'highlight.js'
import Highlight from 'react-highlight.js'

import styles from '../styles/Home'
import ThemePicker from './ThemePicker'
import ColorSpectrum from './ColorSpectrum'

const Home = ({classes, toggleTheme, updateTheme, palettes}) => {
	const [activeColorType, setActiveColorType] = useState(undefined)
	
	function handleActiveColor(type) {
		setActiveColorType(type)
	}
	
	function handleInactiveColor() {
		setActiveColorType(undefined)
	}

	return <div className={classes.__root__}>
		<div className={classes.__layoutContainer__}>
			<div className={classes.ThemePicker}>
				<ThemePicker
					showSpectrum={handleActiveColor}
					hideSpectrum={handleInactiveColor}
					toggleTheme={toggleTheme}
					updateTheme={updateTheme}
				/>
			</div>
			
			{activeColorType && <div className={classes.ColorSpectrum}>
				<ColorSpectrum
					activeColorType={activeColorType}
				/></div>
			}
			{!activeColorType && <div className={classes.PaletteCode}>
				<Highlight className={classes.codeHighlight} language="javascript">
					{JSON.stringify(palettes, null, 4)}
				</Highlight>
		
			</div>}
		</div>
	</div>
}

export default withStyles(styles)(Home)
