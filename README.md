# Welcome to Orange Meets

Orange Meets is a demo application built using [Cloudflare Calls](https://developers.cloudflare.com/calls/). To build your own WebRTC application using Cloudflare Calls, get started in the [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/calls).

Simpler examples can be found [here](https://github.com/cloudflare/calls-examples).

[Try the demo here!](https://demo.orange.cloudflare.dev)

![A screenshot showing a room in Orange Meets](orange-meets.png)

## Architecture Diagram

![Diagram of Orange Meets architecture](architecture.png)

## Variables

Go to the [Cloudflare Calls dashboard](https://dash.cloudflare.com/?to=/:account/calls) and create an application.

Put these variables into `.dev.vars`

```
CALLS_APP_ID=<APP_ID_GOES_HERE>
CALLS_APP_SECRET=<SECRET_GOES_HERE>
SESSION_SECRET=<SECRET_GOES_HERE>
```

### Optional variables

The following variables are optional:

- `MAX_WEBCAM_BITRATE` (default `1200000`): the maximum bitrate for each meeting participant's webcam.
- `MAX_WEBCAM_FRAMERATE` (default: `24`): the maximum number of frames per second for each meeting participant's webcam.
- `MAX_WEBCAM_QUALITY_LEVEL` (default `1080`): the maximum resolution for each meeting participant's webcam, based on the smallest dimension (i.e. the default is 1080p).
- `TRANSCRIPTION_ENDPOINT`: URL for your speech-to-text provider.
- `TRANSCRIPTION_TOKEN`: authentication token for the transcription service.

To customise these variables, place replacement values in `.dev.vars` (for development) and in the `[vars]` section of `wrangler.toml` (for the deployment).

## Development

```sh
npm install
npm run dev
```

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

## Testing

Compile the TypeScript tests and run them with Node's built-in test runner:

```sh
npm test
```

This command builds the tests into `dist-tests` using `tsc -p tsconfig.test.json`
and then executes them via `node --test`.

## Deployment

1. Make sure you've installed `wrangler` and are logged in by running:

```sh
wrangler login
```

2. Update `CALLS_APP_ID` in `wrangler.toml` to use your own Calls App ID

3. You will also need to set the tokens as secrets by running:

```sh
wrangler secret put CALLS_APP_SECRET
wrangler secret put SESSION_SECRET
```

or to programmatically set the secrets, run:

```sh
echo REPLACE_WITH_YOUR_SECRET | wrangler secret put CALLS_APP_SECRET
echo REPLACE_WITH_YOUR_SESSION_SECRET | wrangler secret put SESSION_SECRET
```

4. Optionally, you can also use [Cloudflare's TURN Service](https://developers.cloudflare.com/calls/turn/) by setting the `TURN_SERVICE_ID` variable in `wrangler.toml` and `TURN_SERVICE_TOKEN` secret using `wrangler secret put TURN_SERVICE_TOKEN`

5. Also optionally, you can include `OPENAI_MODEL_ENDPOINT` and `OPENAI_API_TOKEN` to use OpenAI's [Realtime API with WebRTC](https://platform.openai.com/docs/guides/realtime-webrtc) to [invite AI](https://www.youtube.com/watch?v=AzMpyAbZfZQ) to join your meeting.
6. If you want live transcription, set `TRANSCRIPTION_ENDPOINT` and `TRANSCRIPTION_TOKEN`.

7. Finally you can run the following to deploy:

```sh
npm run deploy
```
