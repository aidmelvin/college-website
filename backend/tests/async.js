
import {fetch_colleges} from "../tools/fetch_colleges";

let search_results = await fetch_colleges(0, 0, "Maryland");

console.log(search_results)
