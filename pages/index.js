import React, {useState} from 'react'
import withStyles from 'react-jss'
import {ThemeProvider, theme} from '../theme'

import ColorPicker from '../components/ColorPicker'
import ColorSpectrum from '../components/ColorSpectrum'

const styles = {
	__root__: {
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		backgroundColor: theme.palette.primary.light,
	},
	__layoutContainer__: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	themePickerContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}

const Index = ({classes}) => {
	const [activeColorType, setActiveColorType] = useState(undefined)
	
	function handleActiveColor(e) {
		setActiveColorType(e.target.id)
	}
	function handleInactiveColor(e) {
		setActiveColorType(undefined)
	}
	
	return <ThemeProvider theme={theme}>
		
		<div className={classes.__root__}>
			<div className={classes.__layoutContainer__}>
				<div className={classes.themePickerContainer}>
					<ColorPicker
						showSpectrum={handleActiveColor}
						hideSpectrum={handleInactiveColor}
					/>
					<ColorSpectrum
						activeColorType={activeColorType}
					/>
				</div>
			</div>
		</div>
	</ThemeProvider>
}

export default withStyles(styles)(Index)
