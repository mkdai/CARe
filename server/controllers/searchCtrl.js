const {Shop} = require('../../db/index.js');
const axios = require('axios');
const {yelpId, yelpSecret} = require('../../env/config.js');
const qs = require('querystring');

var yelpExpiration;
var yelpToken = 'ZOhjMpWQJpVHSq7UiCHWk9UNfMLCIkmaFv2Hxa3zPO6tKp3yVABi7c5YNXXr9ItY-gcG5N_QkyByD6DRMfdFsMW1dVkOwFCAoshGuZhHgdutCkrptYua-cyhHlqkWXYx';
var autoCategories = [
  'autorepair',
  'oilchange',
  'auto_detailing',
  'autocustomization',
  'autoglass',
  'mobiledentrepair',
  'smog_check_stations',
  'tires',
  'transmissionrepair',
  'wheelrimrepair',
  'car_dealers',
  'windshieldinstallrepair'];
  
module.exports = {
  getAllShops: (req, res) =>{
    console.log('hit end point')
    if(!yelpExpiration || yelpExpiration < Date.now()){
      console.log('need auth token ', yelpId, yelpSecret);
      axios.post('https://api.yelp.com/oauth2/token', qs.stringify({
        client_id: yelpId,
        client_secret: yelpSecret,
      })).then(({data}) => {
        console.log('got yelp auth token', data);
        yelpToken = data.access_token;
        yelpExpiration = Date.now()+data.expires_in;
        let yelpSearchURL = 'https://api.yelp.com/v3/businesses/search?';
        yelpSearchURL+=`categories=${autoCategories.join(',')}`;
        if(req.query.location){
          yelpSearchURL+=`&location=${req.query.location}`;
        } else {
          yelpSearchURL+=`&latitude=${req.query.latitude}&longitude=${req.query.longitude}`
        }
        if(req.query.term){
          yelpSearchURL+=`&term=${req.query.term}`;
        }
        axios.get(yelpSearchURL,{
          headers: {'Authorization' : `Bearer ${yelpToken}`}
        }).then(searchResult=>{
            res.send(searchResult.data);
          })//.catch(err=>console.log('search results failed: ',err));
      }).catch(err=>console.log('get auth token failed: ',err));
    } else {
      let yelpSearchURL = 'https://api.yelp.com/v3/businesses/search?';
        yelpSearchURL+=`categories=${autoCategories.join(',')}`;
        if(req.query.location){
          yelpSearchURL+=`&location=${req.query.location}`;
        } else {
          yelpSearchURL+=`&latitude=${req.query.latitude}&longitude=${req.query.longitude}`
        }
        if(req.query.term){
          yelpSearchURL+=`&term=${req.query.term}`;
        }
        axios.get(yelpSearchURL,{
          headers: {'Authorization' : `Bearer ${yelpToken}`}
        }).then(searchResult=>{
            res.send(searchResult);
          }).catch(err =>console.log(err));
    }
  }
}