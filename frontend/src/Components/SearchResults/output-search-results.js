
function output_search_results(stuff) {
    let jsx = ''
    jsx = stuff.map((element, index) => 
        `<section class="individual-search-result">
          <a href="/individual-college-page/${element.name}" params={{ collegeName: ${element.name} }} class="link-to-individual-college-page">${element.name}</a>
          <p class="price">Yearly Tuition: $${element.price}</p>
          <p class="state">State: ${element.state}</p>
        </section>`
      )
    // jsx = jsx[0].replace(',', '')
    // console.log('jsx type of: ')
    // console.log(typeof jsx)
    // console.log(jsx)
    if (stuff.length == 0) {
        jsx = 'There were no results. Try adjusting the search parameters.'
    }

    // clean up the jsx to remove the commas
    let final_jsx = ''
    for (let i = 0; i < jsx.length; i ++) {
        final_jsx = final_jsx + jsx[i]
    }

    document.getElementById('search-results-output').innerHTML = final_jsx;
}

// <h3 class="college-name">${element.name}</h3>

export default output_search_results;
