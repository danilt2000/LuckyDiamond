import { BackendApiUrl } from '@/properties/Сonfig.js';


export async function CrashHistory () {
    const myHeaders = new Headers();
myHeaders.append("Cookie", "ARRAffinity=a6e48b9e9d2653435be7b61998d8624b44115214104213d6c8b8c526cc56dc70; ARRAffinitySameSite=a6e48b9e9d2653435be7b61998d8624b44115214104213d6c8b8c526cc56dc70");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://spsystemcore20231122004605.azurewebsites.net/api/GameCrash/GetCrashXHistory", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}



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