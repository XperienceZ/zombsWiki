# `network`

The `network` module handles all communication between the client and the server. It includes low-level socket management, binary encoding/decoding via ByteBuffer and a novel anti-bot mechanism.

## `NetworkAdapter`

### Methods

#### `constructor()`
Initializes a new `EventEmitter` as `this.emitter` and sets up a default handler for `PACKET_BLEND`.

#### `sendEnterWorld()`
```ts
function sendEnterWorld(data: Object): void
```
Sends a `PACKET_ENTER_WORLD` packet.

#### `sendEnterWorld2()`
```ts
function sendEnterWorld2(): void
```
Sends a `PACKET_ENTER_WORLD2` packet. This packet is part of the anti-bot mechanism and in reality is a 17-byte long packet.

#### `sendInput()`
```ts
function sendInput(data: Object): void
```
Sends a `PACKET_INPUT` packet containing player input.

#### `sendPing()`
```ts
function sendPing(data: Object): void
```
Sends a `PACKET_PING` packet.

#### `sendRpc()`
```ts
function sendRpc(data: Object): void
```
Sends a `PACKET_RPC` packet.

#### `addEnterWorldHandler()`
```ts
function addEnterWorldHandler(callback: Function): void
```
Registers a handler for `PACKET_ENTER_WORLD` responses.

#### `addPreEnterWorldHandler()`
```ts
function addPreEnterWorldHandler(callback: Function): void
```
Registers a handler for `PACKET_PRE_ENTER_WORLD` responses.

#### `addEntityUpdateHandler()`
```ts
function addEntityUpdateHandler(callback: Function): void
```
Registers a handler for `PACKET_ENTITY_UPDATE` packets.

#### `addPingHandler()`
```ts
function addPingHandler(callback: Function): void
```
Registers a handler for `PACKET_PING` packets.

#### `addRpcHandler()`
```ts
function addRpcHandler(name: String, callback: Function): void
```
Registers a handler for a specific RPC response by name.

#### `addConnectHandler()`
```ts
function addConnectHandler(callback: Function): void
```
Registers a handler for the `connected` WebSocket event.

#### `addCloseHandler()`
```ts
function addCloseHandler(callback: Function): void
```
Registers a handler for the `close` WebSocket event.

#### `addErrorHandler()`
```ts
function addErrorHandler(callback: Function): void
```
Registers a handler for the `error` WebSocket event.

#### `addPacketHandler()`
```ts
function addPacketHandler(event: Number, callback: Function): void
```
Registers a raw packet handler using the `PacketId`.

## BinNetworkAdapter

Bounded to `game` as `game.network`. Extends `NetworkAdapter`.

### Variables

| Variable | Type | Description |
| :--- | :--- | :--- |
| `pingStart` | `Date \| null` | The timestamp when the last ping was sent. |
| `pingCompletion` | `Date \| null` | The timestamp when the last ping response was received. |
| `ping` | `Number` | The current round-trip time divided by 2 (latency). |
| `connected` | `Boolean` | Whether the socket is currently connected. |
| `connecting` | `Boolean` | Whether the socket is currently in the process of connecting. |
| `codec` | `BinCodec` | The codec used for encoding and decoding binary packets. |
| `socket` | `WebSocket` | The underlying WebSocket instance. |
| `connectionOptions` | `Object` | The options used for the current connection (hostname, port, etc.). |

### Methods

#### `connect()`
```ts
function connect(options: Object): void
```
Initiates a WebSocket connection to `wss://{options.hostname}:{options.port}`.

#### `bindEventListeners()`
```ts
function bindEventListeners(): void
```
Binds WebSocket events (`open`, `message`, `close`, `error`) to the internal emitter.

#### `disconnect()`
```ts
function disconnect(): void
```
Closes the WebSocket connection.

#### `reconnect()`
```ts
function reconnect(): void
```
Attempts to reconnect using the last used `connectionOptions`.

#### `getPing()`
```ts
function getPing(): Number
```
Returns the current `ping` value.

#### `sendPacket()`
```ts
function sendPacket(event: Number, data: Object): void
```
Encodes the data using the `codec` and sends it over the WebSocket.

#### `onMessage()`
```ts
function onMessage(event: MessageEvent): void
```
Handles incoming WebSocket messages, decodes them, and emits the corresponding packet event.

#### `sendPingIfNecessary()`
```ts
function sendPingIfNecessary(): void
```
Sends a ping packet if 5 seconds have passed since the last ping completion.

#### `onPing()`
```ts
function onPing(): void
```
Calculates the latency when a ping response is received.

## BinCodec

The `BinCodec` class handles the serialization and deserialization of game data into a compact binary format using `ByteBuffer`.

### Methods

#### `encode()`
```ts
function encode(name: Number, item: Object): ArrayBuffer
```
Encodes a packet into an `ArrayBuffer`.

#### `decode()`
```ts
function decode(data: ArrayBuffer): Object
```
Decodes a packet from an `ArrayBuffer`.

#### `safeReadVString()`
```ts
function safeReadVString(buffer: ByteBuffer): String
```
Safely reads a variable-length string from the buffer.

#### `decodePreEnterWorldResponse()`
```ts
function decodePreEnterWorldResponse(buffer: ByteBuffer): Object
```
Decodes the pre-entry packet, which calls `decodeBlendInternal` internally.

#### `decodeEnterWorldResponse()`
```ts
function decodeEnterWorldResponse(buffer: ByteBuffer): Object
```
Decodes the world entry response, including world dimensions, tick rates, and the full attribute/RPC maps.

#### `decodeEntityUpdate()`
```ts
function decodeEntityUpdate(buffer: ByteBuffer): Object
```
Decodes an entity update packet. This handles removed entities, newly created entities, and updated attributes for existing entities.

#### `decodePing()`
```ts
function decodePing(buffer: ByteBuffer): Object
```
Decodes a ping packet (returns empty object).

#### `encodeRpc()`
```ts
function encodeRpc(buffer: ByteBuffer, item: Object): void
```
Encodes an RPC call based on its registered parameter types.

#### `decodeBlend()`
```ts
function decodeBlend(buffer: ByteBuffer): Object
```
Decodes the occasional blend packet, which calls `decodeBlendInternal` internally.

#### `decodeBlendInternal()`
```ts
function decodeBlendInternal(buffer: ByteBuffer): Object
```
Solves the PoW challenge that is part of the anti-bot mechanism of the game. The output of this function contains a PoW answer that is 64-byte long.

#### `decodeRpcObject()`
```ts
function decodeRpcObject(buffer: ByteBuffer, parameters: Array): Object
```
Decodes a single RPC response object based on its parameter definitions.

#### `decodeRpc()`
```ts
function decodeRpc(buffer: ByteBuffer): Object
```
Decodes an RPC response, handling both single objects and arrays of objects.

#### `encodeBlend()`
```ts
function encodeBlend(buffer: ByteBuffer, item: Object): void
```
Encodes a blend packet.

#### `encodeEnterWorld2()`
```ts
function encodeEnterWorld2(buffer: ByteBuffer): void
```
Encodes the secondary world entry packet.

#### `encodeEnterWorld()`
```ts
function encodeEnterWorld(buffer: ByteBuffer, item: Object): void
```
Encodes the primary world entry packet with display name and extra data.

#### `encodeInput()`
```ts
function encodeInput(buffer: ByteBuffer, item: Object): void
```
Encodes player input as a JSON string.

#### `encodePing()`
```ts
function encodePing(buffer: ByteBuffer, item: Object): void
```
Encodes a ping packet.

## Enumerations

These enumeration objects are private.

### `PacketIds`

`PacketIds` is a set of constants representing the different types of packets sent and received by the network (each type of packet is referred to as a `PacketId`).

| Constant | Value | Description |
| :--- | :--- | :--- |
| `PACKET_ENTITY_UPDATE` | `0` | Received when entities in the world are updated. |
| `PACKET_PLAYER_COUNTER_UPDATE` | `1` | Received when the player count changes. |
| `PACKET_SET_WORLD_DIMENSIONS` | `2` | Received to set the world's boundaries. |
| `PACKET_INPUT` | `3` | Sent to the server containing player input. |
| `PACKET_ENTER_WORLD` | `4` | Sent to request entry to the world; also received as a response. |
| `PACKET_PRE_ENTER_WORLD` | `5` | Received before entering the world. |
| `PACKET_ENTER_WORLD2` | `6` | Secondary world entry packet. |
| `PACKET_PING` | `7` | Used for latency measurement. |
| `PACKET_RPC` | `9` | Used for Remote Procedure Calls (RPC). |
| `PACKET_BLEND` | `10` | Used for internal obfuscation/validation. |

### `e_AttributeType`

| Constant | Value | Notes |
| :--- | :--- | :--- |
| `Uninitialized` | `0` | |
| `Uint32` | `1` | |
| `Int32` | `2` | |
| `Float` | `3` | Stored as `Int32` / 100 |
| `String` | `4` | |
| `Vector2` | `5` | Two `Float`s |
| `EntityType` | `6` | |
| `ArrayVector2` | `7` | |
| `ArrayUint32` | `8` | |
| `Uint16` | `9` | |
| `Uint8` | `10` | |
| `Int16` | `11` | |
| `Int8` | `12` | |
| `Uint64` | `13` | |
| `Int64` | `14` | |
| `Double` | `15` | |

### `e_ParameterType`

| Constant | Value |
| :--- | :--- |
| `Uint32` | `0` |
| `Int32` | `1` |
| `Float` | `2` |
| `String` | `3` |
| `Uint64` | `4` |
| `Int64` | `5` |
