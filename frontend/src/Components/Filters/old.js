
// this is using Axios not the regular fetch() api
import axios from 'axios'

function new_fetch_results() {
    let min_price = document.getElementById('min-price').value
    let max_price = document.getElementById('max-price').value
    let state = document.getElementById('states').value

    if (min_price <= max_price) {
        // do processing here
        const url = 'http://localhost:8080/search?name="balaa"';
        let user = {
            message: 'from client'
        }
        
        axios.get(url, { params: { answer: 42 } })
            .then(res => {
                const persons = res.data
                console.log(persons)
        })

        axios.post(url, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        // get(url)

    }
    else {
        // todo: change this to a fancy alert popup thing
        alert('min price must be smaller than max price')
        window.location.reload()
    }
}


export default new_fetch_results
