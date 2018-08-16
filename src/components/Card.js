import React from 'react';

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import GameMaster from '../containers/GameMaster'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    width: 63 * 2,
    height: 89 * 2,
    display: 'inline-block',
    margin: 5,
  },
})

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      role: '村人',
      front: <div>村人</div>,
      back: <div>*</div>,
    }
  }

  actionDraw = () => {
    const back = <div>tetetetetest</div>
    this.setState({ back })
  }

  actionReverse = () => {
    this.setState((prevState) => {
      const visible = !prevState.visible
      return { visible }
    })
  }

  render() {
    const { classes, action } = this.props
    const { visible, front, back } = this.state

    return (
      <Paper
        className={classes.root}
        onClick={action}
      >
        {visible
          ? front
          : back
        }
      </Paper>
    )
  }
}

export default withStyles(styles)(Card)