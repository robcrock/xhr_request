document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
  // Instatiate xhr Object
  const xhr = new XMLHttpRequest();

  // OPEN is where we state the sort of request we would like to make.
  // Setting the 3rd parameter to 'true' means we want it to happen
  // asyncronously.
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  // These values map the progress of the request we have made. We can
  // use these values to monitor our requests or choose to do different
  // things at different stages of the process, such as display a spinner.

  // Ready state values
  // 0 request not initialized
  // 1 server connection established
  // 2 request recieved
  // 3 processing request
  // 4 request is finished and response is ready

  // Optional - used for spinners and loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  }

  // This is an older syntax
  xhr.onreadystatechange = function () {
    // This block is run at every state change
    console.log('READYSTATE', xhr.readyState);
    // Status is OK and request is complete
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  }

  // Now do whatever it is we what to do with the data requested.
  // onload is called when everything is ready
  xhr.onload = function() {
    // this block is run only at statechange of 4
    console.log('READYSTATE', xhr.readyState);
    // before we begin working with the data we need to make sure we
    // recieve a status code letting us know everything went well.

    // HTTP Status
    // 200 'OK'
    // 403 'Forbidden'
    // 404 'Not Found'

    if(this.status === 200) {
      console.log(this.responseText);
      document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // In case something goes wrong
  xhr.onerror = function() {
    console.log('Request error...');
  }

  // Finally send the request
  xhr.send();

}