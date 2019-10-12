import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
}))

const GameTitle = ({ onClick }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant='h2'>ワンナイト人狼</Typography>
			<Button  variant="outlined" onClick={onClick}>Game Start</Button>
		</div>
	)
}

export default GameTitle