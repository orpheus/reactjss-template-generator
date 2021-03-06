import React, {useState, useEffect} from 'react'
import withStyles from 'react-jss'

import ToggleSwitch from './ToggleSwitch'
import styles from '../styles/ThemePicker'
import ColorPicker from "./ColorPicker";

const ThemePicker = ({classes, theme, showSpectrum, hideSpectrum, toggleTheme, updateTheme}) => {
	const colorTypes = theme.palette.colorTypes
	
	const [hoverItem, setHoverItem] = useState(undefined)
	const [activeItem, setActiveItem] = useState(undefined)
	
	useEffect(() => {
		if (activeItem) {
			showSpectrum(activeItem)
		}
	}, [activeItem])
	
	function handleMouseEnter(e) {
		const type = e.target.id
		setHoverItem(type)
		if (type) {
			showSpectrum(type)
		}
	}
	
	function handleMouseLeave() {
		setHoverItem(undefined)
		if (!activeItem) {
			hideSpectrum()
		}
	}
	
	const style = (type) => {
		let color = theme.palette[type].bright[4]
		if (type === 'background') {
			color = theme.palette[type].sat[4]
		}
		return type === hoverItem || type === activeItem ? {
			color,
			backgroundColor: theme.palette[type].main
		} : {}
	}
	
	function handlePaletteClick(e) {
		const name = e.target.id
		setActiveItem(activeItem => activeItem === name ? undefined : name)
	}
	
	function handleColorChange(type, color) {
		const hex = color.hex
		updateTheme(type, hex)
	}
	return <div className={classes.root}>
		<div className={classes.colorHeader}>
			<h1 className={classes.rainbow}>Color Picker</h1>
			<div className={classes.switchContainer}>
				<img style={{height: '14px'}} src={'/static/moon.svg'} alt={'dark'}/>
				<div style={{marginLeft: '5px', marginRight: '5px'}}>
					<ToggleSwitch
						onSwitch={toggleTheme}
						defaultState={true}
					/>
				</div>
				<img style={{height: '18px'}} src={'/static/sun24.svg'} alt={'light'}/>
			</div>
		</div>
		<div className={classes.listContainer}>
			<ul className={classes.colorList}>
				{colorTypes.map((ct, i) => {
					let color = theme.palette[ct].main
					if (ct === 'background') {
						color = theme.palette[ct].sat[4]
					}
					return <li
						key={i}
						id={ct}
						className={classes.colorItem}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						style={{color, ...style(ct)}}
					>
						<span>{`${ct}: ${theme.palette[ct].main}`}</span>
						<img
							style={{height: '18px', cursor: 'pointer', marginRight: '10px'}}
							src={'/static/palette.svg'}
							alt={'palette'}
							onClick={handlePaletteClick}
							id={ct}
						/>
						{activeItem === ct && <ColorPicker
							color={theme.palette[ct].main}
							onChangeComplete={(color) => handleColorChange(ct, color)}
						/>}
					</li>
				})}
			</ul>
		</div>
	</div>
}

export default withStyles(styles, {injectTheme: true})(ThemePicker)
