import { BackendApiUrl } from '@/properties/Сonfig.js';

export async function JoinCrashGame(userData, amount) {
    const data = {
        userCredentials: {
            searchToken: userData.searchToken,
            authtoken: userData.authtoken
        },
        bid: amount
    }

    try {
        const response = await fetch(`${BackendApiUrl}/GameCrash/JoinCrashGame`, {
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

export async function ExitAndTakeMoneyFromCrashGame(userData) {
    const data = {
        exitUserCredentials: {
            searchToken: userData.searchToken,
            authtoken: userData.authtoken
        }
    }

    try {
        const response = await fetch(`${BackendApiUrl}/GameCrash/ExitAndTakeMoneyFromCrashGame`, {
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