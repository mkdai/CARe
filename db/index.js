const db = require('./config');
const Sequelize = require('sequelize');

const User = db.define('user', {
  email: { type: Sequelize.TEXT, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  phone: { type: Sequelize.INTEGER, allowNull: false }
});

const Shop = db.define('shop', {
  address: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.TEXT, allowNull: false },
  mobile: { type: Sequelize.INTEGER, allowNull: true },
  phone: { type: Sequelize.INTEGER, allowNull: false },
  pickup: { type: Sequelize.BOOLEAN, allowNull: false },
  picture: { type: Sequelize.TEXT, allowNull: true },
})

const Car = db.define('car', {
  make: { type: Sequelize.STRING, allowNull: false },
  model: { type: Sequelize.STRING, allowNull: false },
  nextService: { type: Sequelize.ARRAY(Sequelize.TEXT), allowNull: true },
  picture: { type: Sequelize.TEXT, allowNull: true },
  vin: { type: Sequelize.STRING, allowNull: false },
  year: { type: Sequelize.INTEGER, allowNull: false }
});

const HistoryEntry = db.define('historyentry', {
  date: { type: Sequelize.DATE, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false },
  mileage: { type: Sequelize.FLOAT, allowNull: false },
  notes: { type: Sequelize.TEXT, allowNull: true }
});

const Review = db.define('review', {
  rating: { type: Sequelize.INTEGER, allowNull: false },
  response: { type: Sequelize.TEXT, allowNull: true },
  review: { type: Sequelize.TEXT, allowNull: false }
})

const Appointment = db.define('appointment', {
  date: { type: Sequelize.DATE, allowNull: false },
  time: { type: Sequelize.STRING, allowNull: false }
});

const Favorite = db.define('favorite', {});

const Message = db.define('message', {
  from: { type: Sequelize.STRING, allowNull: false },
  message: { type: Sequelize.TEXT, allowNull: false },
  to: { type: Sequelize.STRING, allowNull: false }
});

const Service = db.define('service', {
  service: { type: Sequelize.STRING, allowNull: false }
});

User.hasMany(Car);
Car.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Appointment);
Appointment.belongsTo(User);

User.hasMany(Favorite);
Favorite.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

Shop.hasMany(HistoryEntry);
HistoryEntry.belongsTo(Shop);

Shop.hasMany(Review);
Review.hasMany(Shop);

Shop.hasMany(Appointment);
Appointment.belongsTo(Shop);

Shop.hasMany(Favorite);
Favorite.hasMany(Shop);

Shop.hasMany(Message);
Message.belongsTo(Shop);

Car.hasMany(HistoryEntry);
HistoryEntry.belongsTo(Car);



User.sync();
Shop.sync();
Car.sync();
HistoryEntry.sync();
Review.sync();
Appointment.sync();
Favorite.sync();
Message.sync();
Service.sync();

module.exports = {
  User,
  Shop,
  Car,
  HistoryEntry,
  Review,
  Appointment,
  Favorite,
  Message,
  Service
};