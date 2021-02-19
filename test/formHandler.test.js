// import "regenerator-runtime/runtime";
import { getResponse } from "../src/client/js/formHandler";
import "babel-polyfill";

const expectedResult = { data: { something: "nothing" } };

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(expectedResult)
  })
);

test("retrieves the response from our server", async () => {
  const response = await getResponse("https://www.thisisatest.com");
  expect(response).toEqual(expectedResult);
});
