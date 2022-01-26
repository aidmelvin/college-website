import './App.css';
import Filters from "./Components/Filters/Filters"
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchResults from './Components/SearchResults/SearchResults';
import IndividualCollege from './Components/IndividualCollege/IndividualCollege';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <br />
        <Routes>
          {/* <Route exact path="/" element={
          <Filters />
          <SearchResults />
          } />

          <Route exact path="/"> */}
          
          <Route exact path="/" element={<><Filters /><SearchResults /></>} />
          <Route path="/individual-college-page/:collegeName" element={<IndividualCollege />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
