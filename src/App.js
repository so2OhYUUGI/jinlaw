import React from 'react'

import { GameProvider } from 'hooks/useOneNightWarewolf'
import Game from 'components/Game'

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App
