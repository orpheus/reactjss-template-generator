const styles = theme => ({
	root: {
		padding: 10,
	},
	switch: {
		position: 'relative',
		display: 'inline-block',
		width: 36,
		height: 18,
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
		'-o-transition': '.4s',
		'-moz-transition': '.4s',
		'&:before': {
			position: 'absolute',
			content: '""',
			height: 26,
			width: 26,
			left: '-8px',
			top: '-4px',
			bottom: 4,
			backgroundColor: theme.palette.greyscale(1).hex(),
			'-webkit-transition': '.4s',
			transition: '.4s',
			'-o-transition': '.4s',
			'-moz-transition': '.4s',
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
			'&:checked + $slider': {
				backgroundColor: theme.palette.greyscale(.5).hex()
			},
			'&:focus + $slider': {
				boxShadow: '0 0 1px #2196F3',
			},
			'&:checked + $slider:before': `
				-webkit-transform: translateX(26px);
				-moz-transform: translateX(26px);
				-o-transform: translateX(26px);
			    -ms-transform: translateX(26px);
			    transform: translateX(26px);
			`,
		}
	},
	round: {},
})

export default styles
