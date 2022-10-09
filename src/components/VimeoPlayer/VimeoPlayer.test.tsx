import { render } from '@testing-library/react'
import VimeoPlayer from './VimeoPlayer'
import Player from '@vimeo/player'

jest.mock('@vimeo/player')

describe('VimeoPlayer | component | unit test', () => {
  const videoId = 59777392

  describe('VimeoPlayer props', () => {
    describe('when receiving `className` prop', () => {
      it('should render video container with custom CSS class', () => {
        const className = 'custom-class'
        const { container } = render(
          <VimeoPlayer id={videoId} className={className} />
        )

        const videoContainer = container.querySelector(`.${className}`)

        expect(videoContainer).toBeInTheDocument()
      })
    })

    describe('when receiving `fullWidth` prop', () => {
      it('should render video container with custom CSS class', () => {
        const { container } = render(<VimeoPlayer id={videoId} fullWidth />)

        const videoContainer = container.querySelector('.VimeoPlayer')

        expect(videoContainer).toBeInTheDocument()
      })
    })
  })

  describe('VimeoPlayer methods', () => {
    const player = new Player('container')

    beforeEach(() => {
      jest.spyOn(player, 'on')
      jest.spyOn(player, 'ready')
    })

    describe('when receiving `onPlay` method and Vimeo fires the same event', () => {
      it('should call `onPlay`', () => {
        const onPlay = jest.fn()
        player.on.apply(null, onPlay())

        render(<VimeoPlayer id={videoId} onPlay={onPlay} />)

        expect(player.on).toBeCalled()
        expect(onPlay).toBeCalled()
      })
    })

    describe('when receiving `onEnded` method and Vimeo fires the same event', () => {
      it('should call `onEnded`', () => {
        const onEnded = jest.fn()
        player.on.apply(null, onEnded())

        render(<VimeoPlayer id={videoId} onEnded={onEnded} />)

        expect(player.on).toBeCalled()
        expect(onEnded).toBeCalled()
      })
    })

    describe('when receiving `onPause` method and Vimeo fires the same event', () => {
      it('should call `onPause`', () => {
        const onPause = jest.fn()
        player.on.apply(null, onPause())

        render(<VimeoPlayer id={videoId} onPause={onPause} />)

        expect(player.on).toBeCalled()
        expect(onPause).toBeCalled()
      })
    })

    describe('when receiving `onPlaying` method and Vimeo fires the same event', () => {
      it('should call `onPlaying`', () => {
        const onPlaying = jest.fn()
        player.on.apply(null, onPlaying())

        render(<VimeoPlayer id={videoId} onPlaying={onPlaying} />)

        expect(player.on).toBeCalled()
        expect(onPlaying).toBeCalled()
      })
    })

    describe('when receiving `onTimeUpdate` method and Vimeo fires the same event', () => {
      it('should call `onTimeUpdate`', () => {
        const onTimeUpdate = jest.fn()
        player.on.apply(null, onTimeUpdate())

        render(<VimeoPlayer id={videoId} onTimeUpdate={onTimeUpdate} />)

        expect(player.on).toBeCalled()
        expect(onTimeUpdate).toBeCalled()
      })
    })

    describe('when receiving `onProgress` method and Vimeo fires the same event', () => {
      it('should call `onProgress`', () => {
        const onProgress = jest.fn()
        player.on.apply(null, onProgress())

        render(<VimeoPlayer id={videoId} onProgress={onProgress} />)

        expect(player.on).toBeCalled()
        expect(onProgress).toBeCalled()
      })
    })

    describe('when receiving `onSeeking` method and Vimeo fires the same event', () => {
      it('should call `onSeeking`', () => {
        const onSeeking = jest.fn()
        player.on.apply(null, onSeeking())

        render(<VimeoPlayer id={videoId} onSeeking={onSeeking} />)

        expect(player.on).toBeCalled()
        expect(onSeeking).toBeCalled()
      })
    })

    describe('when receiving `onSeeked` method and Vimeo fires the same event', () => {
      it('should call `onSeeked`', () => {
        const onSeeked = jest.fn()
        player.on.apply(null, onSeeked())

        render(<VimeoPlayer id={videoId} onSeeked={onSeeked} />)

        expect(player.on).toBeCalled()
        expect(onSeeked).toBeCalled()
      })
    })

    describe('when receiving `onTextTrackChange` method and Vimeo fires the same event', () => {
      it('should call `onTextTrackChange`', () => {
        const onTextTrackChange = jest.fn()
        player.on.apply(null, onTextTrackChange())

        render(
          <VimeoPlayer id={videoId} onTextTrackChange={onTextTrackChange} />
        )

        expect(player.on).toBeCalled()
        expect(onTextTrackChange).toBeCalled()
      })
    })

    describe('when receiving `onChapterChange` method and Vimeo fires the same event', () => {
      it('should call `onChapterChange`', () => {
        const onChapterChange = jest.fn()
        player.on.apply(null, onChapterChange())

        render(<VimeoPlayer id={videoId} onChapterChange={onChapterChange} />)

        expect(player.on).toBeCalled()
        expect(onChapterChange).toBeCalled()
      })
    })

    describe('when receiving `onCueChange` method and Vimeo fires the same event', () => {
      it('should call `onCueChange`', () => {
        const onCueChange = jest.fn()
        player.on.apply(null, onCueChange())

        render(<VimeoPlayer id={videoId} onCueChange={onCueChange} />)

        expect(player.on).toBeCalled()
        expect(onCueChange).toBeCalled()
      })
    })

    describe('when receiving `onCuePoint` method and Vimeo fires the same event', () => {
      it('should call `onCuePoint`', () => {
        const onCuePoint = jest.fn()
        player.on.apply(null, onCuePoint())

        render(<VimeoPlayer id={videoId} onCuePoint={onCuePoint} />)

        expect(player.on).toBeCalled()
        expect(onCuePoint).toBeCalled()
      })
    })

    describe('when receiving `onVolumeChange` method and Vimeo fires the same event', () => {
      it('should call `onVolumeChange`', () => {
        const onVolumeChange = jest.fn()
        player.on.apply(null, onVolumeChange())

        render(<VimeoPlayer id={videoId} onVolumeChange={onVolumeChange} />)

        expect(player.on).toBeCalled()
        expect(onVolumeChange).toBeCalled()
      })
    })

    describe('when receiving `onPlaybackRateChange` method and Vimeo fires the same event', () => {
      it('should call `onPlaybackRateChange`', () => {
        const onPlaybackRateChange = jest.fn()
        player.on.apply(null, onPlaybackRateChange())

        render(
          <VimeoPlayer
            id={videoId}
            onPlaybackRateChange={onPlaybackRateChange}
          />
        )

        expect(player.on).toBeCalled()
        expect(onPlaybackRateChange).toBeCalled()
      })
    })

    describe('when receiving `onBufferStart` method and Vimeo fires the same event', () => {
      it('should call `onBufferStart`', () => {
        const onBufferStart = jest.fn()
        player.on.apply(null, onBufferStart())

        render(<VimeoPlayer id={videoId} onBufferStart={onBufferStart} />)

        expect(player.on).toBeCalled()
        expect(onBufferStart).toBeCalled()
      })
    })

    describe('when receiving `onBufferEnd` method and Vimeo fires the same event', () => {
      it('should call `onBufferEnd`', () => {
        const onBufferEnd = jest.fn()
        player.on.apply(null, onBufferEnd())

        render(<VimeoPlayer id={videoId} onBufferEnd={onBufferEnd} />)

        expect(player.on).toBeCalled()
        expect(onBufferEnd).toBeCalled()
      })
    })

    describe('when receiving `onError` method and Vimeo fires the same event', () => {
      it('should call `onError`', () => {
        const onError = jest.fn()
        player.on.apply(null, onError())

        render(<VimeoPlayer id={videoId} onError={onError} />)

        expect(player.on).toBeCalled()
        expect(onError).toBeCalled()
      })
    })

    describe('when receiving `onLoaded` method and Vimeo fires the same event', () => {
      it('should call `onLoaded`', () => {
        const onLoaded = jest.fn()
        player.on.apply(null, onLoaded())

        render(<VimeoPlayer id={videoId} onLoaded={onLoaded} />)

        expect(player.on).toBeCalled()
        expect(onLoaded).toBeCalled()
      })
    })

    describe('when receiving `onDurationChange` method and Vimeo fires the same event', () => {
      it('should call `onDurationChange`', () => {
        const onDurationChange = jest.fn()
        player.on.apply(null, onDurationChange())

        render(<VimeoPlayer id={videoId} onDurationChange={onDurationChange} />)

        expect(player.on).toBeCalled()
        expect(onDurationChange).toBeCalled()
      })
    })

    describe('when receiving `onFullScreenChange` method and Vimeo fires the same event', () => {
      it('should call `onFullScreenChange`', () => {
        const onFullScreenChange = jest.fn()
        player.on.apply(null, onFullScreenChange())

        render(
          <VimeoPlayer id={videoId} onFullScreenChange={onFullScreenChange} />
        )

        expect(player.on).toBeCalled()
        expect(onFullScreenChange).toBeCalled()
      })
    })

    describe('when receiving `onQualityChange` method and Vimeo fires the same event', () => {
      it('should call `onQualityChange`', () => {
        const onQualityChange = jest.fn()
        player.on.apply(null, onQualityChange())

        render(<VimeoPlayer id={videoId} onQualityChange={onQualityChange} />)

        expect(player.on).toBeCalled()
        expect(onQualityChange).toBeCalled()
      })
    })

    describe('when receiving `onCameraChange` method and Vimeo fires the same event', () => {
      it('should call `onCameraChange`', () => {
        const onCameraChange = jest.fn()
        player.on.apply(null, onCameraChange())

        render(<VimeoPlayer id={videoId} onCameraChange={onCameraChange} />)

        expect(player.on).toBeCalled()
        expect(onCameraChange).toBeCalled()
      })
    })

    describe('when receiving `onResize` method and Vimeo fires the same event', () => {
      it('should call `onResize`', () => {
        const onResize = jest.fn()
        player.on.apply(null, onResize())

        render(<VimeoPlayer id={videoId} onResize={onResize} />)

        expect(player.on).toBeCalled()
        expect(onResize).toBeCalled()
      })
    })

    describe('when receiving `onEnterPictureInPicture` method and Vimeo fires the same event', () => {
      it('should call `onEnterPictureInPicture`', () => {
        const onEnterPictureInPicture = jest.fn()
        player.on.apply(null, onEnterPictureInPicture())

        render(
          <VimeoPlayer
            id={videoId}
            onEnterPictureInPicture={onEnterPictureInPicture}
          />
        )

        expect(player.on).toBeCalled()
        expect(onEnterPictureInPicture).toBeCalled()
      })
    })

    describe('when receiving `onLeavePictureInPicture` method and Vimeo fires the same event', () => {
      it('should call `onLeavePictureInPicture`', () => {
        const onLeavePictureInPicture = jest.fn()
        player.on.apply(null, onLeavePictureInPicture())

        render(
          <VimeoPlayer
            id={videoId}
            onLeavePictureInPicture={onLeavePictureInPicture}
          />
        )

        expect(player.on).toBeCalled()
        expect(onLeavePictureInPicture).toBeCalled()
      })
    })

    describe('when receiving `onInteractiveHotspotClicked` method and Vimeo fires the same event', () => {
      it('should call `onInteractiveHotspotClicked`', () => {
        const onInteractiveHotspotClicked = jest.fn()
        player.on.apply(null, onInteractiveHotspotClicked())

        render(
          <VimeoPlayer
            id={videoId}
            onInteractiveHotspotClicked={onInteractiveHotspotClicked}
          />
        )

        expect(player.on).toBeCalled()
        expect(onInteractiveHotspotClicked).toBeCalled()
      })
    })

    describe('when receiving `onInteractiveOverlayPanelClicked` method and Vimeo fires the same event', () => {
      it('should call `onInteractiveOverlayPanelClicked`', () => {
        const onInteractiveOverlayPanelClicked = jest.fn()
        player.on.apply(null, onInteractiveOverlayPanelClicked())

        render(
          <VimeoPlayer
            id={videoId}
            onInteractiveOverlayPanelClicked={onInteractiveOverlayPanelClicked}
          />
        )

        expect(player.on).toBeCalled()
        expect(onInteractiveOverlayPanelClicked).toBeCalled()
      })
    })
  })
})
