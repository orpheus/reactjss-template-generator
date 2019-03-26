const styles = theme => ({
	root: `
	    width: 450px;
	    border-radius: 5px;
	    display: flex;
	    flex-direction: column;
	    box-shadow: 0px 2px 4px;
	    color: grey;
	    margin-top: 50px;
	    margin-left: 50px;
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
	
	// --- JSS TOGGLE SWITCH BEGIN
	switch: {
		position: 'relative',
		display: 'inline-block',
		width: 60,
		height: 34,
		'& input': {
			opacity: 0,
			width: 0,
			height: 0,
		}
	},
	slider: {
		position: 'absolute',
		cursor: 'pointer',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#ccc',
		'-webkit-transition': '.4s',
		transition: '.4s',
		'&:before': {
			position: 'absolute',
			content: '""',
			height: 26,
			width: 26,
			left: 4,
			bottom: 4,
			backgroundColor: 'pink',
			'-webkit-transition': '4s',
			transition: '4s',
		},
		'&$round': {
			borderRadius: 34,
			'&:before': {
				borderRadius: '50%'
			}
		}
		,
	},
	'@global': {
		input: {
			'&:checked, $slider': {
				backgroundColor: 'black'
			},
			'&:focus, $slider': {
				boxShadow: '0 0 1px #2196F3',
			},
			'&:checked, $slider:before': `
				-webkit-transform: translateX(26px);
			    -ms-transform: translateX(26px);
			    transform: translateX(26px);
			`,
		}
	},
	round: {},
	// --- JSS TOGGLE SWITCH END
	
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
			color: theme.palette.primary.bright[1]
		},
		'&:active': {
			backgroundColor: theme.palette.primary.main,
		}
	},
	colorSecondary: {
		color: theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.secondary.bright[1]
		},
		'&:active': {
			backgroundColor: theme.palette.secondary.main,
		}
	},
	colorTertiary: {
		color: theme.palette.tertiary.main,
		'&:hover': {
			backgroundColor: theme.palette.tertiary.main,
			color: theme.palette.tertiary.bright[1]
		},
		'&:active': {
			backgroundColor: theme.palette.tertiary.main,
		}
	},
	colorSuccess: {
		color: theme.palette.success.main,
		'&:hover': {
			backgroundColor: theme.palette.success.main,
			color: theme.palette.success.bright[1]
		},
		'&:active': {
			backgroundColor: theme.palette.success.main,
		}
	},
	colorDanger: {
		color: theme.palette.danger.main,
		'&:hover': {
			backgroundColor: theme.palette.danger.main,
			color: theme.palette.danger.bright[1]
		},
		'&:active': {
			backgroundColor: theme.palette.danger.main,
		}
	},
	colorWarning: {
		color: theme.palette.warning.main,
		'&:hover': {
			backgroundColor: theme.palette.warning.main,
			color: theme.palette.warning.bright[1]
		},
		'&:active': {
			backgroundColor: theme.palette.warning.main,
		}
	},
	colorInfo: {
		color: theme.palette.info.main,
		'&:hover': {
			backgroundColor: theme.palette.info.main,
			color: theme.palette.info.bright[1]
		},
		'&:active': {
			backgroundColor: theme.palette.info.main,
		}
	},
})

export default styles
