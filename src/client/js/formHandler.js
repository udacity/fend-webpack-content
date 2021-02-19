export { handleSubmit };

async function getResponse(url) {
  const response = await fetch("http://localhost:8081/analyze", {
    method: "POST",
    credentials: "same-origin",
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      target: url
    }
  }).then(response => response.json());

  return response;
}

async function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("url").value;
  let result = await getResponse(formText).then(data => console.log(data));
}
