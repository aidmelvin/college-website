
import {states_list, min_prices, max_prices} from "./data"
import './filter-styles.css'
import fetch_results from "./fetch_results";
// import new_fetch_results from "./new_fetch_results";

/*
Todo:
  - turn the filters thing into a flexbox
  - make the flexbox run horizontally to have the filters layed out across the screen
*/

function Home() {
  return (
    <div className="filters">
    
      <p>Filter by:</p>
      <div class="option">
        <label for="states">State:</label>
        <select name="states" id="states">
          {states_list.map((element, index) =>
            <option value={element}>{element}</option>
          )}

        </select>
      </div>

      <div class="option">
        <label for="min-price">Price (min):</label>
        <select name="min-price" id="min-price">
          {min_prices.map((element, index) =>
            <option value={element}>{element}</option>
          )}

        </select>
      </div>

      <div class="option">
        <label for="max-price">Price (max):</label>
        <select name="max-price" id="max-price">
          {max_prices.map((element, index) =>
            <option value={element}>{element}</option>
          )}

        </select>
      </div>

      <div id="submit_button" onClick={fetch_results}>
        <p>Search!</p>
      </div>

    </div>
  );
}

export default Home;
