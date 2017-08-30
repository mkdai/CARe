import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../../containers/navBar/navBar.jsx';
import querystring from 'querystring';

class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      shops: []
    };
  }
  componentDidMount(){
    let searchQueryString = this.props.location.search;
    console.log(searchQueryString);
    let parsed = querystring.parse(searchQueryString.substring(1));
    if(!parsed.location){
      console.log('no location found');
      navigator.geolocation.getCurrentPosition((position)=>{
        searchQueryString+= `&latitude=${position.coords.latitude}`;
        searchQueryString+= `&longitude=${position.coords.longitude}`;
        axios.get(`/api/search/allshops${searchQueryString}`)
          .then(({data}) => {
            this.setState({shops: data.businesses});
            console.log(data);
          });
      }, (err)=>console.log(err));
    } else {
      axios.get(`/api/search/allshops${searchQueryString}`)
        .then(({data}) => {
          this.setState({shops: data.businesses});
          console.log(data);
        });
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
      </div>
    );
  }
}

export default SearchResults;