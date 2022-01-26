
const { MongoClient } = require('mongodb');

async function fetch_colleges(min_price, max_price, state_search, collection) {
    // filtering on state
    let result;
    if (state_search == "All") {
        result = await collection.find({ }).toArray()
    }
    else {
        result = await collection.find({ state: state_search }).toArray()
    }

    // filtering on price range
    result = filter_price(result, min_price, max_price)

    // returning the final result
    return result
}

function filter_price(input_arr, min, max) {
    // console.log('printing input array elements')
    for (let i = 0; i < input_arr.length; i ++) {
        if (input_arr[i]['price'] > max) {
            input_arr.splice(i, 1)
            i --
        }
        else if (input_arr[i]['price'] < min) {
            input_arr.splice(i, 1)
            i --
        }
    }
    return input_arr
}

// export default fetch_colleges
module.exports = fetch_colleges
