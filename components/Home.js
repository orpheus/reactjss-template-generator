import React, {useState} from 'react'
import withStyles from 'react-jss'

import styles from '../styles/Home'
import ThemePicker from './ThemePicker'
import ColorSpectrum from './ColorSpectrum'

const Home = ({classes, toggleTheme}) => {
	const [activeColorType, setActiveColorType] = useState(undefined)

	function handleActiveColor(e) {
		setActiveColorType(e.target.id)
	}
	function handleInactiveColor() {
		setActiveColorType(undefined)
	}
	// console.log('home render')
	return <div className={classes.__root__}>
			<div className={classes.__layoutContainer__}>
				<div className={classes.themePickerContainer}>
					<ThemePicker
						showSpectrum={handleActiveColor}
						hideSpectrum={handleInactiveColor}
						toggleTheme={toggleTheme}
					/>
					<ColorSpectrum
						activeColorType={activeColorType}
					/>
				</div>
			</div>
		</div>
}

export default withStyles(styles)(Home)
