import React from 'react'
import withStyles from 'react-jss'

import styles from '../styles/ColorSpectrum'

const spectrumNames = {
	sat: 'saturated',
	desat: 'desaturated',
	bright: 'brightened',
	dark: 'darkened',
}

const ColorSpectrum = ({classes, activeColorType, theme}) => {
	const {
		main, brighten, darken, saturate, desaturate, // ignore these
		...rest
	} = theme.palette[activeColorType] // rest === color shades
	
	return <div className={classes.root}>
		{Object.keys(rest).map((name, i) => {
			return <div key={i} className={classes.colorRowContainer}>
				<div className={classes.colorRow}>
					<div className={classes.titleColumn}>
						<h4>{spectrumNames[name]}</h4>
						<div className={classes.colorRow}>
							{rest[name].map((color, i) => {
								return <div key={i} className={classes.colorBlock} style={{backgroundColor: color}}/>
							})}
						</div>
					</div>
				</div>
			</div>
		})}
	</div>
}

export default withStyles(styles, {injectTheme: true})(ColorSpectrum)
