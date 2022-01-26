function createNewUser() {
    // console.log('creating new user')
    // gathering form data
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let password1 = document.getElementById('first-password').value
    let password2 = document.getElementById('second-password').value

    // if the password confirmation matches...
    if (password1 === password2) {
        // send the data to the backend to be processed
        let params = {
            email: email,
            uname: username,
            pass: password1
        }
        let response = post('http://localhost:8080/create', params);
            console.log('response: ' + response)
    }
}

function post(url, data) {
    let constructedURL = url + '?uname=' + data.uname + '&email=' + data.email + '&pass=' + data.pass;
    const options = {
        method: 'POST',
    };
    // fetch( constructedURL, options )
    //     .then( response => response.json() )
    //     .then( response => {
    //         return response
    //     } );
    
    fetch( constructedURL, options )
        .then( response => console.log(response) );
    
    return "";
}

export default createNewUser;