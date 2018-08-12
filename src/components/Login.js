import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import GameMaster from '../containers/GameMaster'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
})

class PlayBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
    this.props.onStart()
  }

  render() {
    const { classes } = this.props

    return (
      <Paper>
        login
      </Paper>
    )
  }
}

export default withStyles(styles)(PlayBoard)