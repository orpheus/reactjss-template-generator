import React from 'react'
import withStyles from 'react-jss'
import { SketchPicker } from 'react-color'

import styles from '../styles/ColorPicker'

const ColorPicker = ({classes, color, onChangeComplete}) => {

	return <div className={classes.root}>
		<SketchPicker
			color={color}
			onChangeComplete={onChangeComplete}
		/>
	</div>
}

export default withStyles(styles)(ColorPicker)
