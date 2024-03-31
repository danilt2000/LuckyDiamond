import { BackendApiUrl } from '@/properties/Сonfig.js';

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