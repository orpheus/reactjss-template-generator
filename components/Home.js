import React from 'react'
import withStyles from 'react-jss'
import styles from '../styles/Home'

import SidePanel from './SidePanel'
import Dashboard from './Dashboard'

const Home = ({classes}) => {
	return <div className={classes.root}>
		<SidePanel/>
		<Dashboard/>
	</div>
}

export default withStyles(styles)(Home)
