import { BackendApiUrl } from '@/properties/Сonfig.js';
import {
    GetCookie
} from "@/assets/js/storage/CookieStorage.js";


export async function GetNewestDoubleGames() {
    try {
        const response = await fetch(`${BackendApiUrl}/GameDouble/GetNewestDoubleGames`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        })

        if (!response.ok) {
            console.log('Fetch error:', response.status)
        }

        return await response
    }
    catch (error) {
        console.log('Fetch error')
    }
}

export async function JoinGame(amount, betColor) {

   let betColorInt = 0;
    if (betColor == "red") {
        betColorInt = 0;
    }
    if (betColor == "green") {
        betColorInt = 1;
    }
    if (betColor == "black") {
        betColorInt = 2;
    }

    const data = {
        UserCredentials: {
            SearchToken: GetCookie("SearchToken"),
            AUTHTOKEN: GetCookie("AUTHTOKEN")
        },
        bet: amount,
        betColor: betColorInt
    }

    try {
        const response = await fetch(`${BackendApiUrl}/GameDouble/JoinGame`, {
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

        return await response.json()
    }
    catch (error) {
        console.log('Fetch error')
    }
}