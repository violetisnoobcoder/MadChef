// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/madchef', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/madchef',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

