import Hls from "hls.js";

const hlsVideoComponentOrNull = document.querySelector<HTMLVideoElement>("#hls-player");
if (!hlsVideoComponentOrNull) throw Error("Hls component not found!");

const startHlsBtnOrNull = document.querySelector<HTMLButtonElement>("#start-hls-btn");
if (!startHlsBtnOrNull) throw Error("Start HLS button not found!");

export const startHlsBtn: HTMLButtonElement = startHlsBtnOrNull;

const video = hlsVideoComponentOrNull;

export const startHls = () => {
  var videoSrc = `http://localhost:5002/hls/d89b4ffd-a451-4e1e-8bb4-2deea1971ba0/index.m3u8`;
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);

    video.onloadedmetadata = () => {
      video.play();
    };
  }
};
