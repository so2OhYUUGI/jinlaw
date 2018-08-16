import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import Clock from './Clock'
import GameMaster from '../containers/GameMaster'
import player from '../containers/Player'
import BoardGameInit from './BoardGameInit'
import BoardGamePlaying from './BoardGamePlaying'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    minWidth: '100%',
    minHeight: 620,
    height: '100vh',
    margin: 'auto',
  },
  clock: {
    flexGrow: 1,
    position: 'absolute',
    width: 200,
    height: 60,
    top: 0,
    right: 0,
  },
  chattextfield: {
    width: '80%',
    marginTop: 10,
    marginLeft: 50,
  },
  bootstrapRoot: {
    padding: 0,
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
})

class MainBoard extends React.Component {
  constructor(props) {
    super(props)

    const { name } = this.props

    player.setName(name)
    GameMaster.init()
    GameMaster.setProgress = this.setProgress

    this.state = {
      player: player,
      progress: GameMaster.progress,
    }
  }

  setProgress = (progress) => {
    this.setState({ progress })
  }

  render() {
    const { classes } = this.props
    const { progress } = this.state

    console.log(progress)

    return (
      <Paper className={classes.root}>
        { progress === 'init' && <BoardGameInit /> }
        { progress === 'play' && <BoardGamePlaying /> }
        <Clock
          className={classes.clock}
        />
        <TextField
          id="chattext-input"
          className={classes.chattextfield}
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            },
          }}
        />
      </Paper>
    )
  }
}

export default withStyles(styles)(MainBoard)