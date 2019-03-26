const styles = theme => ({
	root: {
		width: 450,
		marginLeft: 50,
		display: 'flex',
		flexDirection: 'column',
		marginTop: 30,
	},
	colorRowContainer: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 1 100%',
	},
	colorRow: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 1 100%',
		margin: [3, 0]
	},
	titleColumn: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	colorBlock: {
		height: 50,
		width: '100%',
	},
})

export default styles
