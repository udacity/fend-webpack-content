export { isValidUrl };

const urlRegex = new RegExp(
  "^((https?)://)([w|W]{3}.)?([a-zA-Z0-9-._]{3,}/?)+"
);

function isValidUrl(inputText) {
  console.log("::: Running urlCheck :::", inputText);

  return urlRegex.test(inputText);
}
