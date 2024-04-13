// import { BackendWebSocketJackpotUrl } from '@/properties/Сonfig.js';
import { BackendApiUrl } from '@/properties/Сonfig.js';
// import { eventBus } from "@/main";

// import {
//     GetCookie
// } from "@/assets/js/storage/CookieStorage.js";

// let webSocket;

// export function ConnectToJackpotSocket() {
//     try {

//         if (webSocket && webSocket.readyState === WebSocket.OPEN) {
//             console.log('WebSocket connection already established.');
//             return; 
//         }

//         webSocket = new WebSocket(BackendWebSocketJackpotUrl);

//         webSocket.onopen = function () {
//             console.log('Connection established');
//         };

//         webSocket.onmessage = function (event) {

//             // const dataObject = JSON.parse(event.data);
            
//             eventBus.emit('jackpotGameTik', event.data);
            
//             // console.log(dataObject)
//             // if (dataObject && Object.prototype.hasOwnProperty.call(dataObject, 'SpUserName') && Object.prototype.hasOwnProperty.call(dataObject, 'Message')) {
//             //     eventBus.emit('dataChat', event.data);
//             //     console.log('CHAT')
//             // }
//             // else {
//             //     eventBus.emit('crash', event.data)
//             // }

//         };

//         webSocket.onclose = function () {

//             webSocket = new WebSocket(BackendWebSocketJackpotUrl);

//             console.log('Connection closed and reconnected');
//         };

//         webSocket.onerror = function (event) {
//             webSocket = new WebSocket(BackendWebSocketJackpotUrl);
//             console.error('WebSocket Error:', event);
//         };
//     } catch (error) {
//         console.error('Error in ConnectToChat:', error);
//     }
// }

export async function JoinJackpotGame(userData, amount) {
    const data = {
        userCredentials: {
            searchToken: userData.searchToken,
            authtoken: userData.authtoken
        },
        bid: amount
    }

    try {
        const response = await fetch(`${BackendApiUrl}/GameJackpot/JoinJackpotGame`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            redirect: 'follow'
        })

        if (!response.ok) {
            console.log('Fetch error:', response.status)
        }

        console.log(response)
        return await response.json()
    }
    catch (error) {
        console.log('Fetch error')
    }
}

export async function getJackpotHistoryGame () {
    try {
        const response = await fetch(`${BackendApiUrl}/GameJackpot/GetNewestJackpotGames`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: "follow"
        })

        if (!response.ok) {
            console.log('Fetch error:', response.status)
        }

        console.log(response)
        return await response.json()
    }
    catch (error) {
        console.log('Fetch error')
    }
}