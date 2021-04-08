const apiKey = process.env.API_KEY

const apiData = async (url = '', data = {}) => {
    const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
    })
    try {
        const newData = await res.json()
        return newData
    } catch(error) {
        console.log('error', error);
    }
}