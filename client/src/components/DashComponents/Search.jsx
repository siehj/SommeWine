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

    this.updateQuery = this.updateQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleAdvMenu = this.toggleAdvMenu.bind(this);
  }
  // componentDidMount() { console.log(wines) }

  toggleAdvMenu() {
    this.setState({ showAdv: !this.state.advancedSearch });
  }

  updateQuery(e) {
    this.setState({ query : e.target.value });
  }

  handleSearch() {
    let option = { query: this.state.query, additional: this.state.additional}
    $.post('/api/wines', option, (list) => {
      this.setState({ wines: list });
      // this.setState({ previousQ: this.state.query });
      this.setState({ query: '' });
    })
  }

  render() {
    return (
      <div>
        <h2 className="tabTitle">Search</h2>
          <InputGroup className="queryBox" >
            <InputGroupAddon addonType="prepend">Advanced</InputGroupAddon>
            <Input name="query" value={this.state.query} onChange={this.updateQuery} /> 
            <InputGroupAddon addonType="append">
              <Button outline >Search</Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="searchMain">
            { this.state.showAdv ? <SearchNav /> : null }
            <div className="result">
              {wines.slice(0, 10).map((wine, i) => {
                return (
                <div className="resultData" key={i} >
                  <em>{wine.name}</em>  <a>Price: ${wine.price}</a>
                  {/* <a className="heart" name={JSON.stringify(wine)} value="false" >&#9825;</a> */}
                  <br />
                  <a>Region: {wine.region} </a>
                  <br />
                  <a>Type: {wine.type}</a>
                  <br />
                </div>
              )
            })}
          </div>
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