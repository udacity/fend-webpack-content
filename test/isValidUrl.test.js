import { isValidUrl } from "../src/client/js/isValidUrl";

const validUrl =
  "https://www.foreignaffairs.com/articles/united-states/2021-02-19/americas-middle-east-policy-outdated-and-dangerous";
const invalidUrl = "htps://www.google.com";
const emptyUrl = "";

test("normal Url should be valid", () => {
  expect(isValidUrl(validUrl)).toBeTruthy();
});

test("invalid url should fail", () => {
  expect(isValidUrl(invalidUrl)).toBeFalsy();
});

test("empty url should fail", () => {
  expect(isValidUrl(emptyUrl)).toBeFalsy();
});
