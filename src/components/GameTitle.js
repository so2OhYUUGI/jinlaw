import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

import useGame from 'hooks/useOneNightWarewolf'
import usePlayer from 'hooks/usePlayer/usePlayer'

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

const players = [
	{ name: 'jon' },
	{ name: 'chiris' },
	{ name: 'bany' },
	{ name: 'len' },
	{ name: 'alice' }
]

export default () => {
	const [, setGame] = useGame()
	const [player, setPlayer] = usePlayer('jon')
	const classes = useStyles()

	const handleClick = event => {
		setGame({ type: 'addPlayer', value: player })
		for (let i = 0; i < event.currentTarget.value; i++) {
			setGame({ type: 'addPlayer', value: players[i] })
		}
		setGame({ type: 'startGame' })
	}

	return (
		<div className={classes.root}>
			<Typography variant='h2'>ワンナイト人狼</Typography>
			<FormControl>
				<InputLabel htmlFor="name select">NAME</InputLabel>
				<Select
					id="name select"
					value={player.name}
					onChange={event => setPlayer({ type: 'name', value: event.target.value })}
				>
					{players.map(({ name }) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
				</Select>
			</FormControl>
			<div className={classes.buttons}>
				<Button variant="outlined" value={3} onClick={handleClick}>3人</Button>
				<Button variant="outlined" value={4} onClick={handleClick}>4人</Button>
				<Button variant="outlined" value={5} onClick={handleClick}>5人</Button>
				<Button variant="outlined" value={6} onClick={handleClick}>6人</Button>
			</div>
		</div>
	)
}
