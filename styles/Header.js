const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 0 auto',
		height: theme.headerHeight,
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.secondary.main,
		justifyContent: 'flex-start',
		padding: '0px 100px',
		alignItems: 'center',
	}
})

export default styles
