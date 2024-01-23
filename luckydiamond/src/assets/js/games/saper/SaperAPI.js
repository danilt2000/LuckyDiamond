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

export async function GetUserData(AUTHTOKEN, SearchToken) {

    const data = {
        AUTHTOKEN: AUTHTOKEN,
        SearchToken: SearchToken
    };

    try {
        const response = await fetch(`${BackendApiUrl}/GameMines/GetCurrentData`, {
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

export async function ClickCirclePlay(InfoUser, ClickedCell) {
    const data = {
        PuttedMoney: InfoUser.PuttedMoney,
        MinesCount: InfoUser.MinesCount,
        UserCredentials: {
            SearchToken: InfoUser.SearchToken,
            AUTHTOKEN: InfoUser.AUTHTOKEN
        },
        ClickedCell: {
            X: ClickedCell.X,
            y: ClickedCell.Y
        }
    }

    try {
        const response = await fetch(`${BackendApiUrl}/GameMines/Play`, {
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
        console.error('Fetch error')
    }
}

export async function GetWinningAmount(UserInfo) {
    const data = {
        SearchToken: UserInfo.SearchToken,
        AuthToken: UserInfo.AuthToken
    }

    try {
        const response = await fetch(`${BackendApiUrl}/GameMines/TransferMoneyFromGameToWallet`, {
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
        console.log('Fetch error', error)
    }
}