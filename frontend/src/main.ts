import "./style.css";
import "./mediaDevices.ts";
import { JellyfishClient, Peer } from "@jellyfish-dev/ts-client-sdk";
import {
  addVideoTrackButton,
  connectButton,
  connectionStatus,
  disconnectButton,
  localTrackId,
  remoteTracksContainer,
  removeVideoTrackButton,
  tokenInput,
} from "./components.ts";
import { createVideoComopnent, videoMediaStream, startLastSelectedDevice } from "./mediaDevices.ts";
// import { startHlsBtn, startHls } from "./hls.ts";

// startLastSelectedDevice();

type PeerMetadata = {
  name: string;
};

type TrackMetadata = {
  type: "camera" | "microphone" | "screenshare";
};

export const client = new JellyfishClient<PeerMetadata, TrackMetadata>();

// Exercise 1: Connect to Jellyfish Media Server
connectButton.addEventListener("click", async () => {
  const token = tokenInput.value;
  console.log({ token });

  // your code here
});

// Exercise 2: Get connection status
// hint: set component text
// connectionStatus.innerHTML = "Hello world";

// your code here

// // Exercise 3: Disconnect from jellyfish server
disconnectButton.addEventListener("click", async () => {
  console.log("Disconnect clicked!");
  // Your code here
});

// // Exercise 4: Stream your video track

addVideoTrackButton.addEventListener("click", async () => {
  console.log(videoMediaStream);

  if (!videoMediaStream) throw Error("Stram is empty!");

  const vidoeTrack = videoMediaStream.getVideoTracks()?.[0];
  if (!vidoeTrack) throw Error("Media stream has no video track!");

  // Your code for both here
});

// // Exercise 5: Get remote video trackId and display it
// // Hint: localTrackId.innerHTML = trackId

// // Exercise 6: Stop track
removeVideoTrackButton.addEventListener("click", async () => {
  console.log("Remove track clicked!");
  // Your code here
});

// // Exercise 7: Get remote tracks

// // Hint: Add new video track componet
// // const newVideoElement = createVideoComopnent(trackId, stream);
// // remoteTracksContainer.appendChild(newVideoElement);

// // Hint: Remove video track component
// // document.getElementById(trackId)?.remove();

// // Your code here

// Exercise 8: Online meeting

// Exercise 9: HLS

