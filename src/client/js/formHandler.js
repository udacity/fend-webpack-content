import { isValidUrl } from "./isValidUrl";

export { handleSubmit, getResponse };

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

async function updateUi(data) {
  console.log(data);
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

  console.log("bin da.");
  if (!isValidUrl(formText)) {
    alert("url invalid");
    return;
  }
  spinner.style.visibility = "visible";

  postData = {
    url: formText
  };
  let result = await getResponse(formText).then(data => updateUi(data));
}
