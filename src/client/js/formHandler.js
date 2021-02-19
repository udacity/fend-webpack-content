export { handleSubmit };

let postData;

async function getResponse(url) {
  console.log(postData);
  const response = await fetch("http://localhost:8081/analyze", {
    method: "POST",
    credentials: "same-origin",
    mode: "cors", // no-cors, *cors, same-origin
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

  return response;
}

async function updateUi(text) {
  console.log(text);
  let content = document.getElementById("results");
  content.innerHTML = text.score_tag;
}

async function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("url").value;
  postData = {
    url: formText
  };
  let result = await getResponse(formText).then(data => updateUi(data));
}
