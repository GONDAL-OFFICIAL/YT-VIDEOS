  // const scriptURL = 'https://script.google.com/macros/s/AKfycbwyDMB6GStUln-bdaE4jidAkPJzXeHUkPNZod2CP5aUIDPtniUibwQ-cRq9WneQ4ZIx/exec'
  // const form = document.forms['submit-to-google-sheet']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwyDMB6GStUln-bdaE4jidAkPJzXeHUkPNZod2CP5aUIDPtniUibwQ-cRq9WneQ4ZIx/exec'

        const form = document.forms['submit-to-google-sheet']
    
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("DAGAR DATA ENTRY SUCCUSSFULL."))
                .then(() => { window.location.reload(); })
                .catch(error => console.error('Error!', error.message))
            })