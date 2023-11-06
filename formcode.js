const scriptURL = 'https://script.google.com/macros/s/AKfycbz_97RDsNphlswxrVgzqFF3lqGdxWKqlJTJxsHF10h5ZIPVPqD7Jy9mbQ7bHfHdNLg2Gw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
})