
import {useParams} from 'react-router-dom';
import get_individual_details from './get-individual-details';
// import output_results from './output-results';

function IndividualCollege() {

    let school_name = useParams();
    
    // get_individual_details(school_name)
    // .then((result) => {
    //     console.log('from react page: ')
    //     console.log(result)
    //     output_results(result)
    // })
    

    return (
      <div className="individual-college">
        <h1>{school_name.collegeName}</h1>
        <div id="details" onload={get_individual_details(school_name)}>
            {/* <h3>Location: {detailsObj.location}</h3>
            <p>Yearly tuition cost: ${detailsObj.price}</p>
            <h4>Description: </h4>
            <p>{detailsObj.description}</p>
            <p>Read more about this school <a href={detailsObj.wikiLink}>here</a>.</p>
            <h4>Map: </h4> */}
            {/* implement a map */}
        </div>
      </div>
    );
  }

export default IndividualCollege;
