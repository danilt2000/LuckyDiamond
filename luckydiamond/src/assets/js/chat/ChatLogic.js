import { BackendWebSocketUrl } from '@/properties/Сonfig.js';
import { eventBus } from "@/main";
import {
    GetCookie
} from "@/assets/js/storage/CookieStorage.js";

let webSocket;

export function ConnectToChat() {
    try {

        if (webSocket && webSocket.readyState === WebSocket.OPEN) {
            console.log('WebSocket connection already established.');
            return;
        }

        webSocket = new WebSocket(BackendWebSocketUrl);

        webSocket.onopen = function () {
            console.log('Connection established');
        };

        webSocket.onmessage = function (event) {

            const dataObject = JSON.parse(event.data);

            if (dataObject && Object.prototype.hasOwnProperty.call(dataObject, 'SpUserName') && Object.prototype.hasOwnProperty.call(dataObject, 'Message')) {
                eventBus.emit('dataChat', event.data);
                console.log('CHAT')
            }

            if (data.MessageType == "CrashGameState") {
                eventBus.emit('crash', event.data)
            }

            if (Array.isArray(data.CurrentGame.PlayerList)) {
                eventBus.emit('jackpotGameTik', event.data)
            }
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

        if (!GetCookie("SpUserName") && !GetCookie("AUTHTOKEN") && !GetCookie("SearchToken")) {
            return;
        }

        const userCredentials = {
            SearchToken: GetCookie("SearchToken"),
            AUTHTOKEN: GetCookie("AUTHTOKEN")
        };

        const messageObject = {
            UserCredentials: userCredentials,
            Message: message,
            MessageType: "Chat"
        };

        webSocket.send(JSON.stringify(messageObject));

    } catch (error) {
        console.error('Error in ConnectToChat:', error);
    }
}