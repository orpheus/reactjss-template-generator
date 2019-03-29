import React, {useState} from 'react'
import withStyles from 'react-jss'


import styles from '../styles/Home'
import ThemePicker from './ThemePicker'
import ColorSpectrum from './ColorSpectrum'

const Home = ({classes, toggleTheme, updateTheme, palettes}) => {
	const [activeColorType, setActiveColorType] = useState(undefined)
	
	function handleActiveColor(type) {
		setActiveColorType(type)
	}
	
	function handleInactiveColor() {
		setActiveColorType(undefined)
	}
	
	// const Component = () => {
	// 	const stringifiedCode = JSON.stringify(palettes)
	// 	return <SyntaxHighlighter language='javascript' style={dark}>{stringifiedCode}</SyntaxHighlighter>;
	// }
	
	return <div className={classes.__root__}>
		<div className={classes.__layoutContainer__}>
			<div className={classes.ThemePicker}>
				<ThemePicker
					showSpectrum={handleActiveColor}
					hideSpectrum={handleInactiveColor}
					toggleTheme={toggleTheme}
					updateTheme={updateTheme}
				/>
			</div>
			
			{activeColorType && <div className={classes.ColorSpectrum}>
				<ColorSpectrum
					activeColorType={activeColorType}
				/></div>
			}
			{!activeColorType && <div className={classes.PaletteCode}>
				<pre><code className="javascript">'{name: 'ryan'}'</code></pre>
			</div>}
		</div>
	</div>
}

export default withStyles(styles)(Home)
