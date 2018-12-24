import React from 'react';
import axios from 'axios';
import '../../../dist/ComponentCss/search.css';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import SearchNav from './SearchComponents/AdvSearchNav.jsx';
var wines = require('../../../../database-pg/storedData').wines;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      wines: [],
      advancedSearch: false,
    };
    this.toggleAdvMenu = this.toggleAdvMenu.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }
  componentDidMount() { console.log(wines) }

  toggleAdvMenu() {
    this.setState({ showAdv: !this.state.advancedSearch });
  }

  updateQuery(e) {
    this.setState({ query : e.target.value });
  }

  handleSearch() {

  }

  render() {
    return (
      <div>
        <h2 className="tabTitle">Search</h2>
          <InputGroup className="queryBox" >
            <Input name="query" value={this.state.query} onChange={this.updateQuery} /> 
            <InputGroupAddon addonType="append">
              <Button outline >Search</Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="searchMain">
            { this.state.showAdv ? <SearchNav /> : null }
            
          </div>
      </div>
    )
  }
}

export default Search;

{/* {props.showAdv ? <Preferences close={props.close} changePref={props.query} /> : ('')}
<div className="queryBtns" >
  <Button className="qb" value="Search" onClick={props.search}>Search</Button>
  <Button className="qb" value="Advanced Search" onClick={props.advMenu}>Advanced Search</Button>
</div>
</div>
<div className="searchResults">
<h3>Results: </h3>
<select name="searchSort" id="searchSort">
  <option value="A-Z">A-Z</option>
  <option value="Z-A">Z-A</option>
  <option value="cheapest">$ &rarr; $$$$</option>
  <option value="expensive">$$$$ &rarr; $</option>
</select> */}

{/* {props.searchResults.slice(0, 10).map((wine, i) => {
  return (
    <div className="result" key={i}>
      <div className="resultData" >
        <em>{wine.name}</em> <a className="heart">&#9825;</a>
        <br />
        <a>Region: {wine.region}</a>
        <br />
        <a>Type: {wine.type}</a>
        <br />
        <a>Rating: {wine.rating}  Price: ${wine.price}</a>
      </div>
    </div>
  )
})}
{wines.slice(0, 10).map((wine, i) => {
  return (
    <div className="result" key={i}>
    <div className="resultData" >
      <em>{wine.name}</em>  <a className="heart" name={JSON.stringify(wine)} value="false" onClick={props.addFav} >&#9825;</a>
      <br />
      <a>Region: {wine.region} </a>
      <br />
      <a>Type: {wine.type}</a>
      <br />
      <a>Price: ${wine.price}</a>
    </div>
    </div>
  )
})} */}