import { BackendApiUrl } from '@/properties/Сonfig.js';
import { DeleteAllCookie } from "@/assets/js/storage/CookieStorage";

export async function Post(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
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

  const data = {
    AUTHTOKEN: authToken,
    SearchToken: searchToken
  };
  try {
    const response = await fetch(`${BackendApiUrl}/Payment/UserMoney`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow"
    });

    if (!response.ok) {
      
      DeleteAllCookie()
      
      console.log("Fetch error:", response.status);
    }

    return await response.json();
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

export async function GetChatHistory() {

  try {
    const response = await fetch(`${BackendApiUrl}/Chat/GetChatHistory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
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

export async function ApplyPromoCode(authToken, searchToken, promoCode) {
  const data = {
    userCredentials: {
      searchToken: searchToken,
      authtoken: authToken
    },
    promoCode: promoCode
  };

  try {
    const response = await fetch(`${BackendApiUrl}/PromoCode/ApplyPromo`, {
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
