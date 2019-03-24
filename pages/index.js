import React from 'react'
import withStyles from 'react-jss'
import {ThemeProvider, theme} from '../theme'

import Header from '../components/Header'
import Home from '../components/Home'
import ColorPicker from '../components/ColorPicker'

const styles = {
	__root__: {
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		backgroundColor: theme.palette.primary.light,
	},
	__layoutContainer__: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		justifyContent: 'center',
		alignItems: 'center',
	}
}

const Index = ({classes}) => {
	return <ThemeProvider theme={theme}>
		<div className={classes.__root__}>
			<div className={classes.__layoutContainer__}>
				<ColorPicker/>
			</div>
		</div>
	</ThemeProvider>
}

export default withStyles(styles)(Index)
