import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

const ajax = async (url = "", method = "GET", data) => {
    const config = {
      method,
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (data) {
      config.body = JSON.stringify(data);
    }
    try {
      const response = await fetch("http://www.localhost:8080/test", config);
      const newData = await response.json();
      console.log("Data coming from server:", newData);
      return newData;
    } catch (error) {
      console.log("error:", error);
    }
  };

  //Add event listener

document.getElementById("submit").addEventListener("click", formHandler);
