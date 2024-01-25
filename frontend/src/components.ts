/* Token input */

const tokenInputOrNull: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#token-input");
if (!tokenInputOrNull) throw Error("Token input not found!");

tokenInputOrNull.value = localStorage.getItem("token") || "";


tokenInputOrNull.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  localStorage.setItem("token", value);
});

export const tokenInput: HTMLInputElement = tokenInputOrNull;

/* Connection status */

const connectionStatusOrNull: HTMLSpanElement | null = document.querySelector<HTMLSpanElement>("#connection-status");
if (!connectionStatusOrNull) throw Error("Connection status element not found!");

export const connectionStatus: HTMLSpanElement = connectionStatusOrNull;

/* Connect button */

const connectButtonOrNull = document.querySelector<HTMLButtonElement>("#connect-btn");
if (!connectButtonOrNull) throw Error("Connect button not found!");

export const connectButton: HTMLButtonElement = connectButtonOrNull;

/* Disconnect button */

const disconnectButtonOrNull = document.querySelector<HTMLButtonElement>("#disconnect-btn");
if (!disconnectButtonOrNull) throw Error("Disconnect button not found!");

export const disconnectButton: HTMLButtonElement = disconnectButtonOrNull;

// Remote track container

const remoteTracksContainerOrNull = document.querySelector<HTMLButtonElement>("#remote-tracks-container");
if (!remoteTracksContainerOrNull) throw Error("Remote track container not found!");

export const remoteTracksContainer: HTMLButtonElement = remoteTracksContainerOrNull;

// Remote track status

const remoteTracksStatusOrNull = document.querySelector<HTMLSpanElement>("#remote-tracks-status");
if (!remoteTracksStatusOrNull) throw Error("Remote track status not found!");

export const remoteTracksStatus: HTMLSpanElement = remoteTracksStatusOrNull;
