import React from 'react'
import withStyles from 'react-jss'
import _ from 'classnames'

import styles from '../styles/ThemePicker'

const ColorPicker = ({classes}) => {
	return <div className={classes.root}>
		<div className={classes.colorHeader}>
			<h1 className={classes.rainbow}>Color Picker</h1>
		</div>
		<div className={classes.listContainer}>
			<ul className={classes.colorList}>
				<li className={_(classes.colorItem, classes.colorPrimary)}>
					<span>Primary</span>
				</li>
				<li className={_(classes.colorItem, classes.colorSecondary)}>
					<span>Secondary</span>
				</li>
				<li className={_(classes.colorItem, classes.colorTertiary)}>
					<span>Tertiary</span>
				</li>
				<li className={_(classes.colorItem, classes.colorSuccess)}>
					<span>Success</span>
				</li>
				<li className={_(classes.colorItem, classes.colorDanger)}>
					<span>Danger</span>
				</li>
				<li className={_(classes.colorItem, classes.colorWarning)}>
					<span>Warning</span>
				</li>
				<li className={_(classes.colorItem, classes.colorInfo)}>
					<span>Info</span>
				</li>
			</ul>
		</div>
	</div>
}

export default withStyles(styles)(ColorPicker)
