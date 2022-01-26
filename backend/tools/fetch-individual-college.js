
async function fetch_individual_college(collegeName, collection) {
    let result = await collection.find({ name: collegeName }).toArray()
    // console.log('result for finding individual college')
    // console.log(result)
    return result
}

// export default fetch_individual_college
module.exports = fetch_individual_college
