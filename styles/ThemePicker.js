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
        margin-left: 100px;
    `,
	switchContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: '40px',
	},
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
		justifyContent: 'space-between',
		padding: '0px 30px',
		fontSize: 18,
		fontWeight: 'bold',
		position: 'relative'
	},
})

export default styles
