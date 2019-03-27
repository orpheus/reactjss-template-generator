import React, {useState, useEffect} from 'react'
import withStyles from 'react-jss'
import styles from '../styles/ToggleSwitch'
import _ from "classnames";

const ToggleSwitch = ({classes, onChange, defaultState = false}) => {
	const [state, toggleSwitch] = useState(defaultState)
	
	const handleOnChange = () => {
		toggleSwitch(!state)
	}
	
	useEffect(() => {
		if (onChange) {
			onChange(state)
		}
	}, [state])
	
	return <div className={classes.root}>
		<label className={classes.switch}>
			<input
				onChange={handleOnChange}
				type="checkbox"
				checked={state}
			/>
			<span className={_(classes.slider, classes.round)}/>
		</label>
	</div>
}

export default withStyles(styles)(ToggleSwitch)
