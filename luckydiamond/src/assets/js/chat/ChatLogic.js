import { BackendWebSocketUrl } from '@/properties/Сonfig.js';
import { eventBus } from "@/main";
import {
    GetCookie
} from "@/assets/js/storage/CookieStorage.js";

let webSocket;

export function ConnectToChat() {
    try {
        webSocket = new WebSocket(BackendWebSocketUrl);

        webSocket.onopen = function () {
            console.log('Connection established');
        };

        webSocket.onmessage = function (event) {

            eventBus.emit('dataChat', event.data)

            console.log('Message from Server:', event.data);
        };

        webSocket.onclose = function () {

            webSocket = new WebSocket(BackendWebSocketUrl);

            console.log('Connection closed and reconnected');
        };

        webSocket.onerror = function (event) {
            console.error('WebSocket Error:', event);
        };
    } catch (error) {
        console.error('Error in ConnectToChat:', error);
    }
}

export function SendMessageToChat(message) {
    try {
        const data = {
            SpUserName: GetCookie("SpUserName"),
            Message: message
        };

        webSocket.send(JSON.stringify(data));

    } catch (error) {
        console.error('Error in ConnectToChat:', error);
    }
}