import type {
  CueChangeEvent,
  CuePointEvent,
  DurationChangeEvent,
  Error as ErrorProps,
  FullScreenChangeEvent,
  LoadedEvent,
  PlaybackRateEvent,
  QualityChangeEvent,
  ResizeEvent,
  TextTrackChangeEvent,
  TimeEvent,
  VimeoCameraProps,
  VimeoChapter,
  VolumeChangeEvent
} from '@vimeo/player'

export type PlayEvent = TimeEvent
export type PlayingEvent = TimeEvent
export type PauseEvent = TimeEvent
export type EndedEvent = TimeEvent
export type TimeUpdateEvent = TimeEvent
export type ProgressEvent = TimeEvent
export type SeekingEvent = TimeEvent
export type SeekedEvent = TimeEvent
export type { TextTrackChangeEvent }
export type ChapterChangeEvent = VimeoChapter
export type { CueChangeEvent }
export type { CuePointEvent }
export type { VolumeChangeEvent }
export type { PlaybackRateEvent }
export type PlayerErrorEvent = ErrorProps
export type { LoadedEvent }
export type { DurationChangeEvent }
export type { FullScreenChangeEvent }
export type { QualityChangeEvent }
export type CameraChangeEvent = VimeoCameraProps
export type { ResizeEvent }

export type InteractiveHotspotClickedEvent = {
  action: 'event' | 'none' | 'overlay' | 'seek' | 'url'
  actionPreference: {
    pauseOnAction: boolean
    overlayId: number
    seekTo: number
    url: string
  }
  currentTime: number
  customPayloadData: null
  hotspotId: number
}

export type InteractiveOverlayPanelClickedEvent = {
  action: 'clickthrough' | 'close' | 'event' | 'none' | 'seek'
  actionPreference: {
    pauseOnAction: boolean
    seekTo: number
    url: string
  }
  currentTime: number
  customPayloadData: null
  overlayId: number
  panelId: string
}

export type VimeoPlayerProps = {
  // custom props
  className?: string
  fullWidth?: boolean

  // embed options
  id: number | string
  autopause?: boolean
  autoplay?: boolean
  background?: boolean
  byline?: boolean
  color?: string
  controls?: boolean
  dnt?: boolean
  height?: number
  interactive_params?: string
  keyboard?: boolean
  loop?: boolean
  maxheight?: number
  maxwidth?: number
  muted?: boolean
  pip?: boolean
  playsinline?: boolean
  portrait?: boolean
  quality?: '4K' | '2K' | '1080p' | '720p' | '540p' | '360p' | '240p'
  responsive?: boolean
  speed?: boolean
  texttrack?: 'de' | 'en' | 'es' | 'fr' | string
  title?: boolean
  transparent?: boolean
  width?: number

  // events
  onPlay?: (event: TimeEvent) => void
  onPlaying?: (event: TimeEvent) => void
  onPause?: (event: TimeEvent) => void
  onEnded?: (event: TimeEvent) => void
  onTimeUpdate?: (event: TimeEvent) => void
  onProgress?: (event: TimeEvent) => void
  onSeeking?: (event: TimeEvent) => void
  onSeeked?: (event: TimeEvent) => void
  onTextTrackChange?: (event: TextTrackChangeEvent) => void
  onChapterChange?: (event: VimeoChapter) => void
  onCueChange?: (event: CueChangeEvent) => void
  onCuePoint?: (event: CuePointEvent) => void
  onVolumeChange?: (event: VolumeChangeEvent) => void
  onPlaybackRateChange?: (event: PlaybackRateEvent) => void
  onBufferStart?: () => void
  onBufferEnd?: () => void
  onError?: (event: ErrorProps) => void
  onLoaded?: (event: LoadedEvent) => void
  onDurationChange?: (event: DurationChangeEvent) => void
  onFullScreenChange?: (event: FullScreenChangeEvent) => void
  onQualityChange?: (event: QualityChangeEvent) => void
  onCameraChange?: (event: CameraChangeEvent) => void
  onResize?: (event: ResizeEvent) => void
  onEnterPictureInPicture?: () => void
  onLeavePictureInPicture?: () => void
  onInteractiveHotspotClicked?: (event: InteractiveHotspotClickedEvent) => void
  onInteractiveOverlayPanelClicked?: (
    event: InteractiveOverlayPanelClickedEvent
  ) => void
}
