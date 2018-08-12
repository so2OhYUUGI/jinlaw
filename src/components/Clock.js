import React from 'react';

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: 200,
    height: 60,
    top: 0,
    right: 0,
  },
})

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gametime: new Date(300000),
    }
  }

  countdown = () => {
    const { gametime } = this.state
    gametime.getTime() > 0
      ? gametime.setSeconds(gametime.getSeconds() - 1)
      : clearInterval(this.intervalTimer)
    this.setState({ gametime })
  }

  componentDidMount = () => {
    this.intervalTimer = setInterval(this.countdown, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalTimer)
  }

  render() {
    const { classes, className } = this.props
    const { gametime } = this.state

    return (
      <Paper className={className}>
        {gametime.getMinutes()}:{('00' + gametime.getSeconds()).slice(-2)}
      </Paper>
    )
  }
}

export default withStyles(styles)(Clock)