import { isValidUrl } from "./isValidUrl";

export { handleSubmit, getResponse };

const spinner = document.getElementById("spinner");
const resultText = document.getElementById("results");

async function getResponse(postData) {
  // console.log(postData);
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

async function updateUi(data) {
  // console.log(data);
  spinner.style.visibility = "hidden";
  resultText.innerHTML =
    "Agreement: " +
    data.agreement +
    "\tScore Tag: " +
    data.score_tag +
    "\tSubjectivity: " +
    data.subjectivity;
}

async function handleSubmit(event) {
  event.preventDefault();
  resultText.innerHTML = "";
  let formText = document.getElementById("url").value;

  if (!isValidUrl(formText)) {
    alert("url invalid");
    return;
  }
  spinner.style.visibility = "visible";
  let postData = {
    url: formText
  };
  await getResponse(postData).then(data => updateUi(data));
}
