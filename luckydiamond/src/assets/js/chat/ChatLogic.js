import { BackendWebSocketUrl } from '@/properties/Сonfig.js';
import {
    GetCookie
} from "@/assets/js/storage/CookieStorage.js";
import WritechatComponent from "@/components/WritechatComponent.vue";


let webSocket;

export function ConnectToChat() {
    try {
        webSocket = new WebSocket(BackendWebSocketUrl);

        webSocket.onopen = function () {
            console.log('Connection established');
            // webSocket.send('Hello, Server!');
        };

        webSocket.onmessage = function (event) {

            WritechatComponent.ClaimDatamsg(event.data);
            console.log('Message from Server:', event.data);
        };

        webSocket.onclose = function () {
            console.log('Connection closed');
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
            SearchToken: GetCookie("SearchToken"),
            Message: message
        };

        webSocket.send(JSON.stringify(data));

    } catch (error) {
        console.error('Error in ConnectToChat:', error);
    }
}