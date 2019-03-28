import React from 'react'
import withStyles from 'react-jss'
import { SketchPicker } from 'react-color'

import styles from '../styles/ColorPicker'

const ColorPicker = ({classes}) => {

	return <div className={classes.root}>
		<SketchPicker/>
	</div>
}

export default withStyles(styles)(ColorPicker)
