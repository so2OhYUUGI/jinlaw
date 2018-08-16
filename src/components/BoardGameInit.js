import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import GameMaster from '../containers/GameMaster'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    minWidth: 800,
    minHeight: `calc(100% - 60px)`,
    backgroundColor: 'green',
  },
})

class PlayBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  onClick = event => {
    console.log(event.target, this)
  }

  render() {
    const { classes } = this.props
    
    return (
      <Paper className={classes.root}>
        {
          GameMaster.deck(this.onClick).map((card) => {
            return card
          })
        }
      </Paper>
    )
  }
}

export default withStyles(styles)(PlayBoard)