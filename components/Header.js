import React from 'react'
import withStyles from 'react-jss'
import styles from '../styles/Header'

const Header = (props) => {
	const {title, classes} = props
	return <div className={classes.root}>
		<h1>{title}</h1>
	</div>
}

export default withStyles(styles)(Header)
