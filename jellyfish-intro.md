# Jellyfish introduction

## What is Jellyfish?
Jellyfish is an open-source, general-purpose media server that ships with support for multiple media protocols. It can be thought of as a multimedia bridge meant for creating different types of multimedia systems. With Jellyfish you can easily create a real-time video conferencing system, a broadcasting solution or both at the same time. The unique feature of our media server is the ability to combine different multimedia protocols. For example, one can stream video from its CCTV camera via RTSP to the server, convert it to WebRTC and send it to some web application. In general, there are no limitations. See Example Scenarios for more information.

## History

A couple words about Membrane

## Concepts

This section outlines Jellyfish building blocks. We suggest reading this before you proceed, as these terms will be recurrent in the following chapters. Enjoy your exploration!

Room
In Jellyfish, a room serves as a holder for peers and components, its function varying based on application.

For instance, within a video conferencing system, a Jellyfish room represents a single online meeting or a channel accommodating multiple users for conversation.

On the other hand, in a broadcasting system setting, one room will be a container for two components - one responsible for receiving stream from a streaming host (e.g. via RTMP) and the other one responsible for converting this stream into an HLS playlist ready to be broadcasted via CDN.

Component
A component is a server-side process that publishes or subscribes to tracks. Example components are:

HLS component - subscribes to all other tracks and creates from them an HLS playlist ready to be broadcasted via CDN
RTSP component - connects to the remote media source (e.g. an IP camera) and publishes its media to be consumed by other components or peers
Peer
A peer is a client-side entity that connects to the server to publish, subscribe or publish and subscribe to tracks published by components or other peers. The peer's process is spawned after the peer connects to the server. At the moment, there is only one type of peer - WebRTC.

## Functionalities

Jellyfish comes with:

built-in authentication
client and server SDKs
support for multiple media protocols
docker images for multiple architectures

