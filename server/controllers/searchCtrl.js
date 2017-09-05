const { Shop, Review, User } = require("../../db/index.js");
const axios = require("axios");
const { yelpId, yelpSecret } = require("../../env/config.js");
const qs = require("querystring");
const Sequelize = require("sequelize");

var yelpExpiration;
var yelpToken;
var autoCategories = [
  "autorepair",
  "oilchange",
  "auto_detailing",
  "autocustomization",
  "autoglass",
  "mobiledentrepair",
  "smog_check_stations",
  "tires",
  "transmissionrepair",
  "wheelrimrepair",
  "car_dealers",
  "windshieldinstallrepair"
];

const processShopData = (shop, cb) => {
  Shop.find({
    where: {
      yelp_id: shop.id
    }
  }).then(response => {
    console.log(response.dataValues);
    shop.isSupported = true;
    shop.rating = response.dataValues.rating;
    Review.findAll({
      where: { shopId: response.dataValues.id },
      include: [User]
    }).then(reviews => {
      // if (reviews) {
      shop.reviews = reviews.map(review => {
        review.dataValues.user = review.user.dataValues;
        return review.dataValues;
      });
      shop.review_count = shop.reviews.length;
      console.log("these are shops reviews: ", shop.reviews);
      // } else {
      //   shop.reviews = [];
      // }
      cb(shop);
    });
  });
  // .catch(() => {
  //   console.log("nothing in our database!");
  //   shop.isSupported = false;
  //   cb(shop);
  // });
};
const processShopResultData = (shops, cb) => {
  let yelpIds = [];
  shops.map(shop => yelpIds.push(shop.id));
  Shop.findAll({
    where: {
      $or: [
        {
          yelp_id: yelpIds
        }
      ]
    }
  }).then(rows => {
    let matchedYelpIds = rows.map(row => row.dataValues.yelp_id);
    shops.map(shop => {
      if (matchedYelpIds.indexOf(shop.id) !== -1) {
        shop.isSupported = true;
      } else {
        shop.isSupported = false;
      }
    });
    shops.sort((a, b) => {
      if (a.isSupported === b.isSupported) {
        return 0;
      }
      if (a.isSupported && !b.isSupported) {
        return -1;
      }
      if (!a.isSupported && b.isSupported) {
        return 1;
      }
    });
    cb(shops);
  });
};

module.exports = {
  getAllShops: (req, res) => {
    if (!yelpExpiration || yelpExpiration < Date.now()) {
      axios
        .post(
          "https://api.yelp.com/oauth2/token",
          qs.stringify({
            client_id: yelpId,
            client_secret: yelpSecret
          })
        )
        .then(({ data }) => {
          yelpToken = data.access_token;
          yelpExpiration = Date.now() + data.expires_in;
          let yelpSearchURL = "https://api.yelp.com/v3/businesses/search?";
          yelpSearchURL += `categories=${autoCategories.join(",")}`;
          if (req.query.location) {
            yelpSearchURL += `&location=${req.query.location}`;
          } else {
            yelpSearchURL += `&latitude=${req.query.latitude}&longitude=${req
              .query.longitude}`;
          }
          if (req.query.term) {
            yelpSearchURL += `&term=${req.query.term}`;
          }
          axios
            .get(yelpSearchURL, {
              headers: { Authorization: `Bearer ${yelpToken}` }
            })
            .then(searchResult => {
              processShopResultData(searchResult.data.businesses, data =>
                res.send(data)
              );
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    } else {
      let yelpSearchURL = "https://api.yelp.com/v3/businesses/search?";
      yelpSearchURL += `categories=${autoCategories.join(",")}`;
      if (req.query.location) {
        yelpSearchURL += `&location=${req.query.location}`;
      } else {
        yelpSearchURL += `&latitude=${req.query.latitude}&longitude=${req.query
          .longitude}`;
      }
      if (req.query.term) {
        yelpSearchURL += `&term=${req.query.term}`;
      }
      axios
        .get(yelpSearchURL, {
          headers: { Authorization: `Bearer ${yelpToken}` }
        })
        .then(searchResult => {
          processShopResultData(searchResult.data.businesses, data =>
            res.send(data)
          );
        })
        .catch(err => console.log(err));
    }
  },
  getShop: (req, res) => {
    if (!yelpExpiration || yelpExpiration < Date.now()) {
      console.log("need auth token ", yelpId, yelpSecret);
      axios
        .post(
          "https://api.yelp.com/oauth2/token",
          qs.stringify({
            client_id: yelpId,
            client_secret: yelpSecret
          })
        )
        .then(({ data }) => {
          yelpToken = data.access_token;
          yelpExpiration = Date.now() + data.expires_in;
          let yelpSearchURL = `https://api.yelp.com/v3/businesses/${req.query
            .id}`;
          axios
            .get(yelpSearchURL, {
              headers: { Authorization: `Bearer ${yelpToken}` }
            })
            .then(searchResult => {
              processShopData(searchResult.data, data => res.send(data));
            })
            .catch(err => {
              res.statusCode = 404;
              res.send();
            });
        })
        .catch(err => console.log(err.data));
    } else {
      let yelpSearchURL = `https://api.yelp.com/v3/businesses/${req.query.id}`;
      axios
        .get(yelpSearchURL, {
          headers: { Authorization: `Bearer ${yelpToken}` }
        })
        .then(searchResult => {
          processShopData(searchResult.data, data => res.send(data));
        })
        .catch(err => {
          res.statusCode = 404;
          res.send();
        });
    }
  }
};
