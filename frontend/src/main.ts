import "./style.css";

import { JellyfishClient, Peer } from "@jellyfish-dev/ts-client-sdk";
import {
    connectButton,
    connectionStatus,
    disconnectButton,
    remoteTracksContainer,
    remoteTracksStatus,
    tokenInput,
} from "./components.ts";

const createVideoComponent = (trackId: string, stream: MediaStream): HTMLVideoElement => {
    const newVideoElement = document.createElement("video");
    newVideoElement.setAttribute("id", trackId);
    newVideoElement.setAttribute("class", "h-[150px] w-[200px]");
    newVideoElement.srcObject = stream;
    newVideoElement.muted = true;
    newVideoElement.onloadedmetadata = () => {
        newVideoElement.play();
    };
    return newVideoElement;
};

connectionStatus.innerHTML = "disconnected";

type PeerMetadata = {
    name: string;
};

type TrackMetadata = {
    type: "camera" | "microphone" | "screenshare";
};

export const client = new JellyfishClient<PeerMetadata, TrackMetadata>();

connectButton.addEventListener("click", async () => {
    const token = tokenInput.value;
    console.log({ token });

    client.connect({
        signaling: {
            host: "localhost:5002",
        },
        token: tokenInput.value,
        peerMetadata: { name: "" },
    });
});

client.addListener("joined", (peerId: string, peers: Peer[]) => {
    console.log("joined");
    connectionStatus.innerHTML = "joined";
});

client.addListener("disconnected", () => {
    console.log("disconnected");
    connectionStatus.innerHTML = "disconnected";
});

disconnectButton.addEventListener("click", async () => {
    console.log("Disconnect clicked!")
    client.disconnect();
});

client.addListener("trackAdded", (trackContext) => {
    remoteTracksStatus.innerHTML = "loading"
});

client.addListener("trackReady", (trackContext) => {
    if (!trackContext.stream) throw Error("Stream is null!");
    remoteTracksStatus.innerHTML = "Ready"

    const newVideoElement = createVideoComponent(trackContext.trackId, trackContext.stream);
    remoteTracksContainer.appendChild(newVideoElement);
});

client.addListener("trackRemoved", (trackContext) => {
    remoteTracksStatus.innerHTML = ""
    document.getElementById(trackContext.trackId)?.remove();
});
