import { BackendApiUrl } from '@/properties/Сonfig.js';

export async function GetPercentageSteps(CrystalsCount) {
    const data = {
        minesCount: CrystalsCount
    }

    try {
        const response = await fetch(`${BackendApiUrl}/GameMines/GetMultiplierPercentage`, {
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
        console.log('Fetch Error!')
    }
}

export async function GetUserData(SearchToken, AUTHTOKEN) {
    const data = {
        SearchToken: SearchToken,
        AUTHTOKEN: AUTHTOKEN
    }

    try {
        const response = await fetch(`${BackendApiUrl}/Payment/UserMoney`, {
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