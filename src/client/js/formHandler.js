// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

// export { handleSubmit }

const fetchApiData = async (event) => {
    event.preventDefault();
    const zipCode = document.getElementById('zip').value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=21dccba623f8a2a6eb0e845560bdbff6&units=imperial`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('API Data:', data); // Log data for debugging
    //   return data;
      const dataContainer = document.getElementById('results');
    if (data) {
      dataContainer.innerHTML = `<p><strong>Temp:</strong> ${data.main.temp}</p>
                                 <p>${data.name}</p>`;
    } else {
      dataContainer.innerHTML = '<p>Error fetching data</p>';
    }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
   
export { fetchApiData };