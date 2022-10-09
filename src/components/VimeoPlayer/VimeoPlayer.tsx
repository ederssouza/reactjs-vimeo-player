import { useEffect, useRef } from 'react'
import Player from '@vimeo/player'
import type {
  Player as PlayerProps,
  Options as PlayerOptions
} from '@vimeo/player'
import type { VimeoPlayerProps } from './types'
import VimeoPlayerCSS from './VimeoPlayer.module.css'

function VimeoPlayer(props: VimeoPlayerProps) {
  const {
    className = '',
    fullWidth = false,
    id,
    autopause = true,
    autoplay = false,
    background = false,
    byline = true,
    color = '00adef',
    controls = true,
    dnt = false,
    height,
    interactive_params,
    keyboard = true,
    loop = false,
    maxheight,
    maxwidth,
    muted = false,
    pip = false,
    playsinline = true,
    portrait = true,
    quality,
    responsive = false,
    speed = false,
    texttrack,
    title = true,
    transparent = true,
    width = 400,
    onPlay,
    onPlaying,
    onPause,
    onEnded,
    onTimeUpdate,
    onProgress,
    onSeeking,
    onSeeked,
    onTextTrackChange,
    onChapterChange,
    onCueChange,
    onCuePoint,
    onVolumeChange,
    onPlaybackRateChange,
    onBufferStart,
    onBufferEnd,
    onError,
    onLoaded,
    onDurationChange,
    onFullScreenChange,
    onQualityChange,
    onCameraChange,
    onResize,
    onEnterPictureInPicture,
    onLeavePictureInPicture,
    onInteractiveHotspotClicked,
    onInteractiveOverlayPanelClicked
  } = props

  const containerClassName = fullWidth
    ? `${VimeoPlayerCSS.VimeoPlayer} ${className}`
    : className

  const videoContainerRef = useRef<HTMLDivElement>()
  const player = useRef<PlayerProps>()

  useEffect(() => {
    if (!player?.current && videoContainerRef?.current) {
      player.current = new Player(videoContainerRef?.current, {
        id,
        autopause,
        autoplay,
        background,
        byline,
        color,
        controls,
        dnt,
        height,
        interactive_params,
        keyboard,
        loop,
        maxheight,
        maxwidth,
        muted,
        pip,
        playsinline,
        portrait,
        quality,
        responsive,
        speed,
        texttrack,
        title,
        transparent,
        width
      } as PlayerOptions)

      if (onPlay) {
        player.current.on('play', onPlay)
      }

      if (onPlaying) {
        player.current.on('playing', onPlaying)
      }

      if (onPause) {
        player.current.on('pause', onPause)
      }

      if (onEnded) {
        player.current.on('ended', onEnded)
      }

      if (onTimeUpdate) {
        player.current.on('timeupdate', onTimeUpdate)
      }

      if (onProgress) {
        player.current.on('progress', onProgress)
      }

      if (onSeeking) {
        player.current.on('seeking', onSeeking)
      }

      if (onSeeked) {
        player.current.on('seeked', onSeeked)
      }

      if (onTextTrackChange) {
        player.current.on('texttrackchange', onTextTrackChange)
      }

      if (onChapterChange) {
        player.current.on('chapterchange', onChapterChange)
      }

      if (onCueChange) {
        player.current.on('cuechange', onCueChange)
      }

      if (onCuePoint) {
        player.current.on('cuepoint', onCuePoint)
      }

      if (onVolumeChange) {
        player.current.on('volumechange', onVolumeChange)
      }

      if (onPlaybackRateChange) {
        player.current.on('playbackratechange', onPlaybackRateChange)
      }

      if (onBufferStart) {
        player.current.on('bufferstart', onBufferStart)
      }

      if (onBufferEnd) {
        player.current.on('bufferend', onBufferEnd)
      }

      if (onError) {
        player.current.on('error', onError)
        player.current.ready()?.catch(onError)
      }

      if (onLoaded) {
        player.current.on('loaded', onLoaded)
      }

      if (onDurationChange) {
        player.current.on('durationchange', onDurationChange)
      }

      if (onFullScreenChange) {
        player.current.on('fullscreenchange', onFullScreenChange)
      }

      if (onQualityChange) {
        player.current.on('qualitychange', onQualityChange)
      }

      if (onCameraChange) {
        player.current.on('camerachange', onCameraChange)
      }

      if (onResize) {
        player.current.on('resize', onResize)
      }

      if (onEnterPictureInPicture) {
        player.current.on('enterpictureinpicture', onEnterPictureInPicture)
      }

      if (onLeavePictureInPicture) {
        player.current.on('leavepictureinpicture', onLeavePictureInPicture)
      }

      if (onInteractiveHotspotClicked) {
        player.current.on(
          'interactivehotspotclicked',
          onInteractiveHotspotClicked
        )
      }

      if (onInteractiveOverlayPanelClicked) {
        player.current.on(
          'interactiveoverlaypanelclicked',
          onInteractiveOverlayPanelClicked
        )
      }
    }
  }, [
    id,
    autopause,
    autoplay,
    background,
    byline,
    color,
    controls,
    dnt,
    height,
    interactive_params,
    keyboard,
    loop,
    maxheight,
    maxwidth,
    muted,
    pip,
    playsinline,
    portrait,
    quality,
    responsive,
    speed,
    texttrack,
    title,
    transparent,
    width,
    onPlay,
    onEnded,
    onPause,
    onPlaying,
    onTimeUpdate,
    onProgress,
    onSeeking,
    onSeeked,
    onTextTrackChange,
    onChapterChange,
    onCueChange,
    onCuePoint,
    onVolumeChange,
    onPlaybackRateChange,
    onBufferStart,
    onBufferEnd,
    onError,
    onLoaded,
    onDurationChange,
    onFullScreenChange,
    onQualityChange,
    onCameraChange,
    onResize,
    onEnterPictureInPicture,
    onLeavePictureInPicture,
    onInteractiveHotspotClicked,
    onInteractiveOverlayPanelClicked
  ])

  return (
    <div
      ref={videoContainerRef as React.RefObject<HTMLDivElement>}
      className={containerClassName}
    />
  )
}

export default VimeoPlayer
