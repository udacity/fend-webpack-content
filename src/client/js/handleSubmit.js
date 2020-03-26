import postData from "./postData";

async function handleSubmit(e) {
  // this prevents the page from reloading because whenever an <input> is submitted, the default behavior is to submit the data to some database and redirect the user to another page
  e.preventDefault();
  // check what text was put into the form field
  // checkForName(formText)
  
  const userInput = document.getElementById("submit").value;
  const data = await postData("http://localhost:8080/api", { userInput });
  console.log("Data from API in Front end: ", data);
  updateUI(data);
}

const updateUI = async data => {
  try {
    const {
      polarity,
      subjectivity,
      polarity_confidence,
      subjectivity_confidence,
      text
    } = data;
    const pol = document.getElementById("polarity");
    const sub = document.getElementById("subjectivity");
    const polCon = document.getElementById("polarity_confidence");
    const subCon = document.getElementById("subjectivity_confidence");
    const polarityCapitalized =
      polarity.charAt(0).toUpperCase() + polarity.slice(1);
    const polarityConfidenceRounded = polarity_confidence.toFixed(3);
    pol.innerHTML = ` ${polarityCapitalized}, `;
    // sub.innerHTML = `Subjectivity: ${subjectivity}.`;
    polCon.innerHTML = `&nbsp with a confidence level of ${polarityConfidenceRounded}.`;
    // subCon.innerHTML = `Subjectivity confidence: ${subjectivity_confidence}.`;
    // userText.innerHMTL = `Your text: ${text}`;
  } catch (error) {
    console.log("error", error);
  }
};

export default handleSubmit;
