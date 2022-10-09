<h1 align="center">ReactJS Vimeo Player</h1>

<p align="center">
  <img src="https://img.shields.io/github/license/ederssouza/reactjs-vimeo-player" alt="GitHub" />
  <img src="https://img.shields.io/npm/v/reactjs-vimeo-player" alt="npm" />
  <img src="https://img.shields.io/npm/dw/reactjs-vimeo-player" alt="npm" />
  <img src="https://img.shields.io/npm/dm/reactjs-vimeo-player" alt="npm" />
</p>

## Summary

- [About](#about)
- [Installation](#installation)
- [How to use](#how-to-use)
- [Options](#options)
- [Events](#events)
  - [play](#play)
  - [playing](#playing)
  - [pause](#pause)
  - [ended](#ended)
  - [timeupdate](#timeupdate)
  - [progress](#progress)
  - [seeking](#seeking)
  - [seeked](#seeked)
  - [texttrackchange](#texttrackchange)
  - [chapterchange](#chapterchange)
  - [cuechange](#cuechange)
  - [cuepoint](#cuepoint)
  - [volumechange](#volumechange)
  - [playbackratechange](#playbackratechange)
  - [bufferstart](#bufferstart)
  - [bufferend](#bufferend)
  - [error](#error)
  - [loaded](#loaded)
  - [durationchange](#durationchange)
  - [fullscreenchange](#fullscreenchange)
  - [qualitychange](#qualitychange)
  - [camerachange](#camerachange)
  - [resize](#resize)
  - [enterpictureinpicture](#enterpictureinpicture)
  - [leavepictureinpicture](#leavepictureinpicture)
  - [interactivehotspotclicked](#interactivehotspotclicked)
  - [interactiveoverlaypanelclicked](#interactiveoverlaypanelclicked)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## About

[@vimeo/player](https://github.com/vimeo/player.js) wrapper for React.
## Installation

Choose the package manager your preference:

With [npm](https://npmjs.com/):

```bash
$ npm install @ederssouza/react-vimeo-player
```

With [yarn](https://yarnpkg.com/):

```bash
$ yarn add @ederssouza/react-vimeo-player
```

With [pnpm](https://pnpm.io/):

```bash
$ pnpm add @ederssouza/react-vimeo-player
```

## How to use

```jsx
import { VimeoPlayer } from '@ederssouza/react-vimeo-player'

function Component() {
  return <VimeoPlayer id="59777392" />
}

export default Component
```

## Options

```jsx
import { VimeoPlayer } from '@ederssouza/react-vimeo-player'
import type { PlayEvent } from '@ederssouza/react-vimeo-player'

function Component() {
  return <Vimeo id="59777392" autoplay />
}

export default Component
```

option             | type                  | default  | description
------------------ | --------------------- | -------- | -----------
id _or_ url        | `number` or `string`  |          | **Required.** Either the id or the URL of the video. Note that if the video [privacy settings](https://vimeo.zendesk.com/hc/en-us/articles/224817847-Privacy-settings-overview) are "Private", instead of an id, a URL that includes the `h` parameter must be provided.
autopause          | `boolean`             | `true`   | Pause this video automatically when another one plays.
autoplay           | `boolean`             | `false`  | Automatically start playback of the video. Note that this won’t work on some devices.
background         | `boolean`             | `false`  | Enable the player's background mode which hides the controls, autoplays and loops the video (available to  Plus, PRO, or Business members).
byline             | `boolean`             | `true`   | Show the byline on the video.
className          | `string`              |          | CSS className for the player element.
color              | `string`              | `00adef` | Specify the color of the video controls. Colors may be overridden by the embed settings of the video.
controls           | `boolean`             | `true`   | This parameter will hide all elements in the player (play bar, sharing buttons, etc) for a chromeless experience. ⚠️Warning: When using this parameter, the play bar and UI will be hidden. To start playback for your viewers, you'll need to either enable autoplay or use our player SDK to start and control playback. (available to Plus, PRO, or Business members)
dnt                | `boolean`             | `false`  | Block the player from tracking any session data, including cookies.
height             | `number`              |          | The exact height of the video. Defaults to the height of the largest available version of the video.
fullWidth          | `boolean`             | `false`  | The video player occupies 100% of the parent element space. Required import CSS file `import 'reactjs-vimeo-player/dist/style.css`.
interactive_params | `string`              |          | Key-value pairs representing dynamic parameters that are utilized on interactive videos with live elements. Ex: `key1=value1,key2=value2`.
keyboard           | `boolean`             | `true`   | Allows for keyboard input to trigger player events. If false, will ignore keyboard input. Tabbing will still be supported in either mode.
loop               | `boolean`             | `false`  | Play the video again when it reaches the end.
maxheight          | `number`              |          | Same as height, but video will not exceed the native size of the video.
maxwidth           | `number`              |          | Same as width, but video will not exceed the native size of the video.
muted              | `boolean`             | `false`  | Mute this video on load. Required to autoplay in certain browsers.
pip                | `boolean`             | `false`  | Show the picture-in-picture button in the controlbar and enable the picture-in-picture API.
playsinline        | `boolean`             | `true`   | Play video inline on mobile devices, to automatically go fullscreen on playback set this parameter to `false`.
portrait           | `boolean`             | `true`   | Show the portrait on the video.
quality            | `string`              |          | Vimeo Plus, PRO, and Business members can default an embedded video to a specific quality on desktop. Possible values: `4K`, `2K`, `1080p`, `720p`, `540p`, `360p` and `240p` https://help.vimeo.com/hc/en-us/articles/224983008-Setting-default-quality-for-embedded-videos
responsive         | `boolean`             | `false`  | Resize according to the parent element (experimental)
speed              | `boolean`             | `false`  | Show the speed controls in the preferences menu and enable playback rate API (available to PRO and Business accounts).
texttrack          | `string`              |          | Turn captions/subtitles on for a specific language by default. If you enter a language preference that hasn't yet been uploaded for your particular video, the text track parameter will be ignored, and your embedded video may load with CC or subtitles disabled by default. Supports lowercase language code (such as: `fr`, `es`, `de`, `en`). You can find a full list of popular language codes [here](https://www.andiamo.co.uk/resources/iso-language-codes/).
title              | `boolean`             | `true`   | Show the title on the video.
transparent        | `boolean`             | `true`   | The responsive player and transparent background are enabled by default, to disable set this parameter to `false`.
width              | `number`              |          | The exact width of the video. Defaults to the width of the largest available version of the video.

## Events

You can listen for events in the player by attaching a callback as React property:

```tsx
import { VimeoPlayer } from '@ederssouza/react-vimeo-player'
import type { PlayEvent } from '@ederssouza/react-vimeo-player'

function Component() {
  function onPlay(event: PlayEvent) {
    console.log(event)
  }

  return <VimeoPlayer id="59777392" onPlay={onPlay} />
}

export default Component
```

### play

Triggered when video playback is initiated.

```js
{
  duration: 61.857
  percent: 0
  seconds: 0
}
```

### playing

Triggered when the video starts playing.

```js
{
  duration: 61.857
  percent: 0
  seconds: 0
}
```

### pause

Triggered when the video pauses.

```js
{
  duration: 61.857
  percent: 0
  seconds: 0
}
```

### ended

Triggered any time the video playback reaches the end. *Note:* when loop is
turned on, the `ended` event will not fire.

```js
{
  duration: 61.857
  percent: 1
  seconds: 61.857
}
```

### timeupdate

Triggered as the `currentTime` of the video updates. It generally fires every
250ms, but it may vary depending on the browser.

```js
{
  duration: 61.857
  percent: 0.049
  seconds: 3.034
}
```

### progress

Triggered as the video is loaded. Reports back the amount of the video that has
been buffered.

```js
{
  duration: 61.857
  percent: 0.502
  seconds: 31.052
}
```

### seeking

Triggered when the player starts seeking to a specific time. A `timeupdate` event will
also be fired at the same time.

```js
{
  duration: 61.857
  percent: 0.485
  seconds: 30
}
```

### seeked

Triggered when the player seeks to a specific time. A `timeupdate` event will
also be fired at the same time.

```js
{
  duration: 61.857
  percent: 0.485
  seconds: 30
}
```

### texttrackchange

Triggered when the active text track (captions/subtitles) changes. The values
will be null if text tracks are turned off.

```js
{
  kind: "captions",
  label: "English CC",
  language: "en"
}
```

### chapterchange

Triggered when the current chapter changes.

```js
{
  startTime: 15,
  title: "Chapter 1",
  index: 1
}
```

The `index` property of each chapter is the place it holds in the order of all the chapters. It starts at 1.

### cuechange

Triggered when the active cue for the current text track changes. It also fires
when the active text track changes. There may be multiple cues active.

```js
{
  cues: [
    {
      html: "<i>Here at Vimeo, there's always <br>one thing on our minds:</i>",
      text: "<i>Here at Vimeo, there's always ↵one thing on our minds:</i>"
    }
  ],
  kind: "captions",
  label: "English CC",
  language: "en"
}
```

The `text` property of each cue is the raw value parsed from the caption or
subtitle file. The `html` property contains the HTML that the Player renders for
that cue.

### cuepoint

Triggered when the current time hits a registered cue point.

```js
{
  time: 15,
  data: {
    customKey: 'customValue'
  },
  id: "40f5722b-09aa-4060-a887-3c81aaa37cce"
}
```

The `data` property will be the custom data provided in the `addCuePoint()`
call, or an empty object if none was provided.

### volumechange

Triggered when the volume in the player changes. Some devices do not support
setting the volume of the video independently from the system volume, so this
event will never fire on those devices.

```js
{
  volume: 0.5
}
```

### playbackratechange

Triggered when the playback rate of the video in the player changes. The ability to change rate can be disabled by the creator
and the event will not fire for those videos. The new playback rate is returned with the event.

```js
{
  playbackRate: 1.5
}
```

### bufferstart

Triggered when buffering starts in the player. This is also triggered during preload and while seeking. There is no associated data with this event.


### bufferend

Triggered when buffering ends in the player. This is also triggered at the end of preload and seeking. There is no associated data with this event.


### error

Triggered when some kind of error is generated in the player. In general if you
are using this API library, you should use `.catch()` on each method call
instead of globally listening for error events.

If the error was generated from a method call, the name of that method will be
included.

```js
{
  message: "#984220 does not meet minimum contrast ratio. We recommend using brighter colors. (You could try #d35e30 instead.) See WCAG 2.0 guidelines: http://www.w3.org/TR/WCAG/#visual-audio-contrast"
  method: "setColor"
  name: "ContrastError"
}
```

### loaded

Triggered when a new video is loaded in the player.

```js
{
  id: 76979871
}
```

### durationchange

Triggered when the duration attribute has been updated.

```js
{
  duration: 60
}
```

### fullscreenchange

Triggered when the player enters or exits fullscreen.

```js
{
  fullscreen: true
}
```

### qualitychange

Triggered when the set quality changes.

```js
{
  quality: '720p'
}
```

### camerachange

Triggered when any of the camera properties change for 360° videos.

```js
{
  yaw: 270,
  pitch: 90,
  roll: 0,
  fov: 45
}
```

### resize

Triggered when the intrinsic size of the media changes.

```js
{
  videoWidth: 1280,
  videoHeight: 720
}
```

### enterpictureinpicture

Triggered when the player enters picture-in-picture.

### leavepictureinpicture

Triggered when the player leaves picture-in-picture.

### interactivehotspotclicked

Triggered when a hotspot is clicked.

```js
{
  action: 'seek', // event, none, overlay, seek, url
  actionPreference: {
    pauseOnAction: false, // on `event`, `overlay`, `seek`, `url` action
    overlayId: 864334, // on `overlay` action
    seekTo: 30, // on `seek` action
    url: 'https://your-url.com', // on `url` action
  },
  currentTime: 15.585,
  customPayloadData: null,
  hotspotId: 8148223
}
```

### interactiveoverlaypanelclicked

Triggered when the overlay panel (buttons or images) within the interactive overlay is clicked.

```js
{
  action: 'seek', // clickthrough, close, event, none, seek
  actionPreference: {
    pauseOnAction: true, // on `close`, `seek` action
    seekTo: 30, // on `seek` action
    url: 'https://your-url.com', // on `clickthrough` action
  },
  currentTime: 25.67,
  customPayloadData: null,
  overlayId: 864334,
  panelId: 'c47193a0-8320-4572-9bcd-8425851b36e9'
}
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ederssouza/react-vimeo-player/tags).

## Authors

See also the list of [contributors](https://github.com/ederssouza/react-vimeo-player/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
