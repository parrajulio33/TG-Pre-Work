// information to reach API
const apiKey = 'ef481b7a83334ac2b670b994c8a06b18';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination:urlToShorten()})
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: { 'Content-type': 'application/json', 'apikey': apiKey }
    })
    if(response.ok){
      const jsonResponse = await response.json(jsonResponse)
      renderResponse(jsonResponse)
    }
  } catch(error) {
    console.log(error)
  }
}
// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
