import WebSocket from "ws"

export function Api(token: string): API

interface API {
    [string]: API;
    get(getOptions: string): Promise<object>
    post(postOptions: string): Promise<object>
    put(putOptions: string): Promise<object>
    patch(patchOptions: string): Promise<object>
    delete(deleteOptions: string): Promise<object>
}

export function WebSocketConnection(token: string): WebSocket