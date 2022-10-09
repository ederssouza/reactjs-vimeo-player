import { VimeoPlayer } from './components'
import type { PlayerErrorEvent } from './components'

function App() {
  function onError(error: PlayerErrorEvent) {
    console.log('onError', error)
  }

  return (
    <>
      <div style={{ margin: '0 0 1rem' }}>
        <VimeoPlayer id={59777392} fullWidth onError={onError} />
      </div>

      <div style={{ margin: '0 0 1rem' }}>
        <VimeoPlayer
          id="https://player.vimeo.com/video/59777392"
          fullWidth
          onError={onError}
        />
      </div>
    </>
  )
}

export default App
