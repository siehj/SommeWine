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
      advancedSearch: false,
      start: 0,
      end: 10,
      wines: [],
      allPreferences : {}
    };

    this.getQuery = this.getQuery.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.FavoriteWine = this.FavoriteWine.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleAdvMenu = this.toggleAdvMenu.bind(this);
    this.TasteLaterList = this.TasteLaterList.bind(this);
    this.getAllPreferences = this.getAllPreferences.bind(this);
  }

  componentDidMount() {
    this.getAllPreferences();  
  }
    
  getAllPreferences() {
    axios.post('/db/getAllPreferences')
      .then(({ data }) => this.setState({ allPreferences : data }));
  }

  toggleAdvMenu() {
    let element = document.getElementById("advSearchNav");
    this.setState({ advancedSearch: !this.state.advancedSearch }, () => {
      this.state.advancedSearch === true ? element.style.height = "180px" : element.style.height = "0px";
    });
    
  }

  updateQuery(e) {
    this.setState({ query : e.target.value });
  }

  getQuery(e) {
    let query = this.state.query;
    query = query.includes(e.target.value) ? query.replace(e.target.value, '') : query + ' ' + e.target.value;
    this.setState({ query : query }) 

  }

  handleSearch() {
    this.setState({ advancedSearch : false })
    axios.post('/api/wines', { query: this.state.query })
      .then(({ data }) => this.setState({ wines: data, query : '' }))
  }

  nextPage() {
    if(this.state.end <= this.state.wines.length) this.setState({ end: this.state.end + 10, start: this.state.start + 10 });
  }

  previousPage() {
    if(this.state.start >= 0) this.setState({ end: this.state.end - 10, start: this.state.start - 10 });
  }

  FavoriteWine(wine) {
    axios.post('/db/FavoriteWine', { wine })
      .then((msg) => console.log(msg))
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
        <SearchNav prefs={this.state.allPreferences} status={this.state.advancedSearch} query={this.getQuery} />
          <div className="searchMain">
            <div className="result">
              {
                this.state.wines.slice(this.state.start, this.state.end).map((wine, i) => <SearchResults key={i} wine={wine} favorite={this.FavoriteWine} taste={this.TasteLaterList} />)
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