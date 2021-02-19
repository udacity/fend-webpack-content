export { handleSubmit };
const spinner = document.getElementById("spinner");
const resultText = document.getElementById("results");
let postData;

async function getResponse(url) {
  console.log(postData);
  const response = await fetch("http://localhost:8081/analyze", {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

  return response;
}

async function updateUi(text) {
  console.log(text);
  spinner.style.visibility = "hidden";
  resultText.innerHTML = text.score_tag;
}

async function handleSubmit(event) {
  event.preventDefault();
  resultText.innerHTML = "";
  spinner.style.visibility = "visible";
  let formText = document.getElementById("url").value;
  postData = {
    url: formText
  };
  let result = await getResponse(formText).then(data => updateUi(data));
}
