import React from 'react'
import withStyles from 'react-jss'
import _ from 'classnames'

import ToggleSwitch from './ToggleSwitch'
import styles from '../styles/ThemePicker'

const capitalize = (word) => {
	return word[0].toUpperCase() + word.slice(1)
}

const ThemePicker = ({classes, theme, showSpectrum, hideSpectrum, toggleTheme}) => {
	const colorTypes = theme.palette.colorTypes
	return <div className={classes.root}>
		
		<div className={classes.colorHeader}>
			<h1 className={classes.rainbow}>Color Picker</h1>
			<div className={classes.switchContainer}>
				<img style={{height: '14px'}} src={'/static/moon.svg'} alt={'dark'} />
				<div style={{marginLeft: '5px', marginRight: '5px'}}>
					<ToggleSwitch
						onSwitch={toggleTheme}
						defaultState={true}
					/>
				</div>
				<img style={{height: '18px'}} src={'/static/sun24.svg'} alt={'light'} />
			</div>
		</div>
		<div className={classes.listContainer}>
			<ul className={classes.colorList}>
				{colorTypes.map((ct, i) => {
					return <li
						key={i}
						id={ct}
						className={_(classes.colorItem, classes[`color${capitalize(ct)}`])}
						onMouseEnter={showSpectrum}
						onMouseLeave={hideSpectrum}
					>
						<span>{ct}</span>
					</li>
				})}
			</ul>
		</div>
	</div>
}

export default withStyles(styles, {injectTheme: true})(ThemePicker)
