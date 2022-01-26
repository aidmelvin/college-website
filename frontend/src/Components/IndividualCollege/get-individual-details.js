import axios from 'axios'
import output_results from './output-results'

async function get_individual_details(school) {
    const url = 'http://localhost:8080/getIndividualSchool';
    let search_params = {
        name: school
    }
    let final_result;
    console.log('sending get request for individual college')
    axios.get(url, { params: search_params })
        .then(res => {
            final_result = res.data
            output_results(final_result)
            // console.log('client side stuff: ')
            // console.log(final_result)
    })
    return final_result
}

export default get_individual_details
