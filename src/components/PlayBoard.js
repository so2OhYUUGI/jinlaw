import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import GameMaster from '../containers/GameMaster'
import Card from './Card'

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
  }

  render() {
    const { classes, className, player } = this.props

    return (
      <Paper className={className}>
        {player}
        <Card />
      </Paper>
    )
  }
}

export default withStyles(styles)(PlayBoard)