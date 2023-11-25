export async function Post(url = "", data = {}) {
    // Default options are marked with *
    try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.log("Fetch error:", error);
        throw error; // Re-throw the error so it can be caught by the calling function
      }
}