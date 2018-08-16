import React, { Fragment } from 'react'

import { withStyles } from '@material-ui/core/styles'

import MainBoard from './components/MainBoard'
import Login from './components/Login'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gamestart: false,
    }
  }

  gamestart = () => {
    this.setState({ gamestart: true })
  }

  render() {
    const { gamestart } = this.state

    return (
      <Fragment>
        {gamestart
          ? <MainBoard name='testPlayer' />
          : <Login
            onStart={this.gamestart}
          />
        }        
      </Fragment>
    )
  }
}

export default withStyles({ withTheme: true })(App)