const styles = theme => ({
	root: `
	    width: 450px;
	    border-radius: 5px;
	    display: flex;
	    flex-direction: column;
	    box-shadow: 0px 2px 4px;
	    color: grey;
	    `,
	colorHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 70,
		fontFamily: 'monospace',
	},
	rainbow: `
		background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
        background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
  `,
	listContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	colorList: {
		display: 'flex',
		flexDirection: 'column',
		listStyleType: 'none'
	},
	colorItem: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 0 60px',
		alignItems: 'center',
		paddingLeft: '30px',
		fontSize: 18,
		fontWeight: 'bold',
	},
	colorPrimary: {
		color: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
		'&:active': {
			backgroundColor: theme.palette.primary.main,
		}
	},
	colorSecondary: {
		color: theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
		},
		'&:active': {
			backgroundColor: theme.palette.secondary.main,
		}
	},
	colorTertiary: {
		color: theme.palette.tertiary.main,
		'&:hover': {
			backgroundColor: theme.palette.tertiary.main,
		},
		'&:active': {
			backgroundColor: theme.palette.tertiary.main,
		}
	},
	colorSuccess: {
		color: theme.palette.success.main,
		'&:hover': {
			backgroundColor: theme.palette.success.main,
		},
		'&:active': {
			backgroundColor: theme.palette.success.main,
		}
	},
	colorDanger: {
		color: theme.palette.danger.main,
		'&:hover': {
			backgroundColor: theme.palette.danger.main,
		},
		'&:active': {
			backgroundColor: theme.palette.danger.main,
		}
	},
	colorWarning: {
		color: theme.palette.warning.main,
		'&:hover': {
			backgroundColor: theme.palette.warning.main,
		},
		'&:active': {
			backgroundColor: theme.palette.warning.main,
		}
	},
	colorInfo: {
		color: theme.palette.info.main,
		'&:hover': {
			backgroundColor: theme.palette.info.main,
		},
		'&:active': {
			backgroundColor: theme.palette.info.main,
		}
	},
})

export default styles
