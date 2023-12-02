import { BackendApiUrl } from '@/properties/Сonfig.js';


export async function Post(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow"
    });

    if (!response.ok) {
      console.log("Fetch error:", response.status);
    }

    return await response.json();
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

export async function GetCurrentMoney(authToken, searchToken) {

  try {
    const response = await fetch(`${BackendApiUrl}/Payment/GetCurrentMoney`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        'AUTHTOKEN': authToken,
        'SearchToken': searchToken
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Здесь вы можете обработать полученные данные
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}




