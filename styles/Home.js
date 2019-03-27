const styles = theme => ({
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
		alignItems: 'flex-start',
	},
	themePickerContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
})


export default styles
