import React, {useState} from 'react'
import withStyles from 'react-jss'

import styles from '../styles/Home'
import ThemePicker from './ThemePicker'
import ColorSpectrum from './ColorSpectrum'

const Home = ({classes, toggleTheme, updateTheme}) => {
	const [activeColorType, setActiveColorType] = useState(undefined)
	
	function handleActiveColor(e) {
		e.preventDefault()
		setActiveColorType(e.target.id)
	}
	
	function handleInactiveColor(e) {
		e.preventDefault()
		setActiveColorType(undefined)
	}

	return <div className={classes.__root__}>
		<div className={classes.__layoutContainer__}>
			<div className={classes.themePickerContainer}>
				<ThemePicker
					showSpectrum={handleActiveColor}
					hideSpectrum={handleInactiveColor}
					toggleTheme={toggleTheme}
					updateTheme={updateTheme}
				/>
				<ColorSpectrum
					activeColorType={activeColorType}
				/>
			</div>
		</div>
	</div>
}

export default withStyles(styles)(Home)
