export async function Post(url = "", data = {}) {

  // Default options are marked with *
  // try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       redirect: "follow",
  //       referrerPolicy: "no-referrer",
  //       body: JSON.stringify(data),
  //     });
  //     if (!response.ok) {
  //       console.log("Fetch error:", response.status);
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.log("Fetch error:", error);
  //   }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}