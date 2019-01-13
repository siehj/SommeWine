import React from 'react';
import axios from 'axios';
import '../../../dist/ComponentCss/search.css';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import SearchNav from './SearchComponents/AdvSearchNav.jsx';
import SearchResults from './SearchComponents/SearchResult.jsx';
// var wines = require('../../../../database-pg/storedData').wines;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      wines: [],
      advancedSearch: true,
      start: 0,
      end: 10,
      wines: [],
      additional: {
        types: [],
        notes: [],
        regions: []
      },
    };

    this.getQuery = this.getQuery.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleAdvMenu = this.toggleAdvMenu.bind(this);
    this.FavoriteWine = this.FavoriteWine.bind(this);
    this.TasteLaterList = this.TasteLaterList.bind(this);
  }

  toggleAdvMenu() {
    console.log(this.state.advancedSearch,' => ', !this.state.advancedSearch);
    this.setState({ advancedSearch: !this.state.advancedSearch });
  }

  updateQuery(e) {
    this.setState({ query : e.target.value });
  }

  getQuery(e) {
    if (e.target.name === 'query') {
      this.setState({query: e.target.value});
    } else {
      // this is to add if not added to the object's array, or remove if already in the array. 
      // mimics the checked and unchecked nature of the boxes.
      if(!this.state.additional[e.target.name].includes(e.target.value)) {
        this.state.additional[e.target.name].push(e.target.value);
      } else {
        this.state.additional[e.target.name].splice(this.state.additional[e.target.name].indexOf(e.target.value), 1);
      }
    }
  }

  handleSearch() {
    let option = { query: this.state.query, additional: this.state.additional}
    axios.post('/api/wines', option)
      .then(({ data }) => {
        this.setState({ wines: data }, () => console.log(this.state.wines));
        // this.setState({ previousQ: this.state.query });
        this.setState({ query: '' });
      })
  }

  nextPage() {
    if(this.state.end <= this.state.wines.length) this.setState({ end: this.state.end + 10, start: this.state.start + 10 });
  }

  previousPage() {
    if(this.state.start >= 0) this.setState({ end: this.state.end - 10, start: this.state.start - 10 });
  }

  FavoriteWine(wine) {
    console.log(wine)
  }

  TasteLaterList(wine) {
    console.log(wine)
  }

  render() {
    return (
      <div>
        <h2 className="tabTitle">Search</h2>
          <InputGroup className="queryBox" >
            <InputGroupAddon addonType="prepend" onClick={this.toggleAdvMenu} >Advanced</InputGroupAddon>
            <Input name="query" value={this.state.query} onChange={this.updateQuery} /> 
            <InputGroupAddon addonType="append">
              <Button outline onClick={this.handleSearch} >Search</Button>
            </InputGroupAddon>
          </InputGroup>
        { this.state.advancedSearch ? <SearchNav /> : null }
          <div className="searchMain">
            <div className="result">
              {
                this.state.wines.slice(this.state.start, this.state.end).map((wine, i) => <SearchResults key={i} wine={wine} />)
              }
            {
              this.state.wines.length ? 
              <div className="pgChange text-center" >
                {
                  this.state.start === 0 ? <a onClick={this.nextPage} >Next Page</a> : 
                  this.state.end >= this.state.wines.length ? <a onClick={this.previousPage} >Previous Page</a> :
                  <div><a onClick={this.previousPage} > Previous Page </a> | <a onClick={this.nextPage} > Next Page </a></div>
                }
              </div>
              : null
            }
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