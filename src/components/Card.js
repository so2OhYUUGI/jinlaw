import React from 'react';

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: 63 * 2,
    height: 89 * 2,
  },
})

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      role: 0,
    }
  }

  onClick = event => {
    console.log('click')
  }

  render() {
    const { classes } = this.props

    return (
      <Paper
        className={classes.root}
        onClick={this.onClick}
      >
        人狼
      </Paper>
    )
  }
}

export default withStyles(styles)(Card)