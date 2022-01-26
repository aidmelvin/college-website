
import axios from 'axios'
// import output_search_results from '../SearchResults/SearchResults'
import output_search_results from '../SearchResults/output-search-results'

function fetch_results() {
    let min_price = document.getElementById('min-price').value
    let max_price = document.getElementById('max-price').value
    let state = document.getElementById('states').value

    if (min_price <= max_price) {
        // do processing here
        const url = 'http://localhost:8080/search';
        let search_params = {
            min_price: min_price,
            max_price: max_price,
            state: state
        }
        console.log('sending get request')
        axios.get(url, { params: search_params })
            .then(res => {
                output_search_results(res.data)
        })
    }
    else {
        // todo: change this to a fancy alert popup thing
        alert('min price must be smaller than max price')
        // window.location.reload()
    }
}

export default fetch_results