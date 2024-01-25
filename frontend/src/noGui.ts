import { JellyfishClient } from "@jellyfish-dev/ts-client-sdk";
import { remoteTracksContainer } from "./components.ts";

const createVideoComponent = (trackId: string, stream: MediaStream): HTMLVideoElement => {
    const newVideoElement = document.createElement("video");
    newVideoElement.setAttribute("id", trackId);
    newVideoElement.setAttribute("class", "h-[150px] w-[200px]");
    newVideoElement.muted = true;
    newVideoElement.srcObject = stream;
    newVideoElement.onloadedmetadata = () => {
        newVideoElement.play();
    };
    return newVideoElement;
};

export const client = new JellyfishClient<Record<string, any>, Record<any, any>>();

const token = "SFMyNTY.g2gDdAAAAAJ3B3Jvb21faWRtAAAAJGZjZmE1OTIyLWUxZTQtNDQyYi04MTA0LTUzNGIzYzI1M2JhYncHcGVlcl9pZG0AAAAkODkyYzk0ZGYtMTg5My00MTZkLWIxNzQtZGZjMWUzZjdlM2YwbgYAK2HbP40BYgABUYA.KV1j4b28Ykd3ESiem-tMmiZA-yG01l7tRivr-r8eAx4"

client.connect({
    signaling: {
        host: "localhost:5002",
    },
    token: token,
    peerMetadata: {},
});

client.addListener("trackReady", (trackContext) => {
    if (!trackContext.stream) throw Error("Stream is null!");

    const newVideoElement = createVideoComponent(trackContext.trackId, trackContext.stream);
    remoteTracksContainer.appendChild(newVideoElement);
});

client.addListener("trackRemoved", (trackContext) => {
    document.getElementById(trackContext.trackId)?.remove();
});
