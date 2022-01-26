
function output_results(detailsObj) {
    detailsObj = detailsObj[0]
    let jsx = `<h3>Location: ${detailsObj.state}</h3>
    <p>Yearly tuition cost: ${detailsObj.price}</p>
    <h4>Description: </h4>
    <p>${detailsObj.description}</p>
    <p>Read more about this school <a href=${detailsObj.wikiLink}>here</a>.</p>
    <h4>Map: </h4>`

    document.getElementById('details').innerHTML = jsx
}

export default output_results
