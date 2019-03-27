import React from 'react'
import withStyles from 'react-jss'
import _ from 'classnames'

import ToggleSwitch from './ToggleSwitch'
import styles from '../styles/ThemePicker'

const capitalize = (word) => {
	return word[0].toUpperCase() + word.slice(1)
}

const ColorPicker = ({classes, theme, showSpectrum, hideSpectrum}) => {
	// console.log('render')
	return <div className={classes.root}>
		<div className={classes.colorHeader}>
			<h1 className={classes.rainbow}>Color Picker</h1>
			<ToggleSwitch
				handleSwitch={(state) => {console.log(state)}}
			/>
		</div>
		<div className={classes.listContainer}>
			<ul className={classes.colorList}>
				{theme.palette.colorTypes.map((ct, i) => {
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

export default withStyles(styles, {injectTheme: true})(ColorPicker)
