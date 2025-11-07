//fetch

let endpointUrl = 'https://google.com';

fetch(endpointUrl)
  .then(response => {
        if (response.ok) {
          return response.json(); 
        }
        throw new Error('Request failed!'); 
  })
  .then(jsonResponse => {
        //handle json here 
        console.log(jsonResponse); 
  })
  .catch(networkError => {
        // Handle errors
        console.error(networkError.message);
  });