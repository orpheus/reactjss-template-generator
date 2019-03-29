const styles = theme => {
	// console.log('theme', theme)
	return ({
		__root__: {
			display: 'flex',
			flexDirection: 'row',
			height: '100%',
			backgroundColor: theme.palette.background.main,
		},
		__layoutContainer__: {
			display: 'flex',
			flexDirection: 'row',
			flex: '1 1 auto',
			justifyContent: 'flex-start',
			alignItems: 'center',
			overflowY: 'auto',
		},
		__homeContainer__: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
		ThemePicker: {
			display: 'flex',
			marginLeft: '300px',
		},
		ColorSpectrum: {
			display: 'flex',
			marginLeft: '240px',
			marginBottom: '220px',
		},
		PaletteCode: {
			display: 'flex',
			marginLeft: '240px',
			marginBottom: '220px',
			width: 450,
		}
	})
}


export default styles
