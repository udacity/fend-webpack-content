async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let zipCode = document.getElementById('zip').value
    console.log(zipCode);

    console.log("::: Form Submitted :::")
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=21dccba623f8a2a6eb0e845560bdbff6&units=imperial`;
    const res = await fetch (baseUrl);
    try {
      // Transform into JSON
      const data = await res.json();
      console.log(data);
      if(data) {
        document.getElementById('results').innerHTML = `<p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °F</p>`
      } else {
        document.getElementById('results').innerHTML = `<p>Error fetching Data!</p>`
      }
        
    }catch (error) {
      // Appropriately handle the error
      console.log('error:', error);
    } 
}

export { handleSubmit }

// const fetchApiData = async (event) => {
//     event.preventDefault();
//     const zipCode = document.getElementById('zip').value;
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=21dccba623f8a2a6eb0e845560bdbff6&units=imperial`;
//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log('API Data:', data); // Log data for debugging
//     //   return data;
//       const dataContainer = document.getElementById('results');
//     if (data) {
//       dataContainer.innerHTML = `<p><strong>Temp:</strong> ${data.main.temp}</p>
//                                  <p>${data.name}</p>`;
//     } else {
//       dataContainer.innerHTML = '<p>Error fetching data</p>';
//     }
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };
   
// export { fetchApiData };